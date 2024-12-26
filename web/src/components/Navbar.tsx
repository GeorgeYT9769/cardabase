import React from 'react';
import { CreditCard } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Cardabase</span>
          </div>
          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <a href="https://f-droid.org/packages/com.georgeyt9769.cardabase/" target='_blank'>
                <img src="https://fdroid.gitlab.io/artwork/badge/get-it-on.png" alt="Get it on F-Droid" width="150"></img>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}