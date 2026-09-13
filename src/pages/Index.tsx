import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import LaunchCountdown from "@/components/LaunchCountdown";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Introduction />
      <Features />
      <Benefits />
      <Contact />
      <LaunchCountdown />
      <Footer />
    </div>
  );
};

export default Index;
