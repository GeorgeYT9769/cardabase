import React from 'react';
import { Smartphone, Github, Play, Download } from 'lucide-react';

type HeroProps = {
  onDownloadClick: () => void;
};

export function Hero({ onDownloadClick }: HeroProps) {
  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-400 to-primary-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              All Your Shop Cards in{' '}
              <span className="text-primary-600 dark:text-primary-400">One Place</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Cardabase is your digital wallet for loyalty cards. Save all your shop cards in one secure place and access them instantly.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <button
                onClick={onDownloadClick}
                className="w-64 rounded-lg bg-primary-600 dark:bg-primary-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary-700 dark:hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 flex items-center justify-center gap-2"
              >
                <Download className="h-6 w-6" />
                Download App
              </button>
              <a
                href="https://github.com/GeorgeYT9769/cardabase-app"
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 flex items-center gap-2"
                target='_blank'
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-400 to-primary-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}