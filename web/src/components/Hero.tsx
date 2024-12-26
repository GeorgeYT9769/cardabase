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
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={onDownloadClick}
                className="rounded-lg bg-primary-600 dark:bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download App
              </button>
              <button
                onClick={() => window.open('https://georgeyt9769.github.io/cardabase/webapp/index.html/', '_blank')}
                className="rounded-lg bg-secondary-700 dark:bg-secondary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-secondary-800 dark:hover:bg-secondary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600 flex items-center gap-2"
              >
                <Play className="h-5 w-5" />
                LIVE DEMO
              </button>
            </div>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
            <button
                onClick={() => window.open('https://github.com/GeorgeYT9769/cardabase-app/', '_blank')}
                className="rounded-lg bg-gray-800 dark:bg-gray-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 dark:hover:bg-gray-600 flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                Source Code
              </button>
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