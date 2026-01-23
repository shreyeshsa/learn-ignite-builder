const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 bg-card border-t border-border mb-16 sm:mb-0">
      <div className="container">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground text-sm">
              A
            </div>
            <span className="font-semibold">AASURI</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a href="#benefits" className="hover:text-foreground transition-colors">
              Benefits
            </a>
            <a href="#curriculum" className="hover:text-foreground transition-colors">
              Curriculum
            </a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            Copyright © {currentYear} aasuri.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
