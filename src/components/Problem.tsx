import { AlertTriangle, AlertOctagon } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const problems = [
  { text: "Road accidents are a major concern, often caused by fatigue, distraction, or human error.", severity: 92 },
  { text: "Drivers often lack personal tools to monitor their alertness and correct unsafe behavior.", severity: 78 },
  { text: "Existing safety measures cannot fully prevent accidents due to human error.", severity: 85 },
  { text: "Higher risk of injuries, fatalities, and financial losses from vehicle damage and medical expenses.", severity: 96 },
];

const Problem = () => {
  return (
    <section className="border-b border-border bg-section-alt py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background warning glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-3xl px-4 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-warning" />
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-warning">Threat Analysis</span>
          </div>
          <div className="flex items-start gap-4">
            <AlertOctagon className="h-8 w-8 text-destructive/80 mt-1 shrink-0 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">The Problem</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-lg">
                Current road safety infrastructure is failing to prevent human-error-related incidents.
              </p>
            </div>
          </div>
        </FadeIn>

        <ul className="mt-8 sm:mt-10 space-y-4">
          {problems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <li className="group relative rounded-xl border border-border bg-card overflow-hidden hover:border-destructive/30 transition-colors duration-300">
                {/* Left severity stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-destructive/60 to-warning/60" />

                <div className="p-4 sm:p-5 pl-5 sm:pl-6">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]" />
                    <span className="text-xs sm:text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors">
                      {item.text}
                    </span>
                  </div>

                  {/* Threat level bar */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground/60 shrink-0">
                      Threat Level
                    </span>
                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.severity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-warning to-destructive"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-destructive font-bold shrink-0">{item.severity}%</span>
                  </div>
                </div>

                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-destructive/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problem;
