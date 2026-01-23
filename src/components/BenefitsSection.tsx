import { CheckCircle, Palette, Video, Users, Award, MessageCircle, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "80+ Hours of HD Video",
    description: "Comprehensive lessons covering every aspect of realistic drawing",
  },
  {
    icon: Palette,
    title: "5 Progressive Levels",
    description: "From beginner basics to advanced master-level techniques",
  },
  {
    icon: Users,
    title: "Live Q&A Sessions",
    description: "Weekly live sessions every Sunday with the instructor",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Community",
    description: "Get instant feedback and connect with fellow artists",
  },
  {
    icon: Award,
    title: "Completion Certificate",
    description: "Receive a certificate upon completing the course",
  },
  {
    icon: Smartphone,
    title: "Learn Anywhere",
    description: "Access on iOS, Android, and web at your own pace",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-light" id="benefits">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Why Choose This Course</span>
          <h2 className="section-title">
            Everything You Need to{" "}
            <span className="text-primary">Master Art</span>
          </h2>
          <p className="section-subtitle px-4">
            Our comprehensive program includes everything you need to transform from beginner to professional artist
          </p>
        </div>

        {/* Benefits Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/15 transition-colors">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-1.5 sm:mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional feature highlight */}
        <div className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-secondary/50 via-card to-accent/30 border border-border">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl font-bold">
                Got Questions or Need Guidance?
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Enjoy <strong className="text-foreground">1:1 reviews</strong> with the instructor. 
                Share your progress in our WhatsApp group and get expert feedback.
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base">Personal feedback on your artwork</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base">Community app with gamified learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base">Leaderboard to track your progress</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary opacity-50 blur-2xl absolute inset-0" />
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-card border-4 border-primary/30 flex items-center justify-center">
                  <Users className="w-14 h-14 sm:w-16 sm:h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
