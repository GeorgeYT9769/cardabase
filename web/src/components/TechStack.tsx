import React from 'react';
import { Database, Lock, Server, Smartphone } from 'lucide-react';

const technologies = [
  {
    name: 'Flutter & Dart',
    description: 'Built with Flutter framework for a native cross-platform experience on both iOS and Android',
    icon: Smartphone,
  },
  {
    name: 'Firebase Backend',
    description: 'Powered by Firebase for reliable authentication, real-time database, and cloud storage',
    icon: Server,
  },
  {
    name: 'Secure Storage',
    description: 'Local secure storage using Flutter Secure Storage for sensitive data protection',
    icon: Lock,
  },
  {
    name: 'SQLite Database',
    description: 'Local SQLite database for efficient offline data management and synchronization',
    icon: Database,
  },
];

export function TechStack() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built with modern technology
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cardabase is built using industry-standard technologies to ensure security, reliability, and performance
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600/10">
                  <tech.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {tech.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {tech.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}