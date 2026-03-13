import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border py-24 md:py-32 scanline">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(190 90% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(190 90% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
            <Eye className="h-8 w-8 text-primary" />
          </div>

          <h1 className="text-3xl font-extrabold tracking-widest text-foreground sm:text-4xl md:text-5xl">
            DRIVERWATCH
          </h1>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-primary/40" />
            <p className="font-mono text-sm uppercase tracking-wider text-primary">
              Real-time Driver Safety Monitoring
            </p>
            <span className="h-px w-8 bg-primary/40" />
          </div>

          <p className="mx-auto mt-6 max-w-xl font-body text-base text-muted-foreground">
            Reducing accidents through intelligent monitoring, instant alerts, and automated emergency response.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://drive-watch-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-8 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Launch App
            </a>
            <a
              href="/DriverWatch_Scope.pdf"
              download
              className="inline-flex items-center gap-2 rounded border border-border px-8 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              View Scope PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
