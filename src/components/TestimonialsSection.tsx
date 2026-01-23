import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";

const studentStories = [
  {
    name: "Pranavi",
    location: "Oman",
    title: "Selected for Top Design Universities",
    shortStory: "Her realism work made invigilators stop, observe, and remember her portfolio. Clarity of fundamentals became her strongest advantage.",
    fullStory: "Pranavi's journey with Realism Redefined transformed her portfolio completely. When she appeared for design university entrance exams, the invigilators couldn't help but pause at her work. The depth, precision, and understanding of fundamentals she demonstrated set her apart from hundreds of other candidates. Today, she's pursuing her dream at one of the top design universities.",
    avatar: "P",
  },
  {
    name: "Ankitha",
    location: "India",
    title: "From Student to Teacher",
    shortStory: "Understanding turned into confidence. Confidence turned into teaching.",
    fullStory: "Ankitha started as a complete beginner, unsure if she had any talent for art. Through the structured system, she not only learned to draw realistically but understood the 'why' behind every technique. This deep understanding gave her the confidence to start teaching others. She now conducts art sessions in her community.",
    avatar: "A",
  },
  {
    name: "Sruthi",
    location: "India",
    title: "Calm Through Art",
    shortStory: "Drawing became grounding. Art became a place of peace.",
    fullStory: "For Sruthi, art became more than a skill—it became therapy. In the middle of a demanding career, she found that the focused practice of realistic drawing brought her immense calm. The Sunday sessions became her weekly reset, and the community became her support system.",
    avatar: "S",
  },
];

const studentArtworks = [
  { id: 1, placeholder: "Student Artwork 1" },
  { id: 2, placeholder: "Student Artwork 2" },
  { id: 3, placeholder: "Student Artwork 3" },
  { id: 4, placeholder: "Student Artwork 4" },
  { id: 5, placeholder: "Student Artwork 5" },
  { id: 6, placeholder: "Student Artwork 6" },
  { id: 7, placeholder: "Student Artwork 7" },
  { id: 8, placeholder: "Student Artwork 8" },
  { id: 9, placeholder: "Student Artwork 9" },
  { id: 10, placeholder: "Student Artwork 10" },
];

const TestimonialsSection = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const [showMoreStories, setShowMoreStories] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % studentStories.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + studentStories.length) % studentStories.length);
  };

  return (
    <section className="section-dark" id="testimonials">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Student Success Stories</span>
          <h2 className="section-title">
            What This Journey Has{" "}
            <span className="text-primary">Made Possible</span>
          </h2>
        </div>

        {/* Student Stories with Photo + Video Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* Story Cards */}
          <div className="space-y-4">
            {studentStories.map((story, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-4 sm:p-5 relative"
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/10" />
                
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Avatar/Photo Placeholder */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {story.avatar}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h4 className="font-semibold text-base sm:text-lg">
                        {story.name}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        ({story.location})
                      </span>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">
                      {story.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {expandedStory === index ? story.fullStory : story.shortStory}
                    </p>
                    <button
                      onClick={() => setExpandedStory(expandedStory === index ? null : index)}
                      className="text-sm text-primary font-medium mt-2 hover:underline"
                    >
                      {expandedStory === index ? "Show less" : "Read full story"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonial Card */}
          <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
            <h3 className="font-semibold text-base sm:text-lg mb-4">Video Testimonials</h3>
            
            {/* Video Placeholder */}
            <div className="relative aspect-video rounded-lg bg-muted mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-primary transition-colors">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {studentStories[currentVideoIndex].name}'s Story
                  </p>
                </div>
              </div>
            </div>

            {/* Video Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevVideo}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {studentStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentVideoIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextVideo}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* View More Stories Toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowMoreStories(!showMoreStories)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border hover:bg-muted transition-colors"
          >
            <span className="text-sm font-medium">
              {showMoreStories ? "Hide" : "View More"} Student Artworks
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${showMoreStories ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {/* Student Artworks Gallery */}
        {showMoreStories && (
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4 text-center">Student Gallery</h3>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {studentArtworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="flex-shrink-0 w-48 sm:w-56 snap-center"
                >
                  <div className="aspect-square rounded-xl bg-card border border-border overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      {artwork.placeholder}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Scroll Indicator */}
            <div className="flex justify-center gap-1.5 mt-4">
              {studentArtworks.slice(0, 5).map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${index === 0 ? "bg-primary" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-card border border-border">
          <div className="stat-item">
            <p className="stat-value">4,000+</p>
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
