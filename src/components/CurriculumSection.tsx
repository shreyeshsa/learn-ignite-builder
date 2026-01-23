import { useState } from "react";
import { ChevronDown, BookOpen, Clock, Video, Check, Sparkles, Calendar, Users, RefreshCw } from "lucide-react";

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

const drawWithMeBenefits = [
  { icon: RefreshCw, text: "Refresh fundamentals" },
  { icon: Sparkles, text: "Introduce new drawings" },
  { icon: Users, text: "Keep learning continuous" },
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
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8 sm:mb-10 p-4 sm:p-5 rounded-xl bg-card border border-border max-w-2xl mx-auto">
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
        <div className="space-y-3 max-w-4xl mx-auto mb-8 sm:mb-10">
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
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      L{level.level}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      {level.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {level.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{level.modules}M</span>
                    <span>·</span>
                    <span>{level.lessons}L</span>
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
                  <div className="space-y-2 pt-2 sm:pt-3">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      What you'll learn:
                    </p>
                    <ul className="space-y-1.5">
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

        {/* Draw With Me - Bonus Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30">
            {/* Bonus badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-primary text-primary-foreground">
                Bonus Included
              </span>
            </div>

            <div className="text-center pt-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Draw With Me — Learn Together, Always
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-lg mx-auto">
                Every three months, all students draw along with me live.
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {drawWithMeBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border"
                  >
                    <benefit.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg font-semibold text-primary">
                You can attend every Draw With Me session, forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
