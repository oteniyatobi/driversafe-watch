import { Eye, Shield, Zap, Activity } from "lucide-react";

const TICKER_ITEMS = [
  { icon: "●", label: "System Online", value: "ACTIVE" },
  { icon: "⚡", label: "Avg Response", value: "< 200ms" },
  { icon: "◈", label: "AI Engine", value: "v3.0.0" },
  { icon: "◉", label: "Fleet Monitored", value: "1,249+" },
  { icon: "▲", label: "Uptime", value: "99.9%" },
  { icon: "■", label: "Alerts Prevented", value: "12,847" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      {/* Live ticker strip */}
      <div className="border-b border-border/50 bg-black/30 h-7 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap h-full items-center">
          {/* Doubled for seamless loop */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-6 text-[10px] font-mono text-muted-foreground border-r border-white/5">
              <span className="text-primary text-[8px]">{item.icon}</span>
              <span className="uppercase tracking-wider">{item.label}:</span>
              <span className="text-primary font-bold tracking-widest">{item.value}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main header row */}
      <div className="container flex h-14 md:h-16 items-center justify-between px-4 sm:px-8 relative">
        {/* Subtle scan line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative flex h-7 w-7 items-center justify-center">
            <Eye className="h-4 w-4 text-primary relative z-10" />
            <div className="absolute inset-0 rounded-full bg-primary/15 animate-pulse-slow" />
          </div>
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground">
            DriverWatch
          </span>
          <span className="hidden xs:inline-block rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-primary">
            v3.0.0
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Status pills */}
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
              <Shield className="w-3 h-3 text-primary" />
              <span className="text-primary/70">AI ACTIVE</span>
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span className="flex items-center gap-1.5 font-mono text-[10px]">
              <Activity className="w-3 h-3 text-accent" />
              <span className="text-accent">MONITORING</span>
            </span>
          </div>

          <span className="hidden items-center gap-1.5 font-mono text-xs text-muted-foreground sm:flex">
            SYSTEM:
            <span className="flex items-center gap-1 rounded border border-accent/40 bg-accent/10 px-2 py-0.5">
              <Zap className="w-2.5 h-2.5 text-accent" />
              <span className="text-accent font-bold text-[10px]">ONLINE</span>
            </span>
          </span>

          <a
            href="https://drive-watch-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded border border-primary/40 bg-primary/10 px-3 py-1 sm:px-4 sm:py-1.5 font-mono text-[10px] sm:text-xs font-medium uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white hover:border-primary"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            <span className="relative z-10">Launch App</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
