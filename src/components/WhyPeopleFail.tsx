import { X, Eye, Lightbulb } from "lucide-react";

const reasons = [
  "They copy instead of understanding",
  "They practice without clarity",
  "They don't know what to observe",
];

const WhyPeopleFail = () => {
  return (
    <section className="section-light" id="why-fail">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="level-badge mb-4 inline-block">The Real Challenge</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Why Most People Never Master{" "}
              <span className="text-primary">Realistic Drawing</span>
            </h2>
          </div>

          {/* Content with calm spacing */}
          <div className="space-y-8 sm:space-y-10">
            {/* Opening statement */}
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Most artists don't fail because of lack of talent.
              </p>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            {/* They fail because */}
            <div className="text-center">
              <p className="text-lg sm:text-xl font-semibold text-foreground mb-6 sm:mb-8">
                They fail because:
              </p>

              {/* Reasons with X icons */}
              <div className="space-y-4 sm:space-y-5 max-w-md mx-auto">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-foreground/80 text-left">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eye divider */}
            <div className="flex items-center justify-center py-4 sm:py-6">
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="mx-4 sm:mx-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-border via-border to-transparent" />
            </div>

            {/* Insight box */}
            <div className="text-center space-y-4 sm:space-y-5 p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto border border-primary/20">
                <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Realism feels hard only until you learn how to{" "}
                <span className="text-foreground font-semibold">see</span>.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
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
