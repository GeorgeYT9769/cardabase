import React from 'react';

export function Notes() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
        Notes:
        <br />
        * Tested on Xiaomi 14T 12/512 GB on version 1.1.2, release build of the app, ARM 64-bit v8a ABI, with one card, dark mode activated. Total size taken by the app was 27.10 MB. Your results may differ (based on the amount of the cards, version and build type of the app.)
      </p>
    </footer>
  );
}