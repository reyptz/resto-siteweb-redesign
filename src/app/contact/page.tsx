import { Metadata } from "next";
import { ContactForm } from "@/components/interactive/ContactForm";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez la Société Malienne de Transmission et de Diffusion pour toute demande de renseignements.",
};

export default function ContactPage() {
  return (
    <div className="bg-bg-dark min-h-screen text-white pt-24 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,108,74,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <div className="badge badge-secondary mb-6 mx-auto">
            Nous contacter
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white mb-6 tracking-tight">
            Contactez-<span className="text-gradient-warm">nous</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions et vous accompagner dans vos projets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 reveal">
            <h2 className="text-3xl font-syne font-bold text-white mb-8">
              Nos coordonnées
            </h2>
            <div className="grid gap-6">
              <div className="flex items-start gap-5 p-6 glass-panel border-accent-secondary/20 hover:border-accent-secondary/50 transition-colors group">
                <div className="w-14 h-14 bg-accent-secondary/10 text-accent-secondary rounded-2xl flex items-center justify-center shrink-0 border border-accent-secondary/20 group-hover:scale-105 transition-transform">
                  <Icon name="map-pin" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-syne font-semibold text-white mb-1">
                    Adresse
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Route de l&apos;Aéroport, en face de la Météo
                    <br /> Bamako, Mali
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 glass-panel border-accent-primary/20 hover:border-accent-primary/50 transition-colors group">
                <div className="w-14 h-14 bg-accent-primary/10 text-accent-primary rounded-2xl flex items-center justify-center shrink-0 border border-accent-primary/20 group-hover:scale-105 transition-transform">
                  <Icon name="phone" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-syne font-semibold text-white mb-1">
                    Téléphone
                  </h3>
                  <p className="text-text-muted text-sm mb-1">Standard : +223 20 70 81 71</p>
                  <p className="text-text-muted text-sm">Commercial : +223 20 70 81 68</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 glass-panel border-white/10 hover:border-white/30 transition-colors group">
                <div className="w-14 h-14 bg-white/5 text-white rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-105 transition-transform">
                  <Icon name="mail" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-syne font-semibold text-white mb-1">
                    Email
                  </h3>
                  <p className="text-text-muted text-sm mb-1">info@smtd.ml</p>
                  <p className="text-text-muted text-sm">commercial@smtd.ml</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 glass-panel border-white/10 hover:border-white/30 transition-colors group">
                <div className="w-14 h-14 bg-white/5 text-white rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-105 transition-transform">
                  <Icon name="clock" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-syne font-semibold text-white mb-1">
                    Horaires
                  </h3>
                  <p className="text-text-muted text-sm mb-1">
                    Lundi - Vendredi : 07h30 - 16h30
                  </p>
                  <p className="text-text-muted/60 text-xs font-medium uppercase tracking-widest mt-2">
                    Support technique : 24h/24 - 7j/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
