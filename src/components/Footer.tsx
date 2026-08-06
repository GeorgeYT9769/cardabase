import React from 'react';
import appIcon from '../icons/icon.png';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center space-x-2">
            <img src={appIcon} alt="Cardabase" className="w-8 h-8" />
            <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Cardabase. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-8 md:order-2 md:mt-0 flex justify-center md:justify-end">
          <a
            href="https://raw.githubusercontent.com/GeorgeYT9769/cardabase-app/refs/heads/main/TermsOfService.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs leading-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}