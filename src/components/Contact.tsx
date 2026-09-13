import { Mail, ExternalLink, ArrowRight, Phone, MapPin } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="container px-4 relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-dot" />
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Ready to protect your fleet?
            </h2>

            <p className="text-white/70 text-base mb-12 max-w-lg mx-auto">
              Interested in DriverWatch? Reach out to learn more or try the live monitoring
              system today.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:info@driverwatch.tech"
                className="inline-flex items-center gap-3 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all text-sm w-full sm:w-auto justify-center"
              >
                <Mail className="w-4 h-4" />
                info@driverwatch.tech
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://drive-watch-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/60 transition-all text-sm w-full sm:w-auto justify-center group"
              >
                <ExternalLink className="w-4 h-4" />
                Launch App
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
              </motion.a>
            </div>

            {/* Sub info */}
            <p className="mt-10 text-white/40 text-xs uppercase tracking-widest">
              Safer Roads. Protected Lives.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
