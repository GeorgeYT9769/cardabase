import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { HowItWorks } from './components/HowItWorks';
import { QA } from './components/QA';
import { Footer } from './components/Footer';
import { BugReporter } from './components/BugReporter';

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <HowItWorks />
        <QA />
      </main>
      <BugReporter />
      <Footer />
    </div>
  );
}

export default App;