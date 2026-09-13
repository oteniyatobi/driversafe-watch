import Header from "@/components/Header";
import LaunchCountdown from "@/components/LaunchCountdown";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Mail, ExternalLink, Clock, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@driverwatch.tech",
    href: "mailto:info@driverwatch.tech",
    sub: "We respond within 24 hours",
  },
  {
    icon: ExternalLink,
    label: "Dashboard",
    value: "drive-watch-three.vercel.app",
    href: "https://drive-watch-three.vercel.app/",
    sub: "Try the live app now",
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "24/7 Monitoring",
    href: null,
    sub: "System monitoring is always active",
  },
];

const FAQ = [
  {
    q: "How does DriverWatch detect drowsiness?",
    a: "Our hardware camera uses machine learning to track facial landmarks — eye openness, blink rate, and head position — and triggers an alert the moment microsleep patterns are detected.",
  },
  {
    q: "What happens in an emergency?",
    a: "If a driver is unresponsive after multiple alerts, DriverWatch automatically sends a GPS-linked distress signal to designated emergency contacts and nearby emergency services.",
  },
  {
    q: "Is my data secure?",
    a: "All telemetry, location data, and driving history is end-to-end encrypted and stored securely. We never sell or share your data with third parties.",
  },
  {
    q: "When is the mobile app launching?",
    a: "The DriverWatch app is scheduled for release on Google Play Store on August 20. Join the waitlist below to get early access.",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page header */}
      <section className="bg-white border-b border-border py-16 sm:py-20">
        <div className="container px-4">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="section-label">Contact</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-5">
                Let's talk safety.
              </h1>
              <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
                Have questions about DriverWatch? Want a demo for your fleet? We're here.
                Reach out and our team will get back to you promptly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 border-b border-border">
        <div className="container px-4 max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {CONTACT_INFO.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-7 hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                    <c.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block text-sm font-semibold text-primary hover:text-accent transition-colors mb-1"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-primary mb-1">{c.value}</div>
                  )}
                  <div className="text-xs text-muted-foreground">{c.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA email block */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container px-4 max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Send us an email and we'll arrange a demo or answer any questions about
              integrating DriverWatch into your fleet.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:info@driverwatch.tech"
              className="inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 hover:shadow-lg transition-all text-sm"
            >
              <Mail className="w-4 h-4" />
              info@driverwatch.tech
            </motion.a>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-b border-border">
        <div className="container px-4 max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <span className="section-label">FAQ</span>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-10">
              Frequently asked questions.
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-sm hover:border-primary/20 transition-all">
                  <h3 className="font-bold text-primary mb-3">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist countdown */}
      <LaunchCountdown />

      <Footer />
    </div>
  );
};

export default ContactPage;
