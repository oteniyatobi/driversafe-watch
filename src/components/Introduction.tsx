import { FadeIn } from "./FadeIn";
import { Activity } from "lucide-react";

const Introduction = () => {
  return (
    <section className="border-b border-border py-20 sm:py-28 relative bg-section-alt">
      <div className="container max-w-4xl px-4 relative z-10">
        <FadeIn>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl dashboard-border relative overflow-hidden group hover:dashboard-alert-border transition-all duration-500">
            {/* Background Gradient Hover Reveal */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 border border-destructive/30 shadow-[0_0_15px_rgba(244,63,94,0.1)] group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-shadow">
                  <Activity className="h-8 w-8 text-destructive animate-pulse" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-semibold text-[10px] sm:text-xs uppercase tracking-[0.15em] text-accent">
                    Telemetry Analysis
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What is DriverWatch?</h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  DriverWatch is an advanced driver telemetry and safety solution. By combining precision hardware 
                  with a connected mobile application, it continuously monitors driver alertness in real-time. 
                  When unsafe behavior, fatigue, or distraction is detected, it deploys instant alerts and 
                  can initiate automated emergency notifications, actively reducing collision risks on the road.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Introduction;
