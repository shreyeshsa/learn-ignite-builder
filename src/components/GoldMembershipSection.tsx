import { Check, Video, Layers, Calendar, Users, Gamepad2, Infinity, Award, Smartphone, Globe, Apple } from "lucide-react";

const features = [
  { icon: Video, text: "80+ hours HD content" },
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
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <span className="level-badge">Gold Membership</span>
          <h2 className="section-title">
            Everything You Need for Your{" "}
            <span className="text-primary">Artistic Journey</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Main Card */}
          <div className="bg-card rounded-2xl border-2 border-primary/20 shadow-xl overflow-hidden">
            {/* Features Grid */}
            <div className="p-5 sm:p-6 border-b border-border">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2.5 sm:p-3 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors"
                  >
                    <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* LSN App Availability Box */}
            <div className="mx-5 sm:mx-6 my-4 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground">
                    Available on Aasuri Artist Academy App
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                    Learn on your preferred device
                  </p>
                </div>
              </div>
              
              {/* Platform Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border">
                  <Apple className="w-4 h-4 text-foreground" />
                  <span className="text-xs font-medium">App Store</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border">
                  <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <span className="text-xs font-medium">Play Store</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-border">
                  <Globe className="w-4 h-4 text-foreground" />
                  <span className="text-xs font-medium">Web App</span>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-muted-foreground mt-3">
                Access lessons, live sessions, and community features from the Learning Social Network (LSN) app.
              </p>
            </div>

            {/* Pricing Section */}
            <div className="p-5 sm:p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
              {/* Discount Badge */}
              <div className="flex justify-center mb-4">
                <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs sm:text-sm font-bold rounded-full shadow-lg">
                  33% OFF — Limited Time
                </span>
              </div>

              {/* Price */}
              <div className="text-center mb-5">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-lg sm:text-xl text-muted-foreground line-through">
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
              <div className="space-y-2.5 mb-6">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#enroll"
                className="cta-button w-full justify-center text-center text-base sm:text-lg py-4 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all"
              >
                Join Realism Redefined — ₹9,990
              </a>

              <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-4">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-primary" />
                  Secure payment
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-primary" />
                  Start learning immediately
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldMembershipSection;
