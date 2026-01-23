import { XCircle, Eye, Lightbulb } from "lucide-react";

const WhyPeopleFail = () => {
  const reasons = [
    {
      icon: XCircle,
      text: "they copy instead of understanding",
    },
    {
      icon: XCircle,
      text: "they practice without clarity",
    },
    {
      icon: XCircle,
      text: "they don't know what to observe",
    },
  ];

  return (
    <section className="section-dark" id="why-fail">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Why Most People Never Master{" "}
              <span className="text-primary">Realistic Drawing</span>
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-8 sm:space-y-10">
            <p className="text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
              Most artists don't fail because of lack of talent.
            </p>

            <p className="text-center text-lg sm:text-xl font-medium text-foreground">
              They fail because:
            </p>

            {/* Reasons */}
            <div className="space-y-4 sm:space-y-5">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 sm:p-5 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center py-6">
              <div className="w-16 h-px bg-border" />
              <Eye className="w-6 h-6 mx-4 text-primary" />
              <div className="w-16 h-px bg-border" />
            </div>

            {/* Insight */}
            <div className="text-center space-y-4 p-6 sm:p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <Lightbulb className="w-8 h-8 text-primary mx-auto" />
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Realism feels hard only until you learn how to <span className="text-foreground font-semibold">see</span>.
              </p>
              <p className="text-lg sm:text-xl font-semibold text-primary">
                Once that changes, everything changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPeopleFail;
