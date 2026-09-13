import Header from "@/components/Header";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { DriverWatchIcon } from "@/components/Logo";
import { Shield } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <section className="bg-white border-b border-border py-16 sm:py-20">
        <div className="container px-4">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="section-label">Our Mission</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-5">
                Why we built DriverWatch.
              </h1>
              <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
                Every year, thousands of road accidents are caused by fatigue and distraction —
                tragedies that technology should be able to prevent. DriverWatch was built to
                change that, with intelligent real-time monitoring that acts before harm occurs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission banner */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white rounded-2xl border border-border p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A world where no driver is lost to preventable road accidents. We believe
                  that proactive, intelligent monitoring — not reactive measures — is the key
                  to safer roads for everyone.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-primary rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <DriverWatchIcon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Driver Safety. Always Watching.</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  DriverWatch is an advanced driver telemetry and safety solution. By combining
                  precision hardware with a connected mobile application, it continuously monitors
                  driver alertness in real-time — deploying instant alerts and automated emergency
                  notifications when it matters most.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Problem />

      {/* Solution */}
      <Solution />

      {/* Benefits */}
      <Benefits />

      <Contact />
      <Footer />
    </div>
  );
};

export default AboutPage;
