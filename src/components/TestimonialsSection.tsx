import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Beginner Artist",
    content:
      "I started with zero knowledge and now I can create realistic portraits! The step-by-step approach made it so easy to follow. The instructor is amazing!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Hobby Artist",
    content:
      "The live Q&A sessions are invaluable. Getting personal feedback from the instructor helped me improve faster than I ever imagined possible.",
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
      "Even as someone with experience, I learned new techniques. The advanced levels pushed my skills to the next level. Highly recommended!",
    rating: 5,
    avatar: "VP",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-dark bg-card/30" id="testimonials">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <span className="level-badge">Student Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied students who transformed their artistic journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card relative group hover:bg-muted/80 transition-colors"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-star text-star" />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 p-6 rounded-xl bg-card border border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">2,500+</p>
            <p className="text-sm text-muted-foreground">Happy Students</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">4.8/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">600+</p>
            <p className="text-sm text-muted-foreground">Reviews</p>
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">80+</p>
            <p className="text-sm text-muted-foreground">Hours of Content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
