import { Quote, Heart, Clock, Compass, Calendar } from "lucide-react";

const PositioningSection = () => {
  const points = [
    { icon: Clock, text: "no deadlines" },
    { icon: Compass, text: "no pressure to finish fast" },
    { icon: Heart, text: "no forced completion" },
  ];

  return (
    <section className="section-light" id="positioning">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Quote Style Header */}
          <div className="relative p-6 sm:p-10 md:p-12 rounded-2xl bg-card border border-border">
            {/* Large Quote Mark */}
            <Quote className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-14 sm:h-14 text-primary/10" />
            
            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* Heading */}
              <div className="text-center pt-6 sm:pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                  This Is Not a Course.{" "}
                  <span className="text-primary">It's an Artist's Journey.</span>
                </h2>
              </div>

              {/* Main Copy */}
              <p className="text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
                Realism Redefined is not time-bound.
              </p>

              {/* Points */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-center text-sm sm:text-base text-muted-foreground">
                  There are:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                  {points.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border"
                    >
                      <point.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {point.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emphasis Copy */}
              <div className="text-center space-y-2 pt-4">
                <p className="text-base sm:text-lg text-foreground font-medium">
                  You take your time.
                </p>
                <p className="text-base sm:text-lg text-foreground font-medium">
                  You grow at your pace.
                </p>
              </div>

              {/* Guidance Note */}
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm sm:text-base text-muted-foreground">
                  I guide students every Sunday, <span className="text-foreground font-medium">even after completion</span>.
                </p>
              </div>

              {/* Final Statement */}
              <p className="text-center text-lg sm:text-xl font-semibold text-primary pt-2">
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
