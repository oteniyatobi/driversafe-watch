import { motion } from "framer-motion";
import { Car, ShieldAlert, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border py-16 sm:py-24 md:py-32 bg-speed-lines bg-background">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          {/* Main Dashboard Panel */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl dashboard-border relative overflow-hidden">
            {/* Subtle inner grid */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDIwaDIwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-50"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 dashboard-alert-border animate-pulse-slow backdrop-blur-md"
              >
                <Car className="h-10 w-10 text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              </motion.div>

              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
                <span className="font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] text-primary/90 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> Next-Gen Vehicle Safety
                </span>
                <span className="h-[2px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
                  DRIVER
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-bl from-primary to-primary/60">
                  WATCH
                </span>
              </h1>

              <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
                Advanced AI-powered monitoring for cars, lorries, and commercial vehicles. 
                We prevent accidents before they happen with real-time driver alertness tracking 
                and automated emergency response systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                <a
                  href="https://drive-watch-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm text-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {/* Button Background & Glow */}
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-xl transition-all duration-300 group-hover:bg-primary/40 group-hover:border-primary dashboard-alert-border"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite_ease-in-out]"></div>
                  
                  <Cpu className="w-5 h-5 relative z-10 text-primary group-hover:text-white transition-colors" />
                  <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">Launch Dashboard</span>
                </a>

                {/* Dashboard Stats Preview */}
                <div className="hidden sm:flex items-center gap-6 px-6 py-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">System Status</span>
                    <span className="text-accent font-bold text-sm flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Online
                    </span>
                  </div>
                  <div className="w-px h-8 bg-white/10"></div>
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Response Time</span>
                    <span className="text-primary font-bold text-sm">&lt; 200ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
