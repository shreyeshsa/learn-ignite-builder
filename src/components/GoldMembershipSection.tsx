import { Check, Video, Layers, Calendar, Users, Gamepad2, Infinity, Award, Sparkles } from "lucide-react";

const features = [
  { icon: Video, text: "80+ hours of HD content" },
  { icon: Layers, text: "5 progressive levels" },
  { icon: Calendar, text: "Weekly live sessions (Sundays)" },
  { icon: Users, text: "Draw With Me live series" },
  { icon: Gamepad2, text: "Community app & gamified learning" },
  { icon: Infinity, text: "Lifetime access" },
  { icon: Award, text: "Completion certificate" },
];

const GoldMembershipSection = () => {
  return (
    <section className="section-light" id="pricing">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">
            <Sparkles className="w-4 h-4 inline mr-1" />
            Gold Membership
          </span>
          <h2 className="section-title">
            Everything You Need for Your{" "}
            <span className="text-primary">Artistic Journey</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Features Grid */}
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-6">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-background border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary p-6 sm:p-8">
            {/* Discount Badge */}
            <div className="flex justify-center mb-4">
              <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                33% OFF - Limited Time
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-muted-foreground line-through">
                  ₹14,990
                </span>
                <span className="text-4xl sm:text-5xl font-bold text-primary">
                  ₹9,990
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                One-time payment · Lifetime access
              </p>
            </div>

            {/* What's Included */}
            <div className="space-y-2 mb-6">
              {["Instant access to all 5 levels", "Weekly Sunday guidance sessions", "Private community access", "Lifetime updates included"].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#enroll"
              className="cta-button w-full justify-center text-center text-base sm:text-lg py-4"
            >
              Join Realism Redefined — ₹9,990
            </a>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Secure payment · Start learning immediately
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldMembershipSection;
