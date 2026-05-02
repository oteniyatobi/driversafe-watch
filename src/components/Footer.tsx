import { Eye, Github, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-background border-t border-border relative overflow-hidden">
      {/* Top accent glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-6 w-6 items-center justify-center">
              <Eye className="h-3.5 w-3.5 text-primary relative z-10" />
              <div className="absolute inset-0 rounded-full bg-primary/15 animate-pulse-slow" />
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">DriverWatch</span>
            <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] text-primary">v3.0</span>
          </div>

          {/* Center info */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Shield className="w-3 h-3 text-primary/60" />
              <span>© 2026 DriverWatch — All Systems Operational</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-primary/70 uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Powered by Auracle Stacks
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-400/20 bg-green-400/5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-mono text-green-400 uppercase tracking-widest">Live</span>
            </div>
            <a
              href="https://drive-watch-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              Dashboard →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
