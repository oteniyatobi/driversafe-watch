import { AlertTriangle, AlertCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const problems = [
  { text: "Road accidents are a major concern, often caused by fatigue, distraction, or human error.", severity: 92 },
  { text: "Drivers often lack personal tools to monitor their alertness and correct unsafe behaviour.", severity: 78 },
  { text: "Existing safety measures cannot fully prevent accidents due to human error.", severity: 85 },
  { text: "Higher risk of injuries, fatalities, and financial losses from vehicle damage and medical expenses.", severity: 96 },
];

const Problem = () => {
  return (
    <section className="py-16 sm:py-24 bg-background border-b border-border">
      <div className="container max-w-3xl px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="section-label text-red-500">Threat Analysis</span>
          </div>
          <div className="flex items-start gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">The Problem</h2>
              <p className="text-muted-foreground text-sm max-w-lg">
                Current road safety infrastructure is failing to prevent human-error-related incidents.
              </p>
            </div>
          </div>
        </FadeIn>

        <ul className="space-y-4">
          {problems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <li className="bg-white rounded-2xl border border-border p-5 sm:p-6 group hover:border-red-200 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
                {/* Left severity stripe */}
                <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-red-400 to-orange-400 rounded-full" />

                <div className="pl-5">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle className="mt-0.5 w-4 h-4 flex-shrink-0 text-orange-500" />
                    <span className="text-sm text-foreground leading-relaxed">{item.text}</span>
                  </div>

                  {/* Severity bar */}
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground flex-shrink-0">
                      Severity
                    </span>
                    <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.severity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-orange-400 to-red-500"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-red-500 flex-shrink-0">{item.severity}%</span>
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Problem;
