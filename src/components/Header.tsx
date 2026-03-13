import { Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          <Settings className="h-5 w-5 text-primary status-pulse" />
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-foreground">
            DriverWatch
          </span>
          <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
            v3.0.0
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 font-mono text-xs text-muted-foreground sm:flex">
            SYSTEM: <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-accent">ONLINE</span>
          </span>
          <a
            href="https://drive-watch-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary/20"
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
