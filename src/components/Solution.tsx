import { Camera, Smartphone, Siren } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Camera,
    title: "Hardware Camera",
    desc: "Monitors driver behaviour in real-time, detecting fatigue and distraction using an in-car camera powered by ML.",
    stat: "99.2%",
    statLabel: "Detection Accuracy",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    statColor: "text-primary",
    accent: "from-primary to-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Provides real-time alerts, stores driving data, and manages emergency notifications seamlessly.",
    stat: "< 1s",
    statLabel: "Alert Delivery",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    statColor: "text-accent",
    accent: "from-accent to-blue-400",
  },
  {
    icon: Siren,
    title: "Emergency Protocol",
    desc: "Notifies a selected contact or nearby hospitals if the driver is unresponsive after alerts.",
    stat: "24/7",
    statLabel: "Active Coverage",
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    statColor: "text-red-500",
    accent: "from-red-400 to-orange-400",
  },
];

const Solution = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-border">
      <div className="container px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="section-label">Our Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            A complete safety ecosystem.
          </h2>
          <p className="text-muted-foreground mb-14 max-w-xl">
            DriverWatch provides a complete hardware + software ecosystem to keep every driver safe.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {solutions.map((s, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="bg-background rounded-2xl border border-border p-7 hover:shadow-md hover:border-primary/20 transition-all duration-300 group relative overflow-hidden h-full"
              >
                {/* Top gradient on hover */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                </div>

                <h3 className="font-bold text-lg text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>

                {/* Stat */}
                <div className="pt-5 border-t border-border flex items-baseline gap-2">
                  <span className={`text-2xl font-bold ${s.statColor}`}>{s.stat}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{s.statLabel}</span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
