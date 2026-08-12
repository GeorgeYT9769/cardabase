import React from 'react';

export function Support() {
  return (
    <div id="support" className="bg-white dark:bg-gray-900 py-24 sm:py-32 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Support</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Support the App
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Cardabase is and always will be completely free and open-source. Just using the app is a big "Thank you"! But if you enjoy using the app and want to support its development, you can make a donation using the links below.
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            Please note: Donations are purely voluntary. You will not receive any special features, perks, or goods in return for your donation.
          </p>
          <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            Thank you for your support! 
          </p>
        </div>
        
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
          <a href="https://buymeacoffee.com/georgeyt9769" target="_blank" rel="noreferrer" className="hover:opacity-90 transition-opacity">
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
              alt="Buy Me a Coffee" 
              className="h-[50px] w-auto"
            />
          </a>
          <a href="https://ko-fi.com/georgeyt9769" target="_blank" rel="noreferrer" className="hover:opacity-90 transition-opacity">
            <img 
              src="https://storage.ko-fi.com/cdn/kofi2.png?v=3" 
              alt="Support me on Ko-fi" 
              className="h-[50px] w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
