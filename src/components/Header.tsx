import { Eye } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-display text-foreground">DriverWatch</span>
        </div>
        <a
          href="/DriverWatch_Scope.pdf"
          download
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Download Scope PDF
        </a>
      </div>
    </header>
  );
};

export default Header;
