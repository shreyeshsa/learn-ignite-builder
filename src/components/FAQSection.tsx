import { ChevronDown, Phone } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What materials do I need for this course?",
    answer:
      "Basic supplies needed: Prisma pencils, Grey A3 Sketchbook, Eraser, Sharpener. The instructor will recommend specific brands or types of pencils and other materials once you register for the course.",
  },
  {
    question:
      "I am a beginner who has absolutely no knowledge about Drawing. Will it be useful for me?",
    answer:
      "Yes, you're in the right place! This course is designed to take you from absolute beginner to professional level. You are going to be transformed with your drawing skills!",
  },
  {
    question:
      "Why does this course combine live guidance and self-paced learning?",
    answer:
      "Self-paced lessons allow progress at your convenience, while live Q&A sessions provide real-time guidance and interaction with the instructor for deeper understanding and support.",
  },
  {
    question: "Why opt for prerecorded online drawing courses?",
    answer:
      "Prerecorded lessons offer personalized learning, allowing you to progress at your own speed with detailed guidance, clear voiceovers, and the ability to review and refine each step.",
  },
  {
    question: "Will I have access to the instructor for support and feedback?",
    answer:
      "Yes, you'll get instructor support and feedback throughout the course. You'll also be able to reach out to the instructor through the app.",
  },
  {
    question: "What will be the language for the courses?",
    answer: "All lessons are taught in simple, easy-to-understand English!",
  },
  {
    question: "Is there an app available for learning?",
    answer:
      "Absolutely! Our app is available on iOS and Android, bringing learning to your fingertips. Access lessons, connect with artists, and chat directly with our instructor.",
  },
  {
    question:
      "Can I access the course materials on multiple devices with a single account?",
    answer:
      "Yes! Your account allows seamless access to course materials across various devices, ensuring flexibility in your learning process.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-dark" id="faq">
      <div className="container max-w-3xl">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start sm:items-center justify-between p-4 text-left hover:bg-accent/50 transition-colors gap-3"
              >
                <span className="font-medium text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0 transition-transform ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="p-4 pt-0 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 sm:mt-12 text-center space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold">
            Having More Doubts About the Course?
          </h3>
          <p className="text-sm text-muted-foreground">Give us a call</p>
          <a
            href="tel:+917695938525"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary hover:opacity-90 text-primary-foreground rounded-xl font-semibold text-sm sm:text-base transition-opacity"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
