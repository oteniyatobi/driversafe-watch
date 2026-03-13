import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-foreground py-24 md:py-32">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ShieldCheck className="mx-auto mb-6 h-14 w-14 text-primary" />
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
            DriverWatch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Real-time Driver Safety Monitoring to Reduce Accidents
          </p>
          <a
            href="/DriverWatch_Scope.pdf"
            download
            className="mt-8 inline-flex h-12 items-center rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Download Scope PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
