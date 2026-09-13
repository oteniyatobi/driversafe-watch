import { ShieldCheck, Zap, TrendingUp, HeartHandshake } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: ShieldCheck,
    stat: "87%",
    statDesc: "Accident reduction",
    text: "Enhanced safety through proactive alerts before accidents happen.",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    statColor: "text-primary",
  },
  {
    icon: Zap,
    stat: "< 1s",
    statDesc: "Alert response time",
    text: "Immediate assistance in case of emergencies via automated notifications.",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    statColor: "text-accent",
  },
  {
    icon: TrendingUp,
    stat: "+40%",
    statDesc: "Safety score improvement",
    text: "Awareness of driving habits to improve over time with behaviour tracking.",
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
    statColor: "text-green-600",
  },
  {
    icon: HeartHandshake,
    stat: "24/7",
    statDesc: "Continuous monitoring",
    text: "Peace of mind knowing you are actively monitored and protected.",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
    statColor: "text-purple-600",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border">
      <div className="container max-w-5xl px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="section-label">Driver Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            Real outcomes for real people.
          </h2>
          <p className="text-muted-foreground mb-14 max-w-lg">
            Every feature in DriverWatch is designed with one goal — saving lives.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="bg-background rounded-2xl border border-border p-6 sm:p-8 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${b.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <b.icon className={`w-5 h-5 ${b.iconColor}`} />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5 font-medium">
                      {b.text}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-bold ${b.statColor}`}>{b.stat}</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">{b.statDesc}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
