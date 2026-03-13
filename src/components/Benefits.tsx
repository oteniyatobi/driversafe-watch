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
    <section className="border-b border-border py-20 md:py-24">
      <div className="container max-w-3xl">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-accent status-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Driver Benefits</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">How Drivers Benefit</h2>
        </FadeIn>
        <ul className="mt-10 space-y-3">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <li className="flex items-start gap-3 rounded border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-muted-foreground">{b}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
