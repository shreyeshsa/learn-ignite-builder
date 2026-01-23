import { useState, useEffect } from "react";

const navLinks = [
  { label: "Why Choose", href: "#benefits" },
  { label: "Student Stories", href: "#testimonials" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);

      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm animate-fade-in">
      <div className="container">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Brand */}
          <div className="hidden sm:flex items-center">
            <span className="text-sm font-semibold text-primary">Aasuri Academy</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center justify-center flex-1 sm:flex-none">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 overflow-x-auto scrollbar-hide px-2">
              {navLinks.map((link, index) => (
                <div key={link.href} className="flex items-center">
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 ${
                      activeSection === link.href.substring(1)
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                  {/* Separator dot - only between links */}
                  {index < navLinks.length - 1 && (
                    <span className="hidden md:block mx-1 lg:mx-2 w-1 h-1 rounded-full bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Spacer for balance on desktop */}
          <div className="hidden sm:block w-24" />
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
