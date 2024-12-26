import React, { useState, useCallback, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    url: 'https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/main/fastlane/metadata/android/en-US/images/phoneScreenshots/1.png',
    alt: 'Cardabase Home Screen Light Mode'
  },
  {
    url: 'https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/main/fastlane/metadata/android/en-US/images/phoneScreenshots/2.png',
    alt: 'Card Details Screen Light Mode'
  },
  {
    url: 'https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/main/fastlane/metadata/android/en-US/images/phoneScreenshots/3.png',
    alt: 'Add New Card Screen Light Mode'
  },
  {
    url: 'https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/main/fastlane/metadata/android/en-US/images/phoneScreenshots/4.png',
    alt: 'Settings Screen Light Mode'
  },
  {
    url: 'https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/main/fastlane/metadata/android/en-US/images/phoneScreenshots/5.png',
    alt: 'Cardabase Home Screen Dark Mode'
  },
  {
    url: 'https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/main/fastlane/metadata/android/en-US/images/phoneScreenshots/6.png',
    alt: 'Card Details Screen Dark Mode'
  },
  {
    url: 'https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/main/fastlane/metadata/android/en-US/images/phoneScreenshots/7.png',
    alt: 'Add New Card Screen Dark Mode'
  },
  {
    url: 'https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/main/fastlane/metadata/android/en-US/images/phoneScreenshots/8.png',
    alt: 'Settings Screen Dark Mode'
  }
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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
            className="aspect-[9/16] w-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={screenshots[currentIndex].url}
              alt={screenshots[currentIndex].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            <button
              onClick={goToPrevious}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
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
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600 dark:bg-primary-400' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}