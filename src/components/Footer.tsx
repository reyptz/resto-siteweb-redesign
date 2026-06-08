import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { CONTACT_INFO } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-surface relative overflow-hidden border-t border-white/5 pt-20 pb-8">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & description */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-surface-elevated to-bg-dark rounded-xl flex items-center justify-center shrink-0 shadow-lg border border-white/5">
                <div className="relative w-7 h-7">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-accent-primary rounded-sm shadow-[0_0_8px_rgba(217,108,74,0.3)]"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1.5 bg-white rounded-sm"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-accent-secondary rounded-sm shadow-[0_0_8px_rgba(229,192,123,0.3)]"></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-syne font-bold text-white tracking-tight">
                  SMTD-SA
                </h2>
                <p className="text-xs text-text-muted font-bold uppercase tracking-widest mt-0.5">
                  Entreprise d&apos;État
                </p>
              </div>
            </div>

            <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-md">
              La Société Malienne de Transmission et de Diffusion assure le
              déploiement et l&apos;exploitation des infrastructures numériques
              nationales pour une souveraineté digitale du Mali.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={CONTACT_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface-elevated border border-white/5 rounded-full flex items-center justify-center text-text-muted hover:border-accent-primary/30 hover:text-accent-primary transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Icon name="document" size={18} />
              </a>
            </div>
          </div>

          {/* Column 1: Liens rapides */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-syne font-bold mb-5 text-sm uppercase tracking-wider">
              Liens rapides
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/a-propos" },
                { label: "Services", href: "/services" },
                { label: "Couverture", href: "/couverture" },
                { label: "Actualités", href: "/actualites" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent-secondary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-secondary/50 group-hover:bg-accent-secondary transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-syne font-bold mb-5 text-sm uppercase tracking-wider">
              Nos services
            </h3>
            <ul className="space-y-3">
              {[
                {
                  label: "Fibre optique dédiée",
                  href: "/services/fibre-optique",
                },
                {
                  label: "Hébergement Data Center",
                  href: "/services/data-center",
                },
                { label: "TNT Diffusion", href: "/services/tnt" },
                { label: "Call Center", href: "/services/call-center" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-primary/50 group-hover:bg-accent-primary transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-syne font-bold mb-5 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/5 flex items-center justify-center shrink-0 text-accent-secondary group-hover:bg-accent-secondary/10 transition-colors">
                  <Icon name="map-pin" size={18} />
                </div>
                <div className="text-sm text-text-muted pt-1">
                  {CONTACT_INFO.address.line1} <br />
                  {CONTACT_INFO.address.line2}
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/5 flex items-center justify-center shrink-0 text-accent-primary group-hover:bg-accent-primary/10 transition-colors">
                  <Icon name="phone" size={18} />
                </div>
                <div className="text-sm text-text-muted pt-1">
                  {CONTACT_INFO.phones.map((p) => (
                    <div key={p.label}>
                      {p.label}: {p.value}
                    </div>
                  ))}
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-white/5 flex items-center justify-center shrink-0 text-text-main group-hover:bg-white/10 transition-colors">
                  <Icon name="mail" size={18} />
                </div>
                <div className="text-sm text-text-muted pt-1">
                  {CONTACT_INFO.emails.map((e) => (
                    <div key={e.label}>
                      {e.label}: {e.value}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted/70 font-medium">
            &copy; {new Date().getFullYear()} SMTD-SA. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-xs text-text-muted/70 hover:text-white transition-colors font-medium"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-xs text-text-muted/70 hover:text-white transition-colors font-medium"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/cgu"
              className="text-xs text-text-muted/70 hover:text-white transition-colors font-medium"
            >
              CGU
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
