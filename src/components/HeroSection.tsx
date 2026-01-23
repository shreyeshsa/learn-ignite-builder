import { Star, Users, Clock, BookOpen, Play, Infinity, CalendarCheck } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import heroImage from "@/assets/hero-instructor.jpg";

const HeroSection = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <section className="relative min-h-[100svh] flex flex-col" id="hero">
      {/* Hero Image Section */}
      <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Realism Redefined Course Preview"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl hover:bg-primary transition-colors group">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-background relative -mt-16 sm:-mt-20 rounded-t-3xl pt-6 sm:pt-8">
        <div className="container">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <span className="level-badge">Limited Time Offer</span>
          </div>

          {/* Title */}
          <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
              Realism. <span className="text-primary">Redefined.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
              A lifelong artistic journey that teaches you how to understand realism — so you can draw any subject with confidence, even if you're starting from zero.
            </p>
            <p className="text-xs sm:text-sm text-primary font-medium px-4">
              Built on a proven system followed by 4,000+ students across the world, inside Aasuri Artist Academy.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 flex-wrap">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-star text-star" />
              ))}
              <span className="font-semibold text-sm sm:text-base ml-1">4.8</span>
              <span className="text-muted-foreground text-xs sm:text-sm">(600+)</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <Users className="w-4 h-4" />
              <span>4,000+ Students</span>
            </div>
          </div>

          {/* Highlights - Horizontal scroll on mobile */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:flex-wrap scrollbar-hide">
            <div className="highlight-card flex-shrink-0 min-w-[140px] sm:min-w-0 sm:flex-1 sm:max-w-[160px]">
              <BookOpen className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm font-medium">88+ Lessons</span>
            </div>
            <div className="highlight-card flex-shrink-0 min-w-[140px] sm:min-w-0 sm:flex-1 sm:max-w-[160px]">
              <Clock className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm font-medium">80+ Hours</span>
            </div>
            <div className="highlight-card flex-shrink-0 min-w-[140px] sm:min-w-0 sm:flex-1 sm:max-w-[160px]">
              <Users className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm font-medium">Live Q&A</span>
            </div>
            <div className="highlight-card flex-shrink-0 min-w-[140px] sm:min-w-0 sm:flex-1 sm:max-w-[160px]">
              <Infinity className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm font-medium">Lifetime Access</span>
            </div>
            <div className="highlight-card flex-shrink-0 min-w-[140px] sm:min-w-0 sm:flex-1 sm:max-w-[160px]">
              <CalendarCheck className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm font-medium">Weekly Guidance</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-card rounded-2xl p-4 sm:p-6 border border-border mb-6 sm:mb-8">
            <p className="text-center text-sm text-muted-foreground mb-3">Offer Ends In</p>
            <CountdownTimer targetDate={targetDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center mb-4">
            <a href="#pricing" className="cta-button w-full sm:w-auto justify-center text-center">
              Join Realism Redefined
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground mb-8">
            Begin your journey inside Aasuri Artist Academy
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3 pb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary border-2 border-background flex items-center justify-center text-xs font-semibold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">4,000+</span> Happy Learners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
