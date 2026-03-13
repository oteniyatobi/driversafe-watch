import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const benefits = [
  "Enhanced safety through proactive alerts before accidents happen.",
  "Immediate assistance in case of emergencies via automated notifications.",
  "Awareness of driving habits to improve over time with behavior tracking.",
  "Peace of mind knowing you are actively monitored and protected.",
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container max-w-3xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-foreground">How Drivers Benefit</h2>
        </FadeIn>
        <ul className="mt-10 space-y-5">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <span className="text-base leading-relaxed text-muted-foreground">{b}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
