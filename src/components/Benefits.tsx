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
    <section className="border-b border-border py-16 sm:py-20 md:py-24">
      <div className="container max-w-3xl px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent status-pulse" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent">Driver Benefits</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">How Drivers Benefit</h2>
        </FadeIn>
        <ul className="mt-8 sm:mt-10 space-y-2.5 sm:space-y-3">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <li className="flex items-start gap-3 rounded border border-border bg-card p-3 sm:p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-accent" />
                <span className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{b}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
