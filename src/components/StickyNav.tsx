import { useState, useEffect } from "react";

const navLinks = [
  { label: "Why Choose", href: "#why-choose" },
  { label: "Stories", href: "#testimonials" },
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

      // Find active section
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container">
        {/* Mobile: Horizontal scrollable pills */}
        <div className="sm:hidden h-11 flex items-center -mx-4 px-4">
          <div className="overflow-x-auto scrollbar-hide w-full">
            <div className="flex gap-1.5 min-w-max py-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-3 py-1.5 text-[11px] font-medium whitespace-nowrap rounded-full transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Standard navigation */}
        <div className="hidden sm:flex items-center justify-between h-12">
          <span className="font-bold text-base text-foreground">AASURI</span>
          
          <div className="flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="w-px h-4 bg-border mx-1" />
                )}
              </div>
            ))}
          </div>

          <a
            href="#pricing"
            onClick={(e) => handleClick(e, "#pricing")}
            className="px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Enroll
          </a>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
