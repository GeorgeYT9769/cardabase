import React, { useState, useCallback, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const screenshots = [
  {
    url: 'src\\screenshots\\1.webp',
    alt: 'Cardabase Home Screen Light Mode'
  },
  {
    url: 'src\\screenshots\\2.webp',
    alt: 'Card Details Screen Light Mode'
  },
  {
    url: 'src\\screenshots\\3.webp',
    alt: 'Add New Card Screen Light Mode'
  },
  {
    url: 'src\\screenshots\\4.webp',
    alt: 'Settings Screen Light Mode'
  },
  {
    url: 'src\\screenshots\\5.webp',
    alt: 'Cardabase Home Screen Dark Mode'
  },
  {
    url: 'src\\screenshots\\6.webp',
    alt: 'Card Details Screen Dark Mode'
  },
  {
    url: 'src\\screenshots\\7.webp',
    alt: 'Add New Card Screen Dark Mode'
  },
  {
    url: 'src\\screenshots\\8.webp',
    alt: 'Settings Screen Dark Mode'
  }
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Gallery</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            See Cardabase in action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Take a look at the beautiful interface and features that make Cardabase the perfect solution for managing your loyalty cards
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-sm sm:mt-20 relative">
          <div 
            className="relative aspect-[9/16] w-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden cursor-pointer group"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => setIsPreviewOpen(true)}
          >
            <img
              key={currentIndex}
              src={screenshots[currentIndex].url}
              alt={screenshots[currentIndex].alt}
              className="h-full w-full object-contain object-center p-2 animate-fade-in"
            />
            <div className="absolute top-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 md:opacity-100">
              <Maximize2 className="w-5 h-5" />
            </div>
          </div>
          
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
            <button
              onClick={goToPrevious}
              className="pointer-events-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="pointer-events-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-primary-600 dark:bg-primary-400' : 'w-2 bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Overlay */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full transition-colors z-50"
            aria-label="Close preview"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 text-white/70 hover:text-white p-2 rounded-full transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div 
            className="w-full h-full p-4 md:p-12 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => setIsPreviewOpen(false)}
          >
            <img
              key={`preview-${currentIndex}`}
              src={screenshots[currentIndex].url}
              alt={screenshots[currentIndex].alt}
              className="max-h-full max-w-full object-contain cursor-default animate-zoom-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 text-white/70 hover:text-white p-2 rounded-full transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  );
}