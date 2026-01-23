import { useState, useEffect } from "react";

const navLinks = [
  { label: "Why Aasuri", href: "#why-choose" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Curriculum", href: "#curriculum" },
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
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-background/98 backdrop-blur-xl border-b border-border shadow-md">
      <div className="container">
        {/* Mobile: Centered horizontal pills */}
        <div className="md:hidden h-14 flex items-center justify-center">
          <div className="flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-3 py-2 text-xs font-medium whitespace-nowrap rounded-full transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-border mx-0.5" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Logo left, nav center, CTA right */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
              A
            </div>
            <span className="font-bold text-lg tracking-tight">AASURI</span>
          </a>
          
          {/* Centered Navigation */}
          <div className="flex items-center gap-1 bg-muted/50 rounded-full px-2 py-1">
            {navLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary text-primary-foreground shadow-sm"
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

          {/* CTA Button */}
          <a
            href="#pricing"
            onClick={(e) => handleClick(e, "#pricing")}
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;
