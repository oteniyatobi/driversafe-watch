import { Bell, Eye, MapPin, Navigation, Gauge, Radio } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const features = [
  {
    icon: Bell,
    title: "Real-time Alerts",
    desc: "Instant audio-visual notifications for unsafe driving behaviour detected by the integrated dashboard camera.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Eye,
    title: "Drowsiness Detection",
    desc: "Intelligent facial mapping triggers a high-decibel audible alarm when signs of microsleeps are detected.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    desc: "Emergency contacts receive an encrypted link with the vehicle's real-time GPS location coordinates.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Navigation,
    title: "Emergency Dispatch",
    desc: "Automated distress signals sent to nearby first responders and designated emergency contacts.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Gauge,
    title: "Telemetry History",
    desc: "Track driving telemetry, speed variances, and alertness patterns over time to improve safety habits.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Radio,
    title: "Hardware Sync",
    desc: "Seamless, low-latency connection between the vehicle hardware camera and the companion mobile app.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const Features = () => {
  return (
    <section className="py-20 sm:py-28 bg-background border-b border-border">
      <div className="container px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-4">
            <span className="section-label">System Capabilities</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Everything you need to keep <br className="hidden sm:block" />drivers safe.
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              Every tool built for real-time driver safety — on every road, every time.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="bg-white rounded-2xl border border-border p-7 hover:shadow-md hover:border-primary/20 transition-all duration-300 group h-full"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>

                <h3 className="font-bold text-lg text-primary mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>

                {/* Bottom accent */}
                <div className={`mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-primary to-accent rounded-full`} />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
