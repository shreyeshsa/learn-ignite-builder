import { CheckCircle, Palette, Video, Users, Award, MessageCircle, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "80+ Hours of HD Video Content",
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
    description: "Weekly live sessions every Sunday (7PM-8PM) with the instructor",
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
    description: "Access on iOS, Android, and web - learn at your own pace",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-dark bg-card/30" id="benefits">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <span className="level-badge">Why Choose This Course</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything You Need to <span className="text-primary">Master Art</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive program includes everything you need to transform from beginner to professional artist
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Additional feature highlights */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-card to-secondary/10 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Got Questions or Need Guidance?
              </h3>
              <p className="text-muted-foreground">
                Enjoy <strong className="text-foreground">1:1 reviews</strong> with the instructor. 
                Share your progress in our WhatsApp group and get expert feedback.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Personal feedback on your artwork</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Community app with gamified learning</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Leaderboard to track your progress</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-3xl absolute inset-0" />
                <div className="relative w-48 h-48 rounded-full bg-card border-4 border-primary flex items-center justify-center">
                  <Users className="w-20 h-20 text-primary" />
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
