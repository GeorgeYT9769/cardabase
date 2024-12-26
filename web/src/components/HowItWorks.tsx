import React from 'react';

export function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Three simple steps to get started
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Download the app</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Download APK file from GitHub or F-Droid and install it.
              </p>
            </div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add your cards</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Add cards by pressing on the '+' button, type name, type or scan ID, pick a color and you are done.
              </p>
            </div>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Start using</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Access all your cards instantly whenever you need them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}