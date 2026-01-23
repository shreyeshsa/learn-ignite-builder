import { ChevronDown } from "lucide-react";
import { useState } from "react";

const levels = [
  {
    level: 1,
    title: "Rajagopalan Realistic Drawing",
    modules: 4,
    lessons: 11,
    duration: "11h 13m",
    highlights: [
      "Basic Proportions: Learn to start with simple shapes and lines for accurate proportions",
      "Master Skin Tones: Begin learning to replicate realistic skin tones with colors",
      "Understanding Shadows: Learn to create depth by adding shadows and highlights",
      "Practice and Confidence: Gain confidence by completing your first realistic drawing",
    ],
  },
  {
    level: 2,
    title: "Venugopalan Realistic Drawing",
    modules: 6,
    lessons: 18,
    duration: "18h 36m",
    highlights: [
      "Complex Shading: Advance to more complex shading for lifelike results",
      "Detail Refinement: Focus on refining details like hair, textures, and accessories",
      "Color Theory: Explore advanced color theory for vibrant and realistic artwork",
      "Artistic Expression: Start developing your unique artistic style",
    ],
  },
  {
    level: 3,
    title: "Vaduvur Ramar Realistic Drawing",
    modules: 6,
    lessons: 19,
    duration: "19h 1m",
    highlights: [
      "Advanced Composition: Exploring more intricate compositions",
      "Master Drawing Details: Get good at drawing textures and shapes",
      "Attention to Detail: Focusing on tiny details to make your art look super awesome",
      "Keep Improving: Keep practicing to draw even harder things confidently",
    ],
  },
  {
    level: 4,
    title: "Ramanujar Realistic Drawing",
    modules: 6,
    lessons: 19,
    duration: "19h 1m",
    highlights: [
      "Advanced Color Blending: Learn how to blend colors in more intricate ways",
      "Using Light and Dark Better: Make your drawings look real and 3D",
      "Artistic Confidence: Gain more confidence in drawing complex things",
      "Become an Art Pro: Keep growing and draw more complex things with ease",
    ],
  },
  {
    level: 5,
    title: "Parthasarathy Realistic Drawing",
    modules: 4,
    lessons: 11,
    duration: "11h 27m",
    highlights: [
      "New Approach to Realism: Understanding the values of color on white paper",
      "New Technique: Learning to use darker shades to lighter ones",
      "All-Round Expertise: Combine all your skills from earlier levels",
      "Ultimate Realism: Reach a peak in creating lifelike art",
    ],
    badge: "More lessons coming!",
  },
];

const CurriculumSection = () => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);

  return (
    <section className="section-light" id="curriculum">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Complete Curriculum</span>
          <h2 className="section-title">
            5 Levels to <span className="text-primary">Mastery</span>
          </h2>
          <p className="section-subtitle px-4">
            Structured learning path from beginner to professional artist
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left - Curriculum */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {levels.map((levelData) => (
              <div
                key={levelData.level}
                className={`course-module transition-all duration-300 ${
                  expandedLevel === levelData.level ? "ring-2 ring-primary" : ""
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedLevel(
                      expandedLevel === levelData.level ? null : levelData.level
                    )
                  }
                  className="w-full course-module-header justify-between text-left"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-primary">
                        Level {levelData.level}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {levelData.modules} Modules • {levelData.lessons} Lessons • {levelData.duration}
                      </span>
                    </div>
                    <h3 className="font-medium text-sm sm:text-base mt-1 truncate pr-4">
                      {levelData.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      expandedLevel === levelData.level ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedLevel === levelData.level ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="course-module-content">
                    {levelData.badge && (
                      <span className="inline-block text-xs text-primary font-medium mb-3">
                        ✨ {levelData.badge}
                      </span>
                    )}
                    <ul className="space-y-2.5 sm:space-y-3">
                      {levelData.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                          <span className="text-primary font-bold text-sm mt-0.5">➯</span>
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Pricing Card */}
          <div className="lg:col-span-1">
            <div className="pricing-card space-y-5 sm:space-y-6">
              <div>
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Gold Membership
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  Color Pencil <span className="text-primary">Basic to Pro</span>
                </h3>
              </div>

              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  "Lifetime Access of the Course",
                  "Includes 5 Levels + Live Draw sessions",
                  "WhatsApp Chat Support",
                  "Community & Gamification",
                  "Live Q&A Sessions (Sundays)",
                  "Course Completion Certificate",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="text-primary text-lg leading-none mt-0.5">✓</span>
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border">
                <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                  <span className="text-2xl sm:text-3xl font-bold">₹9,990</span>
                  <span className="text-muted-foreground line-through text-sm sm:text-base">
                    ₹14,990
                  </span>
                  <span className="text-xs sm:text-sm text-primary font-semibold">
                    Save 33%
                  </span>
                </div>
                <a
                  href="#"
                  className="cta-button w-full justify-center text-sm sm:text-base"
                >
                  Enroll Now - Lifetime Access
                </a>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
