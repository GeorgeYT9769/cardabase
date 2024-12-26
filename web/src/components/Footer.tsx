import React from 'react';
import { CreditCard } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center space-x-2">
            <CreditCard className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Cardabase. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}