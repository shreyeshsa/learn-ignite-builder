import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Beginner Artist",
    content:
      "I started with zero knowledge and now I can create realistic portraits! The step-by-step approach made it so easy to follow.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Hobby Artist",
    content:
      "The live Q&A sessions are invaluable. Getting personal feedback from the instructor helped me improve faster than I ever imagined.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Ananya Reddy",
    role: "Art Student",
    content:
      "The community support is incredible. Fellow students are always ready to help and provide constructive feedback. Worth every rupee!",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Vikram Patel",
    role: "Professional Artist",
    content:
      "Even as someone with experience, I learned new techniques. The advanced levels pushed my skills to the next level.",
    rating: 5,
    avatar: "VP",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-dark" id="testimonials">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Student Success Stories</span>
          <h2 className="section-title">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="section-subtitle px-4">
            Join thousands of satisfied students who transformed their artistic journey
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card relative group hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 text-primary/10" />

              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-2 sm:mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-star text-star" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-card border border-border">
          <div className="stat-item">
            <p className="stat-value">2,500+</p>
            <p className="stat-label">Happy Students</p>
          </div>
          <div className="h-10 w-px bg-border hidden sm:block" />
          <div className="stat-item">
            <p className="stat-value">4.8/5</p>
            <p className="stat-label">Average Rating</p>
          </div>
          <div className="h-10 w-px bg-border hidden sm:block" />
          <div className="stat-item">
            <p className="stat-value">600+</p>
            <p className="stat-label">Reviews</p>
          </div>
          <div className="h-10 w-px bg-border hidden sm:block" />
          <div className="stat-item">
            <p className="stat-value">80+</p>
            <p className="stat-label">Hours Content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
