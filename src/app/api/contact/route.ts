import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { validateEmail, validateRequired } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      message,
      website_hp,
      _t,
    } = body;

    // Anti-Spam Check 1: Honeypot trap
    if (website_hp && String(website_hp).trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Votre message a bien été enregistré.",
        id: "spam_filtered",
        emailSent: false,
      });
    }

    // Anti-Spam Check 2: Rapid submission
    if (_t && typeof _t === "number") {
      const elapsed = Date.now() - _t;
      if (elapsed < 1200) {
        return NextResponse.json(
          { error: "Soumission trop rapide. Veuillez patienter un instant." },
          { status: 400 }
        );
      }
    }

    // Validate inputs
    if (
      !validateRequired(name) ||
      !validateRequired(email) ||
      !validateRequired(message)
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
    const submissionId = "MV-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    const submission = {
      id: submissionId,
      date: submissionDate,
      name,
      email,
      phone: phone || "",
      subject: subject || "contact",
      message,
    };

    // Save submission locally
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
    const from = process.env.SMTP_FROM || "no-reply@maisonvelours.fr";
    const to = process.env.CONTACT_RECEIVER_EMAIL || "reservation@maisonvelours.fr";

    let emailSent = false;

    if (host && user && pass) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
        });

        const mailSubject = `[Maison Velours] Nouvelle demande (${subject}) de ${name}`;
        const htmlContent = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0A0A0C; color: #FAF7F2; border-radius: 12px; border: 1px solid #272732;">
            <h2 style="color: #D4AF37; margin-top: 0;">Maison Velours Paris - Nouvelle Demande</h2>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}" style="color: #D4AF37;">${email}</a></p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
            <p><strong>Objet :</strong> ${subject}</p>
            <div style="background: #121216; padding: 16px; border-radius: 8px; margin-top: 16px; border-left: 3px solid #D4AF37;">
              <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #71717A; margin-top: 24px;">ID : ${submissionId} | ${new Date().toLocaleString("fr-FR")}</p>
          </div>
        `;

        await transporter.sendMail({
          from: `"${name}" <${from}>`,
          to,
          replyTo: email,
          subject: mailSubject,
          html: htmlContent,
          text: `Maison Velours - Demande\nNom : ${name}\nEmail : ${email}\nTéléphone : ${phone}\nObjet : ${subject}\n\nMessage :\n${message}`,
        });

        emailSent = true;
      } catch (smtpError) {
        console.error("SMTP error:", smtpError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Votre demande a bien été transmise à la Maison Velours.",
      id: submissionId,
      emailSent,
    });
  } catch (error) {
    console.error("API Contact error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 },
    );
  }
}
