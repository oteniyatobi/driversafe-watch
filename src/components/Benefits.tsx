import { ShieldCheck, Zap, TrendingUp, HeartHandshake } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const benefits = [
  {
    text: "Enhanced safety through proactive alerts before accidents happen.",
    icon: ShieldCheck,
    stat: "87%",
    statDesc: "Accident reduction",
    iconBg: "bg-primary/10",
    iconBorder: "border-primary/20",
    statColor: "text-primary",
    ringBorder: "border-primary/20",
  },
  {
    text: "Immediate assistance in case of emergencies via automated notifications.",
    icon: Zap,
    stat: "< 1s",
    statDesc: "Alert response time",
    iconBg: "bg-accent/10",
    iconBorder: "border-accent/20",
    statColor: "text-accent",
    ringBorder: "border-accent/20",
  },
  {
    text: "Awareness of driving habits to improve over time with behavior tracking.",
    icon: TrendingUp,
    stat: "+40%",
    statDesc: "Safety score improvement",
    iconBg: "bg-green-400/10",
    iconBorder: "border-green-400/20",
    statColor: "text-green-400",
    ringBorder: "border-green-400/20",
  },
  {
    text: "Peace of mind knowing you are actively monitored and protected.",
    icon: HeartHandshake,
    stat: "24/7",
    statDesc: "Continuous monitoring",
    iconBg: "bg-violet-400/10",
    iconBorder: "border-violet-400/20",
    statColor: "text-violet-400",
    ringBorder: "border-violet-400/20",
  },
];

const Benefits = () => {
  return (
    <section className="border-b border-border py-20 sm:py-28 bg-section-alt relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl px-4 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-3 justify-center sm:justify-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-semibold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-accent">Driver Benefits</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center sm:text-left mb-3">
            How Drivers Benefit
          </h2>
          <p className="text-sm text-muted-foreground text-center sm:text-left mb-12 max-w-xl">
            Real outcomes for real people — every feature designed to save lives.
          </p>
        </FadeIn>

        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden h-full"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${b.iconBg} border ${b.iconBorder} transition-all duration-300`}>
                    <b.icon className={`h-6 w-6 ${b.statColor} transition-colors`} />
                    {/* Pulse ring on hover */}
                    <div className={`absolute inset-0 rounded-xl border ${b.ringBorder} animate-pulse-ring opacity-0 group-hover:opacity-100`} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors font-medium mb-4">
                      {b.text}
                    </p>

                    {/* Animated stat */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <span className={`text-2xl font-extrabold font-mono ${b.statColor}`}>{b.stat}</span>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">{b.statDesc}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
