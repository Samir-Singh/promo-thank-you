import { useEffect, useState } from "react";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  { id: 1, image: heroSlide1, alt: "Awfis workspace environment 1" },
  { id: 2, image: heroSlide2, alt: "Awfis workspace environment 2" },
  { id: 3, image: heroSlide3, alt: "Awfis workspace environment 3" },
];

interface BackgroundSlideshowProps {
  isMobile?: boolean;
}

export default function BackgroundSlideshow({ isMobile = false }: BackgroundSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Auto-play functionality - 6 seconds per slide for graceful transitions
    const autoPlay = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      clearInterval(autoPlay);
    };
  }, []);

  if (isMobile) {
    // Mobile version - visible images with proper aspect ratio
    return (
      <div className="relative aspect-[16/9] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Mobile slideshow indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop version - background images
  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[3000ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
          role="img"
          aria-label={slide.alt}
        />
      ))}
    </div>
  );
}