import { useEffect, useState } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`floating-cta ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold">Color Pencil Masterclass</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-bold">₹9,990</span>
              <span className="text-muted-foreground line-through text-xs">
                ₹14,990
              </span>
              <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                Save 33%
              </span>
            </div>
          </div>
          <a
            href="#pricing"
            className="cta-button text-sm py-3 px-6"
          >
            Enroll Now - Lifetime Access
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
