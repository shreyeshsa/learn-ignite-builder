import { Users, Trophy, Image, Video, Heart, Gamepad2 } from "lucide-react";

const features = [
  { icon: Users, label: "Community learning" },
  { icon: Gamepad2, label: "Gamified progress" },
  { icon: Trophy, label: "Leaderboards" },
  { icon: Image, label: "Student gallery" },
  { icon: Video, label: "Live sessions" },
  { icon: Heart, label: "Cultural & spiritual space" },
];

const PlatformSection = () => {
  return (
    <section className="section-dark" id="platform">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Platform & Community</span>
          <h2 className="section-title">
            Aasuri Artist Academy —{" "}
            <span className="text-primary">A Learning Social Network</span>
          </h2>
          <p className="section-subtitle px-4">
            This is not just video lessons.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* App Preview Mockup */}
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-8">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Inside the app:
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl bg-background border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-center">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* App Screenshot Placeholder */}
            <div className="aspect-[16/9] rounded-xl bg-muted border border-border overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">A</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Aasuri Artist Academy App
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Note */}
          <div className="text-center p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm sm:text-base text-muted-foreground">
              A <span className="text-foreground font-medium">safe place</span> for students, children, and families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
