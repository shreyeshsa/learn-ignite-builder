import {
  BookOpen,
  Layers,
  Smartphone,
  Heart,
  Globe,
  Award,
  Calendar,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "A Proven Learning System",
    description:
      "Over 80+ hours of structured learning, designed to help you understand realism clearly — not just follow steps.",
  },
  {
    icon: Layers,
    title: "5 Progressive Levels to Mastery",
    description:
      "From fundamentals to advanced realism, each level builds confidence and prepares you for the next.",
  },
  {
    icon: Smartphone,
    title: "Learning Social Network (LSN) App",
    description:
      "Learn inside a dedicated app. Access lessons, join live sessions, share your work, track progress, and connect with a calm, spiritual art community.",
  },
  {
    icon: Heart,
    title: "A Spiritual & Divine Art Community",
    description:
      "A calm, focused space where art connects with culture, devotion, and inner growth. Many students find not just skill here — but clarity, patience, and peace.",
  },
  {
    icon: Globe,
    title: "Learn Anywhere, at Your Pace",
    description:
      "Access everything on mobile, tablet, or desktop, and progress at a speed that suits your life.",
  },
  {
    icon: Award,
    title: "Recognition for Your Journey",
    description:
      "Receive a course completion certificate that reflects your dedication and growth.",
  },
  {
    icon: Calendar,
    title: "Draw With Me – Live Learning",
    description:
      "Every 3 months, draw along with me live. Learn new drawings, strengthen fundamentals, and grow together as a community. You can attend every session — always.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-light" id="benefits">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-4 mb-10 sm:mb-14">
          <span className="level-badge">Why Choose Aasuri Artist Academy</span>
          <h2 className="section-title">
            Everything you need — and the{" "}
            <span className="text-primary">right environment</span> to grow
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            This is not just a collection of lessons.{" "}
            <span className="text-foreground font-medium">
              It's a complete artistic ecosystem built for long-term growth.
            </span>
          </p>
        </div>

        {/* Features Grid - 2 columns on desktop */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-base sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
