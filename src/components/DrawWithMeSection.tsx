import { Calendar, RefreshCw, Palette, Infinity } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    text: "Refresh fundamentals",
  },
  {
    icon: Palette,
    text: "Introduce new drawings",
  },
  {
    icon: Infinity,
    text: "Keep learning continuous",
  },
];

const DrawWithMeSection = () => {
  return (
    <section className="section-light" id="draw-with-me">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            <span className="level-badge">Live Sessions</span>
            <h2 className="section-title">
              Draw With Me —{" "}
              <span className="text-primary">Learn Together, Always</span>
            </h2>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 md:p-10">
            {/* Calendar Visual */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </div>
            </div>

            <p className="text-center text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Every three months, all students draw along with me <span className="text-foreground font-medium">live</span>.
            </p>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <p className="text-center text-sm text-muted-foreground">
                These sessions:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-background border border-border"
                  >
                    <feature.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emphasis */}
            <div className="text-center p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-base sm:text-lg font-semibold text-primary">
                You can attend every Draw With Me session, forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrawWithMeSection;
