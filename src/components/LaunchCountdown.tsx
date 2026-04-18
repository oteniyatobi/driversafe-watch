import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle } from "lucide-react";

const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError("");

    // The Google Apps Script URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby5UDNkFqjpx0LZyQp81rjGx49mHUUmc3ugsDUYYTcwxte9P15Mr5u0-e4VFFgBpyKW/exec";

    try {
      // Mock submission if the URL hasn't been added yet
      if (SCRIPT_URL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
        setTimeout(() => {
          setIsSubmitted(true);
          setIsSubmitting(false);
        }, 800);
        return;
      }

      const formData = new FormData();
      formData.append("email", email);

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Google Scripts requires no-cors mode
      });

      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      console.error("Waitlist Error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section className="relative py-8 md:py-12 bg-background overflow-hidden z-10 border-t border-border/50">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="container relative z-10 px-4 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: true, margin: "-50px" }}
           className="glass-panel p-6 md:p-8 rounded-2xl dashboard-border relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDIwaDIwVjBIMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-40 mix-blend-overlay"></div>

          {/* Left Text Content */}
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full">
            <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <Play className="w-3.5 h-3.5 text-primary fill-primary" />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-bold">
                Upcoming Release
              </span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-2 drop-shadow-md">
              Google Play Store
            </h2>
            
            <p className="text-muted-foreground text-xs md:text-sm max-w-sm mb-6">
              System deployment sequence scheduled for August 20. Join the waitlist for early access coordinates.
            </p>

            <div className="w-full max-w-sm">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium text-left">Access coordinates secured. We'll notify you upon launch.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row w-full gap-3">
                  <div className="relative flex-1">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your comms email" 
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all outline-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary/20 hover:bg-primary/40 text-primary hover:text-white border border-primary/50 text-sm font-bold px-5 py-2.5 rounded-xl transition-all whitespace-nowrap outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Join Waitlist"}
                  </button>
                </form>
              )}
              {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
            </div>
          </div>

          {/* Right Countdown Blocks */}
          <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4 shrink-0 w-full md:w-auto">
            {timeBlocks.map((block, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center py-3 px-2 sm:px-3 md:p-4 min-w-[65px] sm:min-w-[75px] md:min-w-[90px] rounded-xl bg-black/40 border border-white/10 backdrop-blur-md dashboard-alert-border relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white mb-1 tracking-widest relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                  {block.value.toString().padStart(2, "0")}
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-primary font-semibold relative z-10">
                  {block.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchCountdown;
