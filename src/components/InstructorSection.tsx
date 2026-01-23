import { Star, Video, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-instructor.jpg";

const InstructorSection = () => {
  return (
    <section className="section-dark bg-card/30" id="instructor">
      <div className="container">
        <div className="rounded-2xl overflow-hidden bg-muted">
          <div className="grid md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-2 relative">
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={heroImage}
                  alt="Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Master the Art of Realism
              </h2>

              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-primary" />
                  <span>80+ hrs of Video Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>88+ Lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-star text-star" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-muted-foreground">(600+ ratings)</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                I am a professional artist and illustrator with over 10 years of
                experience in the art world. My passion for art has led me to
                create AASURI, a platform for artists of all levels to learn,
                grow, and improve their skills.
              </p>

              <p className="text-muted-foreground mb-6">
                I have been fortunate enough to have my artwork recognized and
                featured on the TTD channel, and I am now excited to share my
                knowledge and help others achieve their artistic goals. Whether
                you are just starting out or looking to take your skills to the
                next level, AASURI offers the proper teaching methods and
                techniques to help you succeed.
              </p>

              <div className="flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-lg">Shreyesh SA</h4>
                  <p className="text-sm text-muted-foreground">
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
