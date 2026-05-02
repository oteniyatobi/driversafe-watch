import { useRef } from "react";
import { Bell, Eye, MapPin, Navigation, Gauge, Radio } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const features = [
  {
    icon: Bell,
    title: "Real-time Alerts",
    desc: "Instant audio-visual notifications for unsafe driving behavior detected by the integrated dashboard camera.",
    iconHover: "group-hover:text-primary",
    glowHover: "group-hover:shadow-[0_0_28px_rgba(59,130,246,0.4)]",
    borderHover: "group-hover:border-primary/40",
    bgHover: "group-hover:bg-primary/8",
    barColor: "bg-primary",
  },
  {
    icon: Eye,
    title: "Drowsiness Detection",
    desc: "Intelligent facial mapping triggers a high-decibel audible alarm when signs of microsleeps are detected.",
    iconHover: "group-hover:text-accent",
    glowHover: "group-hover:shadow-[0_0_28px_rgba(245,158,11,0.35)]",
    borderHover: "group-hover:border-accent/40",
    bgHover: "group-hover:bg-accent/8",
    barColor: "bg-accent",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    desc: "Emergency contacts receive an encrypted link with the vehicle's real-time GPS location coordinates.",
    iconHover: "group-hover:text-green-400",
    glowHover: "group-hover:shadow-[0_0_28px_rgba(74,222,128,0.35)]",
    borderHover: "group-hover:border-green-400/40",
    bgHover: "group-hover:bg-green-400/8",
    barColor: "bg-green-400",
  },
  {
    icon: Navigation,
    title: "Emergency Dispatch",
    desc: "Automated distress signals sent to nearby first responders and designated emergency contacts.",
    iconHover: "group-hover:text-destructive",
    glowHover: "group-hover:shadow-[0_0_28px_rgba(244,63,94,0.35)]",
    borderHover: "group-hover:border-destructive/40",
    bgHover: "group-hover:bg-destructive/8",
    barColor: "bg-destructive",
  },
  {
    icon: Gauge,
    title: "Telemetry History",
    desc: "Track driving telemetry, speed variances, and alertness patterns over time to improve safety habits.",
    iconHover: "group-hover:text-primary",
    glowHover: "group-hover:shadow-[0_0_28px_rgba(59,130,246,0.4)]",
    borderHover: "group-hover:border-primary/40",
    bgHover: "group-hover:bg-primary/8",
    barColor: "bg-primary",
  },
  {
    icon: Radio,
    title: "Hardware Sync",
    desc: "Seamless, low-latency connection between the vehicle hardware camera and the companion mobile app.",
    iconHover: "group-hover:text-accent",
    glowHover: "group-hover:shadow-[0_0_28px_rgba(245,158,11,0.35)]",
    borderHover: "group-hover:border-accent/40",
    bgHover: "group-hover:bg-accent/8",
    barColor: "bg-accent",
  },
];

const Card3D = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28 relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background decorative circles */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-primary/8 rounded-full pointer-events-none" />

      <div className="container px-4 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-3 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/80">System Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center sm:text-left mb-2">
            Dashboard Features
          </h2>
          <p className="text-sm text-muted-foreground text-center sm:text-left mb-12 max-w-xl">
            Every tool you need to keep drivers and fleets safe — in real time.
          </p>
        </FadeIn>

        <div className="mx-auto mt-4 grid max-w-6xl gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.09}>
              <Card3D className="h-full">
                <div className={`group glass-panel rounded-2xl p-6 sm:p-8 transition-all duration-300 ${f.glowHover} relative overflow-hidden h-full border border-white/5 ${f.borderHover}`}>

                  {/* Hover background shimmer */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${f.bgHover}`} />

                  <div className="relative z-10">
                    {/* Icon with rotating ring on hover */}
                    <div className="relative inline-flex mb-8">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/50 transition-all duration-300 ${f.bgHover} ${f.borderHover}`}>
                        <f.icon className={`h-6 w-6 text-muted-foreground ${f.iconHover} transition-colors duration-300`} />
                      </div>
                      <div
                        className="absolute -inset-1 rounded-xl border border-dashed border-white/10 group-hover:border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ animation: 'radar-sweep 8s linear infinite' }}
                      />
                    </div>

                    <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground group-hover:text-white transition-colors mb-3">
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/85 transition-colors">
                      {f.desc}
                    </p>
                  </div>

                  {/* Bottom sweep bar */}
                  <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out ${f.barColor}`} />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/2 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card3D>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
