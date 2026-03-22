import { AlertTriangle } from "lucide-react";
import { FadeIn } from "./FadeIn";

const problems = [
  "Road accidents are a major concern, often caused by fatigue, distraction, or human error.",
  "Drivers often lack personal tools to monitor their alertness and correct unsafe behavior.",
  "Existing safety measures cannot fully prevent accidents due to human error.",
  "Higher risk of injuries, fatalities, and financial losses from vehicle damage and medical expenses.",
];

const Problem = () => {
  return (
    <section className="border-b border-border bg-section-alt py-16 sm:py-20 md:py-24">
      <div className="container max-w-3xl px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-warning status-pulse" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-warning">Threat Analysis</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">The Problem</h2>
        </FadeIn>
        <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
          {problems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <li className="flex items-start gap-3 rounded border border-border bg-card p-3 sm:p-4">
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning" />
                <span className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problem;
