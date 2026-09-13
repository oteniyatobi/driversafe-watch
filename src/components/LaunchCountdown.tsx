import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Bell } from "lucide-react";
import { FadeIn } from "./FadeIn";

const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(`August 20, ${currentYear} 00:00:00`).getTime();
    const interval = setInterval(() => {
      const now = Date.now();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setError("");
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbzcPBdBpU-f67V5Vwzz2j2Fn5iAf4cgextsplmc1qzRG2LXr-QwOkRo26cf7xEcpC3kXg/exec";
    try {
      const params = new URLSearchParams();
      params.append("email", email);
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      });
      setIsSubmitted(true);
      setEmail("");
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container px-4 max-w-5xl mx-auto">
        <FadeIn>
          <div className="bg-white rounded-3xl border border-border shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            {/* Left */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                <Bell className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Upcoming Release
                </span>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-3">
                Coming to Google Play Store
              </h2>
              <p className="text-muted-foreground text-sm max-w-sm mb-8">
                System deployment scheduled for August 20. Join the waitlist for early access.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 max-w-sm"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">You're on the list! We'll notify you at launch.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="flex-1 border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all whitespace-nowrap disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending…" : "Join Waitlist"}
                  </button>
                </form>
              )}
              {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
            </div>

            {/* Right: Countdown */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {blocks.map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center min-w-[70px] sm:min-w-[80px] py-4 px-2 sm:px-4 rounded-2xl bg-background border border-border"
                >
                  <span className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">
                    {b.value.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mt-1">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LaunchCountdown;
