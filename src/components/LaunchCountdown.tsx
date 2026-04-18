import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`August 20, ${currentYear} 00:00:00`).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden relative z-10 border-t border-border/50">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel p-8 md:p-16 rounded-[2.5rem] dashboard-border relative overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDIwaDIwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-40"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 dashboard-alert-border animate-pulse-slow backdrop-blur-md"
            >
              <Timer className="h-10 w-10 text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-md">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Play Store Launch On{" "}
              </span>
              <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-bl from-primary to-primary/60 uppercase tracking-wider block mt-2 md:inline md:mt-0">
                August 20
              </span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
              System initialization sequence in progress. Preparing for global deployment of our next-gen vehicle safety architecture. Await final clearance.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
              {timeBlocks.map((block, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  key={index} 
                  className="flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm dashboard-alert-border relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-white mb-3 tracking-widest relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                    {block.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/90 font-semibold relative z-10">
                    {block.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchCountdown;
