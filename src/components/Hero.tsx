import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Eye, Zap, Activity } from "lucide-react";
import { DriverWatchIcon } from "./Logo";

const STATS = [
  { value: "87%", label: "Accident Reduction" },
  { value: "< 1s", label: "Alert Response" },
  { value: "24/7", label: "Monitoring" },
  { value: "99.2%", label: "Detection Accuracy" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {/* Top navy accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* ── Left: Copy ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-dot" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                AI Driver Safety Technology
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-primary block">Driver Safety.</span>
              <span className="text-accent block">Always Watching.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              Intelligent monitoring for safer roads and protected lives. DriverWatch combines
              precision hardware with real-time AI to detect fatigue, distraction, and unsafe
              driving — before accidents happen.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://drive-watch-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 hover:shadow-lg transition-all text-sm"
              >
                <Eye className="w-4 h-4" />
                Launch Dashboard
              </a>
              <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all text-sm"
              >
                See Features
              </Link>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              Safer Roads. Protected Lives.
            </motion.p>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex justify-center"
          >
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10" />
              <div className="absolute inset-6 rounded-full border border-accent/15" />

              {/* Main circle */}
              <div className="absolute inset-10 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/20">
                <DriverWatchIcon size={160} />
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-border text-center min-w-[96px]"
              >
                <div className="text-xl font-bold text-primary">87%</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Accidents Prevented</div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-border text-center min-w-[96px]"
              >
                <div className="text-xl font-bold text-accent">24/7</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wide">Live Monitoring</div>
              </motion.div>

              <motion.div
                animate={{ y: [-4, 6, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white rounded-2xl px-3 py-2.5 shadow-lg border border-border text-center"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-dot" />
                  <span className="text-xs font-bold text-primary">Online</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-border shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
            {STATS.map((s, i) => (
              <div key={i} className="px-6 py-5 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
