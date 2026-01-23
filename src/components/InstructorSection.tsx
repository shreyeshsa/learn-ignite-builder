import { Star, Video, BookOpen, Award } from "lucide-react";
import heroImage from "@/assets/hero-instructor.jpg";

const InstructorSection = () => {
  return (
    <section className="section-light" id="instructor">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Meet Your Instructor</span>
          <h2 className="section-title">
            Learn from the <span className="text-primary">Best</span>
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden bg-card border border-border shadow-sm">
          <div className="grid md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-2 relative">
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={heroImage}
                  alt="Shreyesh SA - Instructor"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                Master the Art of Realism
              </h3>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Video className="w-4 h-4 text-primary" />
                  <span>80+ hrs Content</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>88+ Lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-star text-star" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-muted-foreground">(600+)</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                <p>
                  I am a professional artist and illustrator with over 10 years of
                  experience in the art world. My passion for art has led me to
                  create AASURI, a platform for artists of all levels to learn,
                  grow, and improve their skills.
                </p>
                <p>
                  I have been fortunate enough to have my artwork recognized and
                  featured on the TTD channel, and I am now excited to share my
                  knowledge and help others achieve their artistic goals.
                </p>
              </div>

              {/* Instructor Info */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-5 border-t border-border">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-foreground">
                    Shreyesh SA
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Founder & Lead Instructor
                  </p>
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
