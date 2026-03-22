import { Eye } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container flex h-14 md:h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <Eye className="h-4 w-4 sm:h-5 sm:h-5 text-primary status-pulse" />
          <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground">
            DriverWatch
          </span>
          <span className="hidden xs:inline-block rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[9px] sm:text-[10px] text-primary">
            v3.0.0
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="hidden items-center gap-2 font-mono text-xs text-muted-foreground sm:flex">
            SYSTEM: <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-accent">ONLINE</span>
          </span>
          <a
            href="https://drive-watch-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-primary/30 bg-primary/10 px-3 py-1 sm:px-4 sm:py-1.5 font-mono text-[10px] sm:text-xs font-medium uppercase tracking-wider text-primary transition-colors hover:bg-primary/20"
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
