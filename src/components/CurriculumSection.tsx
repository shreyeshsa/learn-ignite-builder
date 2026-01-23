import { useState } from "react";
import { ChevronDown, BookOpen, Clock, Video, Check, Sparkles } from "lucide-react";

const levels = [
  {
    level: 1,
    title: "Foundation of Realism",
    subtitle: "Basics for Colour Pencil",
    modules: 7,
    lessons: 26,
    duration: "7h 59m",
    highlights: [
      "Fundamentals of colour theory",
      "Blending and colour control",
      "Depth, texture, and realism",
      "Observational clarity",
    ],
  },
  {
    level: 2,
    title: "Control & Confidence",
    subtitle: "Rajagopalan Realistic Drawing",
    modules: 5,
    lessons: 13,
    duration: "16h 41m",
    highlights: [
      "Full portrait construction",
      "Handling complex details",
      "Applying skills beyond portraits",
    ],
  },
  {
    level: 3,
    title: "Depth & Detail",
    subtitle: "Vaduvur Ramar Realistic Drawing",
    modules: 4,
    lessons: 19,
    duration: "13h 26m",
    highlights: [
      "Advanced composition",
      "Texture accuracy",
      "Confident approach to complex subjects",
    ],
  },
  {
    level: 4,
    title: "Advanced Realism",
    subtitle: "Ramanujar Realistic Drawing",
    modules: 6,
    lessons: 19,
    duration: "19h 1m",
    highlights: [
      "Advanced colour blending",
      "Light and dark mastery",
      "Professional-level confidence",
    ],
  },
  {
    level: 5,
    title: "Ultimate Realism",
    subtitle: "Parthasarathy Realistic Drawing",
    modules: 4,
    lessons: 11,
    duration: "11h 27m",
    highlights: [
      "White-paper realism",
      "Dark-to-light value mastery",
      "Ability to draw any subject with clarity",
    ],
    note: "More lessons added continuously",
  },
];

const CurriculumSection = () => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(0);

  const totalModules = levels.reduce((acc, level) => acc + level.modules, 0);
  const totalLessons = levels.reduce((acc, level) => acc + level.lessons, 0);
  const totalHours = "68h 34m";

  return (
    <section className="section-dark" id="curriculum">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Curriculum Overview</span>
          <h2 className="section-title">
            The Realism Redefined{" "}
            <span className="text-primary">Learning Path</span>
          </h2>
          <p className="section-subtitle px-4">
            A clear five-level progression designed to build lifelong skill and understanding.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-10 p-4 sm:p-6 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{totalModules} Modules</span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{totalLessons} Lessons</span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{totalHours} Content</span>
          </div>
        </div>

        {/* Levels Accordion */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              {/* Level Header */}
              <button
                onClick={() => setExpandedLevel(expandedLevel === index ? null : index)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-sm sm:text-base font-bold text-primary">
                      L{level.level}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg">
                      {level.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {level.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{level.modules} Modules</span>
                    <span>·</span>
                    <span>{level.lessons} Lessons</span>
                    <span>·</span>
                    <span>{level.duration}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedLevel === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Level Content */}
              {expandedLevel === index && (
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-border">
                  {/* Mobile Stats */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground py-3 sm:hidden">
                    <span>{level.modules} Modules</span>
                    <span>·</span>
                    <span>{level.lessons} Lessons</span>
                    <span>·</span>
                    <span>{level.duration}</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      What you'll learn:
                    </p>
                    <ul className="space-y-2">
                      {level.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    {level.note && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-xs text-primary font-medium">
                          {level.note}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
