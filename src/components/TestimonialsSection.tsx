import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Play, Quote, ArrowRight, ImageIcon } from "lucide-react";

const studentStories = [
  {
    name: "Pranavi",
    location: "Oman",
    badge: "STUDENT STORY",
    content: [
      "Pranavi applied to top design universities including MIT, UID, Symbiosis, and ISDI — and was selected.",
      "The works she created using the Aasuri system stood out during interviews and stayed in the invigilators' minds.",
      "Strong understanding of blending, light, shade, and observation made the difference.",
    ],
    avatar: "P",
  },
  {
    name: "Ankitha",
    location: "India",
    badge: "STUDENT STORY",
    content: [
      "Ankitha followed the Realism Redefined system step by step.",
      "As her understanding grew, her confidence grew with it.",
      "Today, she teaches the same concepts to others — proof of true clarity, not dependence.",
    ],
    avatar: "A",
  },
  {
    name: "Sruthi",
    location: "India",
    badge: "STUDENT STORY",
    content: [
      "For Sruthi, drawing became a place of calm after stressful workdays.",
      "Understanding realism helped her slow down, focus, and reconnect.",
      "Art became grounding — not overwhelming.",
    ],
    avatar: "S",
  },
];

const studentWorks = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  placeholder: `Student Work ${i + 1}`,
}));

const additionalWorks = Array.from({ length: 20 }, (_, i) => ({
  id: i + 7,
  placeholder: `Student Work ${i + 7}`,
}));

const parentQuotes = [
  {
    quote: "This learning brought out my daughter's potential in ways I never expected.",
    name: "Arun Durairaj",
  },
  {
    quote: "This art not only looks beautiful, it awakens spiritual awareness.",
    name: "Radhika Ramesh",
  },
];

const TestimonialsSection = () => {
  const [showMoreWorks, setShowMoreWorks] = useState(false);
  const [activeStoryMedia, setActiveStoryMedia] = useState<Record<number, number>>({});

  const getActiveMedia = (storyIndex: number) => activeStoryMedia[storyIndex] || 0;
  const setActiveMedia = (storyIndex: number, mediaIndex: number) => {
    setActiveStoryMedia((prev) => ({ ...prev, [storyIndex]: mediaIndex }));
  };

  return (
    <section className="section-dark" id="testimonials">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <span className="level-badge">Real Transformations</span>
          <h2 className="section-title">
            Student Journeys &{" "}
            <span className="text-primary">Their Artwork</span>
          </h2>
          <p className="section-subtitle px-4">
            Real people. Real growth. Created through understanding.
          </p>
        </div>

        {/* Student Stories */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          {studentStories.map((story, storyIndex) => (
            <div
              key={storyIndex}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Photo placeholder */}
                <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-4 border-background">
                      <span className="text-3xl sm:text-4xl font-bold text-primary">
                        {story.avatar}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Student photo placeholder
                    </p>
                  </div>
                </div>

                {/* Right: Content + Media carousel */}
                <div className="p-5 sm:p-6 md:p-8">
                  {/* Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary mb-4">
                    {story.badge}
                  </span>

                  {/* Name */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">
                    {story.name}
                    <span className="text-sm font-normal text-muted-foreground ml-2">
                      · {story.location}
                    </span>
                  </h3>

                  {/* Story content */}
                  <div className="space-y-3 my-4">
                    {story.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Swipeable media hint */}
                  <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                    <ChevronLeft className="w-3 h-3" />
                    Swipe to watch & view
                    <ChevronRight className="w-3 h-3" />
                  </p>

                  {/* Media carousel */}
                  <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide -mx-2 px-2">
                    {/* Video placeholder */}
                    <div
                      className={`flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-muted border-2 ${
                        getActiveMedia(storyIndex) === 0
                          ? "border-primary"
                          : "border-transparent"
                      } flex items-center justify-center cursor-pointer snap-center transition-all`}
                      onClick={() => setActiveMedia(storyIndex, 0)}
                    >
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-1">
                          <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
                        </div>
                        <p className="text-[10px] text-muted-foreground">Video</p>
                      </div>
                    </div>

                    {/* Artwork placeholders */}
                    {[1, 2, 3].map((artIndex) => (
                      <div
                        key={artIndex}
                        className={`flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-muted border-2 ${
                          getActiveMedia(storyIndex) === artIndex
                            ? "border-primary"
                            : "border-transparent"
                        } flex items-center justify-center cursor-pointer snap-center transition-all`}
                        onClick={() => setActiveMedia(storyIndex, artIndex)}
                      >
                        <div className="text-center">
                          <ImageIcon className="w-6 h-6 text-muted-foreground mx-auto mb-1" />
                          <p className="text-[10px] text-muted-foreground">
                            Artwork {artIndex}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Student Works Gallery */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <span className="level-badge mb-3 inline-block">Student Works</span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Created through understanding, not copying
            </h3>
          </div>

          {/* Initial 6 artworks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {studentWorks.map((work) => (
              <div
                key={work.id}
                className="aspect-square rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  <div className="text-center">
                    <ImageIcon className="w-8 h-8 mx-auto mb-2 text-muted-foreground/50" />
                    <p className="text-xs">{work.placeholder}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parent & Student Quotes */}
        <div className="mb-10 sm:mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              What Parents & Students Say
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {parentQuotes.map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-xl bg-card border border-border relative"
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/10" />
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 italic">
                  "{item.quote}"
                </p>
                <p className="text-sm font-medium text-foreground">
                  — {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* View More Student Works */}
        <div className="text-center">
          <button
            onClick={() => setShowMoreWorks(!showMoreWorks)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/30 hover:bg-muted transition-all"
          >
            <span className="text-sm font-medium">
              View More Student Works
            </span>
            <ArrowRight
              className={`w-4 h-4 transition-transform ${
                showMoreWorks ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        {/* Additional Works Gallery */}
        {showMoreWorks && (
          <div className="mt-8">
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {additionalWorks.map((work) => (
                <div
                  key={work.id}
                  className="flex-shrink-0 w-40 sm:w-48 snap-center"
                >
                  <div className="aspect-square rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-colors">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                      <div className="text-center">
                        <ImageIcon className="w-6 h-6 mx-auto mb-1 text-muted-foreground/50" />
                        <p>{work.placeholder}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing message */}
            <div className="text-center mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Art grows when it's shared.
                <br />
                <span className="text-foreground font-medium">
                  Learning grows when we grow together.
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
