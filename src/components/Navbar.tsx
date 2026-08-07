import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import appIcon from '../icons/icon.png';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={appIcon} alt="Cardabase" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Cardabase</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">Features</a>
            <a href="#gallery" className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">Gallery</a>
            <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">FAQ</a>
            <a href="#bug-reporter" className="text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors">Report a Bug</a>
          </div>
          <div className="flex items-center space-x-6">
            <ThemeToggle />
            {/* <a href="https://f-droid.org/packages/com.georgeyt9769.cardabase/" target='_blank'>
                <img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get it on F-Droid" width="150"></img>
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}