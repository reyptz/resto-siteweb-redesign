import { MapMali } from "@/components/interactive/MapMali";
import { Icon } from "@/components/ui/Icon";

export function CoveragePreview() {
  return (
    <section
      id="coverage"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="glow-bg bottom-0 right-0 bg-secondary/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map Column */}
          <div className="reveal order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <MapMali />
          </div>

          {/* Text Column */}
          <div className="reveal order-1 lg:order-2 flex flex-col gap-8">
            <div>
              <div className="badge badge-primary mb-4">
                Couverture nationale
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-tight tracking-tight">
                Une infrastructure qui couvre <br />
                <span className="text-gradient">
                  tout le territoire du Mali
                </span>
              </h2>
            </div>

            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              De Bamako à Kidal, la <strong className="text-gray-900">SMTD-SA</strong> assure
              l&apos;interconnexion nationale et l&apos;accès aux autoroutes de la
              communication numérique grâce à son réseau étendu de fibre
              optique, pylônes de télécommunication et émetteurs TNT terrestres.
            </p>

            <div className="flex flex-col gap-5 mt-2">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100/80 hover:border-secondary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary border border-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon name="globe" size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-heading font-bold text-gray-900 text-base mb-1">
                    Réseau fibre national
                  </h4>
                  <p className="text-text-muted text-xs md:text-sm">
                    Plus de 3000 km de fibre optique déployés dans tout le pays
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100/80 hover:border-primary/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon name="server" size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-heading font-bold text-gray-900 text-base mb-1">
                    Centres de données sécurisés
                  </h4>
                  <p className="text-text-muted text-xs md:text-sm">
                    Hébergement redondant et supervision 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100/80 hover:border-gray-300 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-800 border border-gray-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon name="tv" size={24} />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-heading font-bold text-gray-900 text-base mb-1">
                    Couverture TNT
                  </h4>
                  <p className="text-text-muted text-xs md:text-sm">
                    Diffusion numérique terrestre dans les principales villes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
