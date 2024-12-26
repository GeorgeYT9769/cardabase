import React from 'react';
import {Smartphone, Lock, Shield, CreditCard, Palette, QrCode, WifiOff, HardDrive} from 'lucide-react';

const features = [
  {
    name: 'Easy to use Interface',
    description: 'Intuitive and user-friendly interface for seamless navigation.',
    icon: Smartphone,
  },
  {
    name: 'Secure Storage',
    description: 'Your data is encrypted and stored securely using AES-256 encryption.',
    icon: Shield,
  },
  {
    name: 'Password-protected cards',
    description: 'Soon you will be able to secure your cards and the app with a password.',
    icon: Lock,
  },
  {
    name: 'Completely FREE',
    description: 'No fees. No hidden fees. Fully open-source.',
    icon: CreditCard,
  },
  {
    name: 'Beautiful themes',
    description: 'Both Light and Dark themes are beautiful and Material 3 inspired.',
    icon: Palette,
  },
  {
    name: 'High card compatibility',
    description: 'Right now only EAN-13 cards are supported, other types are on the way!',
    icon: QrCode,
  },
  {
    name: 'Completly offline',
    description: 'No need to be online. Everything is saved on your device.',
    icon: WifiOff,
  },
  {
    name: 'Storage efficient',
    description: 'The whole app takes less than 30MB of internal storage*.',
    icon: HardDrive,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-white dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The minimum that Cardabase offers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Cardabase comes packed with all these amazing features you need to digitize and organize your loyalty cards effectively
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600/10 dark:bg-primary-400/10">
                  <feature.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}