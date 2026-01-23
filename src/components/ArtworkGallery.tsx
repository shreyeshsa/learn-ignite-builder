import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import artwork1 from "@/assets/artwork-sample-1.jpg";
import artwork2 from "@/assets/artwork-sample-2.jpg";
import artwork3 from "@/assets/artwork-sample-3.jpg";

const artworks = [
  { id: 1, image: artwork1, title: "Divine Portrait", artist: "Student Work" },
  { id: 2, image: artwork2, title: "Realistic Portrait", artist: "Student Work" },
  { id: 3, image: artwork3, title: "Floral Beauty", artist: "Student Work" },
];

const ArtworkGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  return (
    <section className="section-dark" id="gallery">
      <div className="container">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <span className="level-badge">Student Gallery</span>
          <h2 className="section-title px-4">
            Create Beautiful{" "}
            <span className="text-primary">Masterpieces</span> Like This
          </h2>
          <p className="section-subtitle px-4">
            See what our students have created using the techniques taught in this course
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          >
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <div className="artwork-card">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-3">
                  <h3 className="font-semibold">{artwork.title}</h3>
                  <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Scroll indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {artworks.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Carousel with arrows */}
        <div className="hidden sm:block relative max-w-4xl mx-auto">
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex-shrink-0"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="flex-1 overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {artworks.map((artwork) => (
                  <div key={artwork.id} className="w-full flex-shrink-0">
                    <div className="artwork-card">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="font-semibold text-lg">{artwork.title}</h3>
                      <p className="text-sm text-muted-foreground">{artwork.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex-shrink-0"
              aria-label="Next artwork"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {artworks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to artwork ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkGallery;
