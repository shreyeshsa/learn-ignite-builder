import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  return (
    <section className="section-dark" id="gallery">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Create Beautiful <span className="text-primary">Masterpieces</span> Like This
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our students have created using the techniques taught in this course
          </p>
        </div>

        {/* Gallery */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {artworks.map((artwork) => (
                  <div key={artwork.id} className="w-full flex-shrink-0 px-4">
                    <div className="artwork-card">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full aspect-square object-cover"
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
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {artworks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkGallery;
