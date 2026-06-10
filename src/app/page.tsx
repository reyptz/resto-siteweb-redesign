import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutPreview } from "@/components/home/AboutPreview";
import { QuoteEstimator } from "@/components/interactive/QuoteEstimator";
import { Cta } from "@/components/home/Cta";
import { CoveragePreview } from "@/components/home/CoveragePreview";

export default function HomePage() {
  return (
    <main className="bg-bg-dark">
      <Hero />
      <Stats />
      <ServicesGrid />

      {/* Estimator Section */}
      <section
        id="estimator"
        className="py-24 bg-surface relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,108,74,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="reveal mb-16 text-center">
            <div className="badge badge-primary mb-4 mx-auto">
              Outil interactif
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold text-text-main leading-tight tracking-tight">
              Estimez votre coût <br/>
              <span className="text-gradient-warm">en temps réel</span>
            </h2>
            <p className="text-text-muted mt-6 max-w-2xl mx-auto text-base md:text-lg">
              Simulez instantanément le coût de votre connexion fibre optique ou
              de votre hébergement dans notre data center.
            </p>
          </div>
          <div className="reveal">
            <QuoteEstimator />
          </div>
        </div>
      </section>

      <CoveragePreview />
      <AboutPreview />
      <Cta />
    </main>
  );
}
