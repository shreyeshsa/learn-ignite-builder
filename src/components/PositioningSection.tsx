import { Quote, Clock, Compass, Heart, Calendar } from "lucide-react";

const points = [
  { icon: Clock, text: "no deadlines" },
  { icon: Compass, text: "no pressure to finish fast" },
  { icon: Heart, text: "no forced completion" },
];

const PositioningSection = () => {
  return (
    <section className="section-light" id="positioning">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Quote-style layout with decorative elements */}
          <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card via-background to-secondary/30 border border-border">
            {/* Large decorative quote marks */}
            <Quote className="absolute top-6 left-6 sm:top-8 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 text-primary/5" />
            <Quote className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 text-primary/5 rotate-180" />

            <div className="relative z-10 space-y-8 sm:space-y-10">
              {/* Heading */}
              <div className="text-center pt-4 sm:pt-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  This Is Not a Course.
                </h2>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2">
                  It's an Artist's Journey.
                </p>
              </div>

              {/* Divider */}
              <div className="flex justify-center">
                <div className="w-16 h-px bg-border" />
              </div>

              {/* Main copy */}
              <p className="text-center text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Realism Redefined is not time-bound.
              </p>

              {/* Points as pills */}
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  There are:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {points.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background border border-border shadow-sm"
                    >
                      <point.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emphasis copy */}
              <div className="text-center space-y-3 py-4">
                <p className="text-lg sm:text-xl text-foreground font-medium">
                  You take your time.
                </p>
                <p className="text-lg sm:text-xl text-foreground font-medium">
                  You grow at your pace.
                </p>
              </div>

              {/* Guidance note */}
              <div className="flex items-center justify-center gap-4 p-5 rounded-xl bg-primary/5 border border-primary/20">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">
                  I guide students every Sunday,{" "}
                  <span className="text-foreground font-medium">
                    even after completion
                  </span>
                  .
                </p>
              </div>

              {/* Final statement */}
              <p className="text-center text-xl sm:text-2xl font-bold text-primary pt-4">
                This is a lifelong path — not a checklist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
