import React from 'react';

const faqs = [
  {
    question: "What is Cardabase?",
    answer: "Cardabase is a mobile app that allows users to easily manage and use their loyalty cards."
  },
  {
    question: "Is Cardabase free?",
    answer: "Yes, Cardabase is completely free to use! You can download Cardabase from the GitHub or F-Droid and start using it right away without any hidden costs."
  },
  {
    question: "How does Cardabase work?",
    answer: "Cardabase uses informations as cards' name and ID, saves and then emulates them."
  },
  {
    question: "Can I import my existing cards into Cardabase?",
    answer: "Yes, Cardabase provides an option to import cards by using your phone's camera or manually entering EAN-13 numbers. Soon you will be able to export all the cards in one file and import it to a new device."
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
    answer: "Absolutely! Cardabase takes data security seriously. All your cards are encrypted and stored securely on your device (offline using AES-256 encryption)."
  }
];

export function QA() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
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
          <dl className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}