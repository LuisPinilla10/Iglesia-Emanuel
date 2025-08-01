import React, { useState, useEffect } from 'react';
import heroImages from '../mock/heroImages';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        {heroImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            ></div>
            
            <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 text-center">
              <div className={`transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-medium text-lg transition">
                    Conoce más
                  </button>
                  <button className="bg-white hover:bg-gray-100 text-amber-900 px-6 py-3 rounded-lg font-medium text-lg transition">
                    Próximos eventos
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

// DONE