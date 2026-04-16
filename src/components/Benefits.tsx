import { ShieldCheck, Zap, TrendingUp, HeartHandshake } from "lucide-react";
import { FadeIn } from "./FadeIn";

const benefits = [
  { text: "Enhanced safety through proactive alerts before accidents happen.", icon: ShieldCheck },
  { text: "Immediate assistance in case of emergencies via automated notifications.", icon: Zap },
  { text: "Awareness of driving habits to improve over time with behavior tracking.", icon: TrendingUp },
  { text: "Peace of mind knowing you are actively monitored and protected.", icon: HeartHandshake },
];

const Benefits = () => {
  return (
    <section className="border-b border-border py-20 sm:py-28 bg-section-alt relative overflow-hidden">
      <div className="container max-w-4xl px-4 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-3 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-semibold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-accent">Driver Benefits</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center sm:text-left mb-10 text-white">How Drivers Benefit</h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group glass-panel flex items-start gap-5 rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.02] hover:dashboard-alert-border h-full">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <b.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-sm sm:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                    {b.text}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
