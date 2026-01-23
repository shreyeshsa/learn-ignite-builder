import { Star, Play, Users, Clock, BookOpen } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import heroImage from "@/assets/hero-instructor.jpg";

const HeroSection = () => {
  // Set target date 30 days from now for the countdown
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Limited Time Offer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master the Art of{" "}
                <span className="text-primary">Realistic Drawing</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Learn color pencil techniques from basic to professional level. 
                Transform your artistic skills with 80+ hours of expert instruction.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 py-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-star text-star"
                    />
                  ))}
                </div>
                <span className="font-semibold">4.8</span>
                <span className="text-muted-foreground">(600+ ratings)</span>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span>2,500+ Students</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">88+ Lessons</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">80+ Hours Content</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">Lifetime Access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm">Community Access</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="cta-button">
                Enroll Now - ₹9,990
              </a>
              <a href="#curriculum" className="cta-button-outline">
                View Curriculum
              </a>
            </div>
          </div>

          {/* Right Content - Timer Card */}
          <div className="lg:justify-self-end">
            <div className="bg-card/80 backdrop-blur-lg border border-border rounded-2xl p-8 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Offer Ends In</h3>
                <p className="text-sm text-muted-foreground">
                  Don't miss this exclusive discount
                </p>
              </div>
              
              <CountdownTimer targetDate={targetDate} />

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 border-2 border-background flex items-center justify-center text-xs font-semibold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-primary">2,500+</span>
                  <p className="text-muted-foreground">Happy Learners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
