import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Quote, ArrowRight } from "lucide-react";
import VideoModal from "./VideoModal";

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

interface MediaCarouselProps {
  storyIndex: number;
  studentName: string;
  onVideoClick: () => void;
}

const MediaCarousel = ({ storyIndex, studentName, onVideoClick }: MediaCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 150;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const artworks = [
    { gradient: "from-amber-100 to-orange-200" },
    { gradient: "from-rose-100 to-pink-200" },
    { gradient: "from-violet-100 to-purple-200" },
  ];

  return (
    <div className="relative">
      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background/90 border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background/90 border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide scroll-smooth touch-pan-x"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Video card */}
        <button
          onClick={onVideoClick}
          className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-2 border-border hover:border-primary cursor-pointer snap-start transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`Watch ${studentName}'s video`}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
            <img
              src="/placeholder.svg"
              alt="Video thumbnail"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground ml-0.5" fill="currentColor" />
              </div>
            </div>
            <span className="absolute bottom-2 left-2 text-[10px] text-white/80 font-medium">
              Watch Video
            </span>
          </div>
        </button>

        {/* Artwork cards */}
        {artworks.map((art, artIndex) => (
          <div
            key={artIndex}
            className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-2 border-border hover:border-primary/50 cursor-pointer snap-start transition-all hover:scale-[1.02]"
          >
            <div className={`w-full h-full bg-gradient-to-br ${art.gradient} flex items-center justify-center relative`}>
              <img
                src="/placeholder.svg"
                alt={`Artwork ${artIndex + 1}`}
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <span className="absolute bottom-2 left-2 text-[10px] text-foreground/70 font-medium bg-background/60 px-1.5 py-0.5 rounded backdrop-blur-sm">
                Artwork {artIndex + 1}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe hint for mobile */}
      <p className="text-[10px] text-muted-foreground mt-2 text-center sm:hidden">
        ← Swipe to see more →
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [showMoreWorks, setShowMoreWorks] = useState(false);
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; studentName: string }>({
    isOpen: false,
    studentName: "",
  });

  const openVideoModal = (studentName: string) => {
    setVideoModal({ isOpen: true, studentName });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, studentName: "" });
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
        <div className="space-y-6 sm:space-y-8 mb-14 sm:mb-20">
          {studentStories.map((story, storyIndex) => (
            <div
              key={storyIndex}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left: Photo placeholder */}
                <div className={`relative aspect-[4/3] md:aspect-auto md:col-span-2 bg-gradient-to-br ${story.gradientFrom} ${story.gradientTo} flex items-center justify-center`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/placeholder.svg"
                      alt={`${story.name}'s photo`}
                      className="w-full h-full object-cover opacity-40"
                    />
                  </div>
                  <div className="relative text-center p-4 sm:p-6 z-10">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-background/90 flex items-center justify-center mx-auto mb-2 sm:mb-3 border-4 border-background shadow-lg">
                      <span className="text-xl sm:text-3xl font-bold text-primary">
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

                {/* Right: Content + Media carousel */}
                <div className="md:col-span-3 p-4 sm:p-6 lg:p-8">
                  {/* Badge */}
                  <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
                    {story.badge}
                  </span>

                  {/* Story content */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                    {story.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Media carousel */}
                  <MediaCarousel
                    storyIndex={storyIndex}
                    studentName={story.name}
                    onVideoClick={() => openVideoModal(story.name)}
                  />
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

          {/* Initial 6 artworks */}
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

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        studentName={videoModal.studentName}
      />
    </section>
  );
};

export default TestimonialsSection;
