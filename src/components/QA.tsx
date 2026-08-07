import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is Cardabase?",
    answer: "Cardabase is a mobile app that allows users to easily manage and use their loyalty cards."
  },
  {
    question: "Is Cardabase free?",
    answer: "Yes, Cardabase is completely free to use! You can download Cardabase from the GitHub or F-Droid and start using it right away without any hidden costs. FREE FOREVER."
  },
  {
    question: "How does Cardabase work?",
    answer: "Cardabase uses informations as cards' name and ID, saves and then emulates them."
  },
  {
    question: "Can I import my existing cards into Cardabase?",
    answer: "Yes, Cardabase provides an option to import cards by using your phone's camera to scan the barcode or by manually entering the card details. Import or export your cards from already backed up Cardabase files."
  },
  {
    question: "Is Cardabase available for both iOS and Android?",
    answer: "Not yet, Cardabase is only available to Android users via sideloading."
  },
  {
    question: "How do I add a new card?",
    answer: "Adding a new card is simple! Just tap the '+' button and either scan the barcode using your device's camera or manually enter the card details."
  },
  {
    question: "Is my data safe and secure with Cardabase?",
    answer: "Absolutely! Cardabase takes data security seriously. All your cards are encrypted and stored securely on your device (offline using AES-256 encryption). You can also add local password to protect your cards even more."
  },
  {
    question: "Do you track or collect my data?",
    answer: "No tracking, no data collection, and no internet connection is required to manage your cards. The app is 100% offline and private."
  },
  {
    question: "Where can I download Cardabase?",
    answer: "You can download the latest official release directly from our GitHub Releases page or from F-Droid."
  },
  {
    question: "What permissions does the app need?",
    answer: "It primarily needs Storage access to save your data locally, and Camera access to scan physical barcodes. Other permissions like internet (for fetching changelogs) and biometric (for passwords) are completely optional."
  },
  {
    question: "Can I build the app myself?",
    answer: "Yes! It is open-source. You can clone the repository from GitHub and build it yourself using Flutter."
  }
];

function QAItem({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white"
        >
          <span className="text-lg font-semibold leading-7">{faq.question}</span>
          <span className="ml-6 flex h-7 items-center">
            <ChevronDown
              className={`h-6 w-6 transform transition-transform duration-200 text-gray-400 dark:text-gray-500 ${
                isOpen ? '-rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </span>
        </button>
      </dt>
      <div 
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <dd className="overflow-hidden">
          <div className="text-base leading-7 text-gray-600 dark:text-gray-300 pr-12">
            {faq.answer}
          </div>
        </dd>
      </div>
    </div>
  );
}

export function QA() {
  return (
    <div id="faq" className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Questions & Answers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Find answers to commonly asked questions about Cardabase
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <QAItem key={index} faq={faq} />
            ))}
          </dl>
          <div className="mt-8 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            <p>Notes:</p>
            <p className="mt-1">
              * Tested on Xiaomi 14T 12/512 GB on version 1.8.2, release build of the app, ARM 64-bit v8a ABI, with 12 cards, dark mode activated. Total size taken by the app was 24.55 MB. Your results may differ (based on the amount of the cards, version and build type of the app.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}