import { Mail, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  return (
    <section className="border-b border-border bg-section-alt py-20 md:py-24">
      <div className="container text-center">
        <FadeIn>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-primary status-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">Communications</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">Contact / Learn More</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Interested in DriverWatch? Reach out or try the live monitoring system.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:t.oteniya@alustudent.com"
              className="inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="https://drive-watch-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-border px-6 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
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
