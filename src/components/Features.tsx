import { Bell, Eye, MapPin, Navigation, Gauge, Radio } from "lucide-react";
import { FadeIn } from "./FadeIn";

const features = [
  { icon: Bell, title: "Real-time Alerts", desc: "Instant audio-visual notifications for unsafe driving behavior detected by the integrated dashboard camera." },
  { icon: Eye, title: "Drowsiness Detection", desc: "Intelligent facial mapping triggers a high-decibel audible alarm when signs of microsleeps are detected." },
  { icon: MapPin, title: "Live GPS Tracking", desc: "Emergency contacts receive an encrypted link with the vehicle's real-time GPS location coordinates." },
  { icon: Navigation, title: "Emergency Dispatch", desc: "Automated distress signals sent to nearby first responders and designated emergency contacts." },
  { icon: Gauge, title: "Telemetry History", desc: "Track driving telemetry, speed variances, and alertness patterns over time to improve safety habits." },
  { icon: Radio, title: "Hardware Sync", desc: "Seamless, low-latency connection between the vehicle hardware camera and the companion mobile app." },
];

const Features = () => {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28 relative overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

      <div className="container px-4 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-3 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/80">System Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center sm:text-left mb-12">Dashboard Features</h2>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group glass-panel rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] hover:dashboard-border relative overflow-hidden h-full">
                
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-white/10 bg-black/50 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300">
                    <f.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <h3 className="mt-8 font-display text-lg font-semibold uppercase tracking-wide text-foreground group-hover:text-white transition-colors">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors">{f.desc}</p>
                </div>
                
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 ease-in-out" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
