import { Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-instructor.jpg";

const InstructorSection = () => {
  return (
    <section className="section-light" id="instructor">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Meet Your Guide</span>
          <h2 className="section-title">
            Your <span className="text-primary">Mentor</span>
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-sm">
          <div className="grid md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-2 relative">
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={heroImage}
                  alt="Shreyesh Aasuri - Instructor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Instructor Info Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl text-foreground">
                    Shreyesh Aasuri
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Founder, Aasuri Artist Academy
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  I'm a self-taught realistic artist who learned realism through years of trial, confusion, and deep study of fundamentals.
                </p>
                <p>
                  I built a clear, structured system that removes guesswork from drawing.
                </p>
                <p className="font-medium text-foreground">
                  Not shortcuts. Not tricks.
                </p>
                <p>
                  Today, this system has helped <span className="text-primary font-semibold">4,000+ students</span> — beginners, professionals, children, and working adults — gain confidence and clarity in art.
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">4,000+ Students</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
