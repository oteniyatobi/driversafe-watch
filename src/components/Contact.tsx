import { Mail } from "lucide-react";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  return (
    <section className="bg-section-alt py-20 md:py-24">
      <div className="container text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground">Contact / Learn More</h2>
          <p className="mt-4 text-muted-foreground">
            Interested in DriverWatch? Reach out to us for more information.
          </p>
          <a
            href="mailto:t.oteniya@alustudent.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            t.oteniya@alustudent.com
          </a>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
