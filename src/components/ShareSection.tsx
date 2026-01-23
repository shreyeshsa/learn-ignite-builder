import { Share2, Heart, Facebook, Twitter, Link2, MessageCircle } from "lucide-react";
import { useState } from "react";

const ShareSection = () => {
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = "Realism Redefined - A lifelong artistic journey. Check out this amazing art course!";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://wa.me/?text=${encodeURIComponent(shareText + " " + pageUrl)}`,
      color: "bg-[#25D366] hover:bg-[#22c55e]",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
      color: "bg-[#1877F2] hover:bg-[#166fe5]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
      color: "bg-[#1DA1F2] hover:bg-[#1a94da]",
    },
  ];

  return (
    <section className="section-light" id="share">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heart Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="currentColor" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Share This <span className="text-primary">Journey</span>
          </h2>

          {/* Copy */}
          <div className="space-y-2 text-muted-foreground text-sm sm:text-base mb-6">
            <p>Know someone who loves art?</p>
            <p className="font-medium text-foreground">
              A friend. A family member. A child who loves drawing.
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-6">
            <p className="text-sm sm:text-base text-muted-foreground mb-2">
              Realism Redefined is a lifelong artistic path — not just a course.
            </p>
            <p className="text-sm text-muted-foreground">
              If this page resonated with you,<br />
              share it with someone who might need it today.
            </p>
          </div>

          {/* Share Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 ${link.color} text-white font-medium rounded-full transition-colors text-sm`}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </a>
            ))}
          </div>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-full transition-colors text-sm"
          >
            <Link2 className="w-4 h-4" />
            {copied ? "Link Copied!" : "Copy Link"}
          </button>

          {/* Share Icon */}
          <div className="flex justify-center mt-6">
            <Share2 className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
