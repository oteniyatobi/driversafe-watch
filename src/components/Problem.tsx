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
    <section className="bg-section-alt py-20 md:py-24">
      <div className="container max-w-3xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold text-foreground">The Problem</h2>
        </FadeIn>
        <ul className="mt-10 space-y-4">
          {problems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <li className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problem;
