import { Mail, ExternalLink, ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="border-b border-border bg-section-alt py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary">Communications</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
                Get Started?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground mb-10 max-w-lg mx-auto">
              Interested in DriverWatch? Reach out to learn more or try the live monitoring system today.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:info.driverwatch@gmail.com"
                className="group relative flex items-center gap-3 rounded-xl border border-primary/50 bg-primary/15 px-8 py-4 font-mono text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-white overflow-hidden w-full sm:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                <Mail className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Contact Us</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://drive-watch-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-8 py-4 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground w-full sm:w-auto justify-center"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Launch App</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
              </motion.a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
