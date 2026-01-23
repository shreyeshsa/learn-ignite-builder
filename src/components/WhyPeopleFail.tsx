import { X, Eye, Lightbulb } from "lucide-react";

const reasons = [
  "they copy instead of understanding",
  "they practice without clarity",
  "they don't know what to observe",
];

const WhyPeopleFail = () => {
  return (
    <section className="section-dark" id="why-fail">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Why Most People Never Master{" "}
              <span className="text-primary">Realistic Drawing</span>
            </h2>
          </div>

          {/* Content with calm spacing */}
          <div className="space-y-10 sm:space-y-12">
            {/* Opening statement */}
            <p className="text-center text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Most artists don't fail because of lack of talent.
            </p>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-12 h-px bg-border" />
            </div>

            {/* They fail because */}
            <div className="text-center">
              <p className="text-lg sm:text-xl font-medium text-foreground mb-8">
                They fail because:
              </p>

              {/* Reasons with X icons */}
              <div className="space-y-5">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eye divider */}
            <div className="flex items-center justify-center py-4">
              <div className="w-16 h-px bg-border" />
              <div className="mx-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div className="w-16 h-px bg-border" />
            </div>

            {/* Insight box */}
            <div className="text-center space-y-4 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Realism feels hard only until you learn how to{" "}
                <span className="text-foreground font-semibold">see</span>.
              </p>
              <p className="text-xl sm:text-2xl font-semibold text-primary">
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
