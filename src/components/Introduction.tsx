import { FadeIn } from "./FadeIn";
import { Eye, Camera, Smartphone, Siren } from "lucide-react";

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Camera,
    title: "Hardware Camera",
    desc: "An in-car camera continuously captures the driver's face using machine learning to detect fatigue and distraction.",
  },
  {
    step: "02",
    icon: Smartphone,
    title: "Mobile App Alert",
    desc: "The companion app receives instant alerts and stores driving data, keeping drivers and fleet managers informed.",
  },
  {
    step: "03",
    icon: Siren,
    title: "Emergency Protocol",
    desc: "If the driver is unresponsive after alerts, automated distress signals are sent to emergency contacts and nearby hospitals.",
  },
];

const Introduction = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="container max-w-5xl px-4">
        {/* Section header */}
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-4 h-4 text-accent" />
              <span className="section-label">What is DriverWatch?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Advanced driver safety, intelligently monitored.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              DriverWatch combines precision hardware with a connected mobile application to
              continuously monitor driver alertness in real-time. When unsafe behaviour, fatigue,
              or distraction is detected, it deploys instant alerts and initiates automated
              emergency notifications — actively reducing collision risks.
            </p>
          </div>
        </FadeIn>

        {/* How it works steps */}
        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden sm:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-border z-0" />

          {HOW_IT_WORKS.map((item, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className="relative z-10 text-center sm:text-left">
                {/* Step number + icon */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-md">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
