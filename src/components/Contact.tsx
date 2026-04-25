import { Mail, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  return (
    <section className="border-b border-border bg-section-alt py-16 sm:py-20 md:py-24">
      <div className="container text-center px-4">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary">Communications</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Contact / Learn More</h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
            Interested in DriverWatch? Reach out or try the live monitoring system.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:info.driverwatch@gmail.com"
              className="inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-2.5 sm:px-6 sm:py-3 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground w-full sm:w-auto justify-center"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="https://drive-watch-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-border px-6 py-2.5 sm:px-6 sm:py-3 font-mono text-xs sm:text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground w-full sm:w-auto justify-center"
            >
              <ExternalLink className="h-4 w-4" />
              Launch App
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
