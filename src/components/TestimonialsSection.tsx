import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Quote, ArrowRight } from "lucide-react";

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
    gradientFrom: "from-rose-200",
    gradientTo: "to-amber-100",
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
    gradientFrom: "from-violet-200",
    gradientTo: "to-pink-100",
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
    gradientFrom: "from-teal-200",
    gradientTo: "to-cyan-100",
  },
];

const studentWorks = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  placeholder: `Student Work ${i + 1}`,
  gradient: [
    "from-amber-100 to-orange-200",
    "from-rose-100 to-pink-200",
    "from-violet-100 to-purple-200",
    "from-teal-100 to-cyan-200",
    "from-emerald-100 to-green-200",
    "from-sky-100 to-blue-200",
  ][i],
}));

const additionalWorks = Array.from({ length: 20 }, (_, i) => ({
  id: i + 7,
  placeholder: `Student Work ${i + 7}`,
  gradient: [
    "from-amber-100 to-orange-200",
    "from-rose-100 to-pink-200",
    "from-violet-100 to-purple-200",
    "from-teal-100 to-cyan-200",
    "from-emerald-100 to-green-200",
  ][i % 5],
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
        <div className="space-y-8 sm:space-y-10 mb-14 sm:mb-20">
          {studentStories.map((story, storyIndex) => (
            <div
              key={storyIndex}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left: Photo placeholder - takes 2 columns */}
                <div className={`relative aspect-[4/3] md:aspect-auto md:col-span-2 bg-gradient-to-br ${story.gradientFrom} ${story.gradientTo} flex items-center justify-center`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/placeholder.svg"
                      alt={`${story.name}'s photo`}
                      className="w-full h-full object-cover opacity-40"
                    />
                  </div>
                  <div className="relative text-center p-6 z-10">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-background/90 flex items-center justify-center mx-auto mb-3 border-4 border-background shadow-lg">
                      <span className="text-2xl sm:text-4xl font-bold text-primary">
                        {story.avatar}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground/80">
                      {story.name}
                    </p>
                    <p className="text-xs text-foreground/60">
                      {story.location}
                    </p>
                  </div>
                </div>

                {/* Right: Content + Media carousel - takes 3 columns */}
                <div className="md:col-span-3 p-5 sm:p-6 lg:p-8">
                  {/* Badge */}
                  <span className="inline-block px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary mb-4">
                    {story.badge}
                  </span>

                  {/* Story content */}
                  <div className="space-y-3 mb-5">
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

                  {/* Media carousel with actual placeholder images */}
                  <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide -mx-2 px-2">
                    {/* Video placeholder */}
                    <div
                      className={`flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-2 ${
                        getActiveMedia(storyIndex) === 0
                          ? "border-primary shadow-lg"
                          : "border-border"
                      } cursor-pointer snap-center transition-all hover:scale-[1.02]`}
                      onClick={() => setActiveMedia(storyIndex, 0)}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                        <img
                          src="/placeholder.svg"
                          alt="Video thumbnail"
                          className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                            <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                        <span className="absolute bottom-2 left-2 text-[10px] text-white/70 font-medium">
                          Video
                        </span>
                      </div>
                    </div>

                    {/* Artwork placeholders with gradient backgrounds */}
                    {[
                      { gradient: "from-amber-100 to-orange-200" },
                      { gradient: "from-rose-100 to-pink-200" },
                      { gradient: "from-violet-100 to-purple-200" },
                    ].map((art, artIndex) => (
                      <div
                        key={artIndex}
                        className={`flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-xl overflow-hidden border-2 ${
                          getActiveMedia(storyIndex) === artIndex + 1
                            ? "border-primary shadow-lg"
                            : "border-border"
                        } cursor-pointer snap-center transition-all hover:scale-[1.02]`}
                        onClick={() => setActiveMedia(storyIndex, artIndex + 1)}
                      >
                        <div className={`w-full h-full bg-gradient-to-br ${art.gradient} flex items-center justify-center relative`}>
                          <img
                            src="/placeholder.svg"
                            alt={`Artwork ${artIndex + 1}`}
                            className="w-full h-full object-cover mix-blend-overlay"
                          />
                          <span className="absolute bottom-2 left-2 text-[10px] text-foreground/60 font-medium bg-background/50 px-1.5 py-0.5 rounded">
                            Artwork {artIndex + 1}
                          </span>
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
        <div className="mb-14 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10">
            <span className="level-badge mb-3 inline-block">Student Works</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Created through understanding, not copying
            </h3>
          </div>

          {/* Initial 6 artworks with gradient backgrounds */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {studentWorks.map((work) => (
              <div
                key={work.id}
                className="aspect-square rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className={`w-full h-full bg-gradient-to-br ${work.gradient} flex items-center justify-center relative`}>
                  <img
                    src="/placeholder.svg"
                    alt={work.placeholder}
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute bottom-3 left-3 text-xs text-foreground/70 font-medium bg-background/60 px-2 py-1 rounded-md backdrop-blur-sm">
                    {work.placeholder}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parent & Student Quotes */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              What Parents & Students Say
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {parentQuotes.map((item, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border relative hover:shadow-md transition-shadow"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 italic">
                  "{item.quote}"
                </p>
                <p className="text-sm font-semibold text-foreground">
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all group"
          >
            <span className="text-sm sm:text-base font-semibold text-primary">
              View More Student Works
            </span>
            <ArrowRight
              className={`w-4 h-4 text-primary transition-transform group-hover:translate-x-1 ${
                showMoreWorks ? "rotate-90" : ""
              }`}
            />
          </button>
        </div>

        {/* Additional Works Gallery */}
        {showMoreWorks && (
          <div className="mt-10">
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {additionalWorks.map((work) => (
                <div
                  key={work.id}
                  className="flex-shrink-0 w-44 sm:w-52 snap-center"
                >
                  <div className="aspect-square rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group">
                    <div className={`w-full h-full bg-gradient-to-br ${work.gradient} flex items-center justify-center relative`}>
                      <img
                        src="/placeholder.svg"
                        alt={work.placeholder}
                        className="w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] text-foreground/70 font-medium bg-background/60 px-1.5 py-0.5 rounded backdrop-blur-sm">
                        {work.placeholder}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing message */}
            <div className="text-center mt-10 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Art grows when it's shared.
                <br />
                <span className="text-foreground font-semibold text-lg sm:text-xl">
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
