import { FadeIn } from "./FadeIn";

const Introduction = () => {
  return (
    <section className="border-b border-border py-20 md:py-24">
      <div className="container max-w-3xl">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-accent status-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">System Overview</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">What is DriverWatch?</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            DriverWatch is a driver safety solution that combines a hardware camera and a connected
            mobile application to monitor driver alertness, provide real-time alerts, and initiate
            emergency notifications if unsafe behavior is detected. It aims to reduce accidents caused
            by fatigue, distraction, or unsafe driving habits.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Introduction;
