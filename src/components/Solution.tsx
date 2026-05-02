import { Camera, Smartphone, Siren } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Camera,
    title: "Hardware Camera",
    desc: "Monitors driver behavior in real-time, detecting fatigue and distraction using an in-car camera powered by ML.",
    stat: "99.2%",
    statLabel: "Detection Accuracy",
    statColor: "text-primary",
    iconHover: "group-hover:text-primary",
    glow: "hover:shadow-[0_8px_32px_-8px_rgba(59,130,246,0.4)]",
    borderHover: "hover:border-primary/30",
    barGradient: "from-primary to-blue-300",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Provides real-time alerts, stores driving data, and manages emergency notifications seamlessly.",
    stat: "< 1s",
    statLabel: "Alert Delivery",
    statColor: "text-accent",
    iconHover: "group-hover:text-accent",
    glow: "hover:shadow-[0_8px_32px_-8px_rgba(245,158,11,0.4)]",
    borderHover: "hover:border-accent/30",
    barGradient: "from-accent to-yellow-300",
  },
  {
    icon: Siren,
    title: "Emergency Protocol",
    desc: "Notifies a selected contact or nearby hospitals if the driver is unresponsive after alerts.",
    stat: "24/7",
    statLabel: "Active Coverage",
    statColor: "text-destructive",
    iconHover: "group-hover:text-destructive",
    glow: "hover:shadow-[0_8px_32px_-8px_rgba(244,63,94,0.4)]",
    borderHover: "hover:border-destructive/30",
    barGradient: "from-destructive to-rose-300",
  },
];

const Solution = () => {
  return (
    <section className="border-b border-border py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Decorative grid texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAxNSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent">Resolution Protocol</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Our Solution</h2>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground mb-12">
            DriverWatch provides a complete hardware + software ecosystem to keep every driver safe.
          </p>
        </FadeIn>

        <div className="mx-auto mt-4 grid max-w-4xl gap-5 sm:gap-6 md:grid-cols-3">
          {solutions.map((s, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group relative rounded-2xl bg-card border border-border p-6 sm:p-7 overflow-hidden ${s.glow} ${s.borderHover} transition-all duration-300 h-full`}
              >
                {/* Top gradient bar on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${s.barGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/8 bg-black/40 group-hover:bg-white/5 transition-colors duration-300 mb-5">
                  <s.icon className={`h-5 w-5 text-muted-foreground ${s.iconHover} transition-colors duration-300`} />
                </div>

                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-white transition-colors mb-3">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground mb-6">{s.desc}</p>

                {/* Stat */}
                <div className="flex items-end gap-2 pt-4 border-t border-white/5">
                  <span className={`text-2xl font-bold font-mono ${s.statColor}`}>{s.stat}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground/70 pb-0.5">{s.statLabel}</span>
                </div>

                {/* Hover fill overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
