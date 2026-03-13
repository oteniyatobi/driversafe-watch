import { FadeIn } from "./FadeIn";

const Introduction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground">What is DriverWatch?</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
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
