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
    <section className="py-20 md:py-24">
      <div className="container">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-foreground">Our Solution</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            DriverWatch provides a complete hardware + software system to keep drivers safe.
          </p>
        </FadeIn>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
          {solutions.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
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
