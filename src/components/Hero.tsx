import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Car, ShieldAlert, Cpu, Activity, Eye, Zap } from "lucide-react";
import RoadBackground from "./RoadBackground";

// Radar SVG component with rotating sweep arm and pulsing blips
const RadarRing = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="100" cy="100" r="88" stroke="rgba(59,130,246,0.1)" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="66" stroke="rgba(59,130,246,0.13)" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="44" stroke="rgba(59,130,246,0.18)" strokeWidth="1" />
    <circle cx="100" cy="100" r="22" stroke="rgba(59,130,246,0.28)" strokeWidth="1" />
    <line x1="100" y1="12" x2="100" y2="188" stroke="rgba(59,130,246,0.07)" strokeWidth="0.5" />
    <line x1="12" y1="100" x2="188" y2="100" stroke="rgba(59,130,246,0.07)" strokeWidth="0.5" />
    <line x1="37.9" y1="37.9" x2="162.1" y2="162.1" stroke="rgba(59,130,246,0.05)" strokeWidth="0.5" />
    <line x1="162.1" y1="37.9" x2="37.9" y2="162.1" stroke="rgba(59,130,246,0.05)" strokeWidth="0.5" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
      const r = (Math.PI * deg) / 180;
      return (
        <line
          key={deg}
          x1={100 + 84 * Math.sin(r)} y1={100 - 84 * Math.cos(r)}
          x2={100 + 88 * Math.sin(r)} y2={100 - 88 * Math.cos(r)}
          stroke="rgba(59,130,246,0.3)" strokeWidth="1"
        />
      );
    })}
    {/* Rotating sweep */}
    <g className="animate-radar">
      <path d="M 100 100 L 100 12 A 88 88 0 0 1 188 100 Z" fill="rgba(59,130,246,0.06)" />
      <path d="M 100 100 L 162.2 37.8 A 88 88 0 0 1 188 100 Z" fill="rgba(59,130,246,0.13)" />
      <line x1="100" y1="100" x2="188" y2="100" stroke="rgba(59,130,246,0.9)" strokeWidth="1.5" />
      <circle cx="188" cy="100" r="2.5" fill="rgb(59,130,246)">
        <animate attributeName="opacity" values="1;0.3;1" dur="0.5s" repeatCount="indefinite" />
      </circle>
    </g>
    {/* Blips */}
    <circle cx="148" cy="55" r="3" fill="rgba(245,158,11,0.95)" style={{ filter: "drop-shadow(0 0 5px rgba(245,158,11,0.9))" }}>
      <animate attributeName="opacity" values="1;0.2;1" dur="2.1s" repeatCount="indefinite" begin="0.6s" />
    </circle>
    <circle cx="73" cy="127" r="2.5" fill="rgba(59,130,246,0.95)" style={{ filter: "drop-shadow(0 0 5px rgba(59,130,246,0.9))" }}>
      <animate attributeName="opacity" values="1;0.15;1" dur="3s" repeatCount="indefinite" begin="1.2s" />
    </circle>
    <circle cx="154" cy="116" r="2" fill="rgba(74,222,128,0.95)" style={{ filter: "drop-shadow(0 0 4px rgba(74,222,128,0.9))" }}>
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2.6s" repeatCount="indefinite" begin="0s" />
    </circle>
    <circle cx="61" cy="74" r="2" fill="rgba(59,130,246,0.8)">
      <animate attributeName="opacity" values="1;0.1;1" dur="4s" repeatCount="indefinite" begin="2.1s" />
    </circle>
    <circle cx="128" cy="148" r="1.5" fill="rgba(245,158,11,0.8)">
      <animate attributeName="opacity" values="0.2;0.9;0.2" dur="3.5s" repeatCount="indefinite" begin="1.8s" />
    </circle>
    <circle cx="100" cy="100" r="7" fill="rgba(59,130,246,0.15)" />
    <circle cx="100" cy="100" r="4" fill="rgba(59,130,246,0.5)" />
    <circle cx="100" cy="100" r="1.8" fill="rgba(255,255,255,0.95)" />
  </svg>
);

