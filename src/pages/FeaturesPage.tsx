import Header from "@/components/Header";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { DriverWatchIcon } from "@/components/Logo";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <section className="bg-white border-b border-border py-16 sm:py-20">
        <div className="container px-4">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="section-label">Platform Features</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-5">
                Built for safety. <br />Designed for reliability.
              </h1>
              <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
                DriverWatch packs every tool a driver, fleet manager, or safety officer needs
                into one seamlessly connected platform — real-time, accurate, and always on.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features grid */}
      <Features />

      {/* How the system connects */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container px-4 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-label block mb-4">The System</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Hardware meets intelligent software.
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Our end-to-end platform links in-car hardware, mobile app, and emergency
                protocols into one unified safety system.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { title: "99.2%", sub: "Detection accuracy", desc: "ML-powered facial recognition in real-world driving conditions." },
              { title: "< 200ms", sub: "System latency", desc: "From detection to alert delivery — faster than a blink." },
              { title: "100%", sub: "Cloud encrypted", desc: "All telemetry and location data is end-to-end encrypted." },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl border border-border p-8">
                  <div className="text-4xl font-bold text-primary mb-1">{s.title}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{s.sub}</div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
