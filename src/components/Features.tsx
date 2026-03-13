import { Bell, Eye, MapPin, Hospital, BarChart3, Link2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const features = [
  { icon: Bell, title: "Real-time Alerts", desc: "Instant notifications for unsafe driving behavior detected by the camera." },
  { icon: Eye, title: "Drowsiness Detection", desc: "Audible alarm triggered when signs of drowsiness or inattention are detected." },
  { icon: MapPin, title: "Emergency Notification", desc: "Contacts are notified with the driver's real-time location in emergencies." },
  { icon: Hospital, title: "Hospital Alert", desc: "Optional alerts sent to nearby hospitals or first responders." },
  { icon: BarChart3, title: "Behavior Tracking", desc: "Track and review driving patterns over time to improve habits." },
  { icon: Link2, title: "Seamless Integration", desc: "Effortless connection between the hardware camera and mobile app." },
];

const Features = () => {
  return (
    <section className="border-b border-border bg-section-alt py-20 md:py-24">
      <div className="container">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-primary status-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">System Modules</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Core Features</h2>
        </FadeIn>
        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group rounded border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-[0_0_20px_hsl(190_90%_50%/0.08)]">
                <div className="flex h-9 w-9 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <f.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="mt-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
