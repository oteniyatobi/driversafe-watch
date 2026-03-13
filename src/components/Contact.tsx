import { Mail, ExternalLink } from "lucide-react";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  return (
    <section className="bg-section-alt py-20 md:py-24">
      <div className="container text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground">Contact / Learn More</h2>
          <p className="mt-4 text-muted-foreground">
            Interested in DriverWatch? Reach out or try the live app.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:t.oteniya@alustudent.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="https://drive-watch-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <ExternalLink className="h-4 w-4" />
              Try the Live App
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
