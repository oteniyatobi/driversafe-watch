import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import DemoVideo from "@/components/DemoVideo";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Introduction />
      <DemoVideo />
      <Problem />
      <Solution />
      <Features />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
