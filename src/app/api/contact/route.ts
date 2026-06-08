import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { validateEmail, validateRequired } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      tab,
      name,
      email,
      phone,
      company,
      service,
      partnershipType,
      message,
    } = body;

    // Validate inputs
    if (
      !validateRequired(name) ||
      !validateRequired(email) ||
      !validateRequired(message) ||
      !validateRequired(tab)
    ) {
      return NextResponse.json(
        {
          error:
            "Veuillez remplir tous les champs obligatoires (Nom, Email, Message).",
        },
        { status: 400 },
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Veuillez fournir une adresse email valide." },
        { status: 400 },
      );
    }

    const submissionDate = new Date().toISOString();
    const submissionId = Math.random().toString(36).substring(2, 9);

    const submission = {
      id: submissionId,
      date: submissionDate,
      tab,
      name,
      email,
      phone: phone || "",
      company: company || "",
      service: service || "",
      partnershipType: partnershipType || "",
      message,
    };

    // Save submission locally to JSON file (as backup database)
    try {
      const dataDir = path.join(process.cwd(), "submissions");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
      }
      const filePath = path.join(dataDir, "submissions.json");
      let submissionsList = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        submissionsList = JSON.parse(fileContent || "[]");
      }
      submissionsList.push(submission);
      fs.writeFileSync(
        filePath,
        JSON.stringify(submissionsList, null, 2),
        "utf-8",
      );
    } catch (fsError) {
      console.error("Failed to save submission locally:", fsError);
    }

    // SMTP email configuration
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || "no-reply@smtd.ml";
    const to = process.env.CONTACT_RECEIVER_EMAIL || "info@smtd.ml";

    let emailSent = false;
    let emailErrorMsg = "";

    if (host && user && pass) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465, // true for port 465, false for other ports
          auth: {
            user,
            pass,
          },
        });

        const subjectMap = {
          technique: `[Assistance Technique] Nouvelle demande de ${name}`,
          devis: `[Demande de Devis] Nouvelle demande de ${name}`,
          partenariat: `[Proposition de Partenariat] Nouvelle demande de ${name}`,
        };
        const mailSubject =
          subjectMap[tab as keyof typeof subjectMap] ||
          `[Contact Site Web] Nouveau message de ${name}`;

        const htmlContent = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">
              Nouveau message reçu depuis smtd.ml
            </h2>
            <p><strong>Type de demande :</strong> <span style="background-color: #f0f0f0; padding: 3px 8px; border-radius: 4px; font-weight: bold; text-transform: uppercase;">${tab}</span></p>
            <p><strong>Nom complet :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ""}
            ${service ? `<p><strong>Service concerné :</strong> ${service}</p>` : ""}
            ${partnershipType ? `<p><strong>Type de partenariat :</strong> ${partnershipType}</p>` : ""}
            
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin-top: 20px; border-left: 4px solid #c9a227;">
              <h3 style="margin-top: 0;">Message :</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <p style="font-size: 11px; color: #888; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
              Date de soumission : ${new Date().toLocaleString("fr-FR")} | ID : ${submissionId}
            </p>
          </div>
        `;

        await transporter.sendMail({
          from: `"${name} (Via SMTD)" <${from}>`,
          to,
          replyTo: email,
          subject: mailSubject,
          html: htmlContent,
          text: `Nouveau message reçu depuis smtd.ml\nType de demande : ${tab.toUpperCase()}\nNom complet : ${name}\nEmail : ${email}\n${phone ? "Téléphone : " + phone : ""}\n${company ? "Entreprise : " + company : ""}\n${service ? "Service concerné : " + service : ""}\n${partnershipType ? "Type de partenariat : " + partnershipType : ""}\nMessage :\n${message}\n----------------------------------------\nDate de soumission : ${new Date().toLocaleString("fr-FR")} | ID : ${submissionId}`,
        });

        emailSent = true;
      } catch (smtpError) {
        console.error("SMTP email sending failed:", smtpError);
        emailErrorMsg =
          smtpError instanceof Error ? smtpError.message : String(smtpError);
      }
    } else {
      console.warn(
        "SMTP environment variables are not configured. Email notification skipped.",
      );
      emailErrorMsg = "Variables SMTP non configurées dans le fichier .env.";
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été enregistré.",
      id: submissionId,
      emailSent,
      ...(emailErrorMsg ? { emailWarning: emailErrorMsg } : {}),
    });
  } catch (error) {
    console.error("API Contact route error:", error);
    return NextResponse.json(
      {
        error: "Une erreur interne est survenue. Veuillez réessayer plus tard.",
      },
      { status: 500 },
    );
  }
}
