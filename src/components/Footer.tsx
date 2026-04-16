const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border mt-auto">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © 2026 DriverWatch — All Systems Operational
        </div>
        <div className="text-xs font-semibold tracking-wider text-primary/80 uppercase">
          Powered by Auracle Stacks
        </div>
      </div>
    </footer>
  );
};

export default Footer;
