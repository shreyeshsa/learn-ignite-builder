import { Check, Video, Layers, Calendar, Users, Gamepad2, Infinity, Award } from "lucide-react";

const features = [
  { icon: Video, text: "80+ hours of HD content" },
  { icon: Layers, text: "5 progressive levels" },
  { icon: Calendar, text: "Weekly live sessions" },
  { icon: Users, text: "Draw With Me series" },
  { icon: Gamepad2, text: "Gamified learning" },
  { icon: Infinity, text: "Lifetime access" },
  { icon: Award, text: "Completion certificate" },
];

const included = [
  "Instant access to all 5 levels",
  "Weekly Sunday guidance sessions",
  "Private community access",
  "Lifetime updates included",
];

const GoldMembershipSection = () => {
  return (
    <section className="section-light" id="pricing">
      <div className="container">
        <div className="text-center space-y-3 mb-8 sm:mb-10">
          <span className="level-badge">Gold Membership</span>
          <h2 className="section-title">
            Everything You Need for Your{" "}
            <span className="text-primary">Artistic Journey</span>
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Main Card */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            {/* Features Grid - Compact */}
            <div className="p-5 sm:p-6 border-b border-border">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-lg bg-background border border-border"
                  >
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
              {/* Discount Badge */}
              <div className="flex justify-center mb-4">
                <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-full">
                  33% OFF - Limited Time
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-5">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-xl text-muted-foreground line-through">
                    ₹14,990
                  </span>
                  <span className="text-4xl sm:text-5xl font-bold text-primary">
                    ₹9,990
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  One-time payment · Lifetime access
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-2 mb-5">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#enroll"
                className="cta-button w-full justify-center text-center text-base py-4 shadow-xl hover:shadow-2xl"
              >
                Join Realism Redefined — ₹9,990
              </a>

              <p className="text-center text-xs text-muted-foreground mt-3">
                Secure payment · Start learning immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldMembershipSection;