const Hero = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Mouse-tracking 3D tilt
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [6, -6]), { stiffness: 140, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-6, 6]), { stiffness: 140, damping: 22 });

  // Live telemetry metrics
  const [metrics, setMetrics] = useState({ alertness: 97, response: 138, vehicles: 1249 });
  useEffect(() => {
    const id = setInterval(() => {
      setMetrics({
        alertness: 94 + Math.floor(Math.random() * 6),
        response: 118 + Math.floor(Math.random() * 70),
        vehicles: 1240 + Math.floor(Math.random() * 20),
      });
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-border py-16 sm:py-20 md:py-28">
      {/* === 3D Animated Road Background === */}
      <RoadBackground />

      {/* Dark gradient overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80 pointer-events-none z-[1]" />

      {/* Extra top vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none z-[1]" />

      {/* ── Main Content ── */}
      <div className="container relative z-10 px-4">
        {/* 3D Flip-in entrance: panel starts tilted back and flips forward */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -22 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 1400 }}
          className="mx-auto max-w-6xl"
        >
          {/* Mouse-tracking tilt wrapper */}
          <motion.div
            ref={panelRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            className="bg-black/55 backdrop-blur-2xl rounded-3xl border border-primary/20 shadow-[0_0_60px_rgba(59,130,246,0.12),0_0_120px_rgba(59,130,246,0.05)] animate-ambient-glow relative overflow-hidden"
          >
            {/* Scan line sweeping down */}
            <div
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent pointer-events-none z-20"
              style={{ animation: "scan-line 7s linear infinite" }}
            />

            {/* Inner grid texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDIwaDIwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-40 pointer-events-none" />

            <div className="relative z-10 p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

              {/* ── Left: Text ── */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

                {/* Car icon with pulse ring */}
                <motion.div
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
                  className="mb-7 relative"
                >
                  <div className="absolute inset-0 rounded-2xl bg-primary/25 animate-pulse-ring" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/35 to-primary/8 border border-primary/30 animate-pulse-slow backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <Car className="h-10 w-10 text-primary drop-shadow-[0_0_20px_rgba(59,130,246,1)]" />
                  </div>
                </motion.div>

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-primary/60" />
                  <span className="font-semibold text-[11px] uppercase tracking-[0.22em] text-primary/90 flex items-center gap-2">
                    <ShieldAlert className="w-3.5 h-3.5" /> Next-Gen Vehicle Safety
                  </span>
                  <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-primary/60" />
                </div>

                {/* Main title — 3D entrance stagger */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-5 leading-none">
                  <motion.span
                    initial={{ opacity: 0, x: -40, rotateY: -30 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "block", transformPerspective: 600 }}
                    className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/50"
                  >
                    DRIVER
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 40, rotateY: 30 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "block", transformPerspective: 600 }}
                    className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-blue-400 to-blue-300 text-neon-blue"
                  >
                    WATCH
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.7 }}
                  className="max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed mb-9"
                >
                  Advanced AI-powered monitoring for cars, lorries, and commercial vehicles.
                  Preventing accidents before they happen with real-time alertness tracking
                  and automated emergency response.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  <a
                    href="https://drive-watch-three.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(59,130,246,0.4)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 rounded-xl" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl" />
                    <Cpu className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">Launch Dashboard</span>
                  </a>
                  <a
                    href="mailto:info.driverwatch@gmail.com"
                    className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-primary border border-primary/40 bg-primary/8 hover:bg-primary/18 transition-all hover:scale-105 hover:border-primary/70 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Contact Us</span>
                  </a>
                </motion.div>
              </div>

              {/* ── Right: Radar ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotateZ: -15 }}
                animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 120 }}
                className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] shrink-0"
              >
                {/* Outer ring glow */}
                <div className="absolute inset-0 rounded-full border border-primary/15 bg-primary/3 backdrop-blur-sm shadow-[0_0_40px_rgba(59,130,246,0.1)]" />

                <RadarRing />

                {/* Center Activity icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/70 border border-primary/40 backdrop-blur-md animate-pulse-slow shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Floating Alertness badge */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -right-5 bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 border border-primary/25 min-w-[100px] text-center shadow-lg"
                >
                  <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono mb-1">Alertness</div>
                  <div className="text-2xl font-bold font-mono text-green-400 animate-live-flash">{metrics.alertness}%</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] text-green-400/70 font-mono uppercase">Live</span>
                  </div>
                </motion.div>

                {/* Floating Response badge */}
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-5 bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 border border-primary/25 min-w-[100px] text-center shadow-lg"
                >
                  <div className="text-[9px] uppercase tracking-widest text-muted-foreground font-mono mb-1">Response</div>
                  <div className="text-2xl font-bold font-mono text-primary animate-live-flash">{metrics.response}ms</div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Zap className="w-2 h-2 text-accent" />
                    <span className="text-[8px] text-accent/80 font-mono uppercase">Fast</span>
                  </div>
                </motion.div>

                {/* Floating Fleet badge */}
                <motion.div
                  animate={{ y: [-4, 5, -4] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-8 -translate-y-1/2 bg-black/70 backdrop-blur-md rounded-xl px-3 py-2 border border-primary/25 text-center shadow-lg"
                >
                  <div className="text-[8px] uppercase tracking-widest text-muted-foreground font-mono">Fleet</div>
                  <div className="text-lg font-bold font-mono text-accent animate-live-flash">{metrics.vehicles.toLocaleString()}</div>
                </motion.div>
              </motion.div>
            </div>

            {/* ── Bottom live stats bar ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="relative z-10 mx-6 sm:mx-10 lg:mx-14 mb-6 sm:mb-10 pt-5 border-t border-white/6 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex flex-wrap items-center gap-4 sm:gap-8">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-mono">System</span>
                  <span className="text-sm font-bold font-mono text-green-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />ONLINE
                  </span>
                </div>
                <div className="w-px h-8 bg-white/8 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-mono">Alert Score</span>
                  <span className="text-sm font-bold font-mono text-primary animate-live-flash">{metrics.alertness}%</span>
                </div>
                <div className="w-px h-8 bg-white/8 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-mono">Avg Response</span>
                  <span className="text-sm font-bold font-mono text-accent animate-live-flash">{metrics.response}ms</span>
                </div>
                <div className="w-px h-8 bg-white/8 hidden md:block" />
                <div className="hidden md:flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground font-mono">Fleet Size</span>
                  <span className="text-sm font-bold font-mono text-foreground">{metrics.vehicles.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Live Monitoring</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
