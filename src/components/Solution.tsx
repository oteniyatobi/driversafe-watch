import { Camera, Smartphone, Siren } from "lucide-react";
import { FadeIn } from "./FadeIn";

const solutions = [
  {
    icon: Camera,
    title: "Hardware Camera",
    desc: "Monitors driver behavior in real-time, detecting fatigue and distraction using an in-car camera powered by ML.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Provides real-time alerts, stores driving data, and manages emergency notifications seamlessly.",
  },
  {
    icon: Siren,
    title: "Emergency Protocol",
    desc: "Notifies a selected contact or nearby hospitals if the driver is unresponsive after alerts.",
  },
];

const Solution = () => {
  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="container">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-accent status-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Resolution Protocol</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Our Solution</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            DriverWatch provides a complete hardware + software system to keep drivers safe.
          </p>
        </FadeIn>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {solutions.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="glow-border rounded-lg bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
