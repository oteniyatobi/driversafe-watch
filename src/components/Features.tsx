import { Bell, Eye, MapPin, Hospital, BarChart3, Link2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const features = [
  { icon: Bell, title: "Real-time Alerts", desc: "Instant notifications for unsafe driving behavior detected by the camera." },
  { icon: Eye, title: "Drowsiness Detection", desc: "Audible alarm triggered when signs of drowsiness or inattention are detected." },
  { icon: MapPin, title: "Emergency Notification", desc: "Contacts are notified with the driver's real-time location in emergencies." },
  { icon: Hospital, title: "Hospital / First Responder Alert", desc: "Optional alerts sent to nearby hospitals or first responders." },
  { icon: BarChart3, title: "Behavior Tracking", desc: "Track and review driving patterns over time to improve habits." },
  { icon: Link2, title: "Seamless Integration", desc: "Effortless connection between the hardware camera and mobile app." },
];

const Features = () => {
  return (
    <section className="bg-section-alt py-20 md:py-24">
      <div className="container">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-foreground">Core Features</h2>
        </FadeIn>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold text-card-foreground">{f.title}</h3>
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
