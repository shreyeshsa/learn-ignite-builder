import { ChevronDown, Play, Clock, BookOpen } from "lucide-react";
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
    color: "from-green-500/20 to-green-600/10",
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
    color: "from-blue-500/20 to-blue-600/10",
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
    color: "from-purple-500/20 to-purple-600/10",
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
    color: "from-amber-500/20 to-amber-600/10",
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
    color: "from-red-500/20 to-red-600/10",
    badge: "More lessons coming!",
  },
];

const CurriculumSection = () => {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);

  return (
    <section className="section-dark" id="curriculum">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Curriculum */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-center lg:text-left space-y-4 mb-8">
              <span className="level-badge">Complete Curriculum</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                5 Levels to <span className="text-primary">Mastery</span>
              </h2>
              <p className="text-muted-foreground">
                Structured learning path from beginner to professional artist
              </p>
            </div>

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
                  className="w-full course-module-header justify-between"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium uppercase tracking-wider">
                      {levelData.modules} Modules • {levelData.lessons} Lessons •{" "}
                      {levelData.duration}
                    </span>
                    {levelData.badge && (
                      <span className="text-xs text-primary font-medium">
                        ({levelData.badge})
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedLevel === levelData.level ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedLevel === levelData.level
                      ? "max-h-[500px]"
                      : "max-h-0"
                  }`}
                >
                  <div className={`course-module-content bg-gradient-to-br ${levelData.color}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary uppercase">
                          Level {levelData.level}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold">
                        {levelData.title}
                      </h3>
                      <ul className="space-y-3">
                        {levelData.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-bold">➯</span>
                            <span className="text-sm text-muted-foreground">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Pricing Card */}
          <div className="lg:col-span-1">
            <div className="pricing-card space-y-6">
              <div>
                <p className="text-accent font-semibold text-lg">
                  Gold Membership
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  Color Pencil <span className="text-primary">Basic to Pro</span>
                </h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Lifetime Access of the Course</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Includes 5 Levels + Live Draw sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>WhatsApp Chat Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Community & Gamification</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Live Q&A Sessions (Sundays)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span>Course Completion Certificate</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-border">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold">₹9,990</span>
                  <span className="text-muted-foreground line-through">
                    ₹14,990
                  </span>
                  <span className="text-sm text-primary font-semibold">
                    Save 33%
                  </span>
                </div>
                <a
                  href="#"
                  className="cta-button w-full text-center"
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
