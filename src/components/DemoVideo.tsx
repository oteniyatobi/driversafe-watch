import { FadeIn } from "./FadeIn";

const DemoVideo = () => {
  return (
    <section className="border-b border-border bg-section-alt py-16 sm:py-20 md:py-24">
      <div className="container px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-primary">Demo Feed</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">See It In Action</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mx-auto mt-8 sm:mt-10 max-w-3xl overflow-hidden rounded-lg border border-border">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/96vMgCNHZ2s"
                title="DriverWatch Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default DemoVideo;
