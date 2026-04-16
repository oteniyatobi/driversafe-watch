import { FadeIn } from "./FadeIn";
import { Play } from "lucide-react";

const DemoVideo = () => {
  return (
    <section className="border-b border-border bg-background py-20 sm:py-28 relative overflow-hidden">
      <div className="container max-w-4xl px-4 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-2 mb-3 justify-center sm:justify-start">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/80">Demo Feed</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center sm:text-left mb-12">See It In Action</h2>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl glass-panel dashboard-border relative group">
            {/* Dashboard styling overlay */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 pointer-events-none">
              <span className="h-1.5 w-1.5 rounded-full bg-destructive animate-pulse" />
              <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest">Live Feed</span>
            </div>

            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://drive.google.com/file/d/19HsqxmRDkw-ucz9GCMC3R9I0Q0zksnqk/preview"
                title="DriverWatch Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Hover subtle glow frame */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 pointer-events-none transition-colors duration-500 rounded-3xl" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DemoVideo;
