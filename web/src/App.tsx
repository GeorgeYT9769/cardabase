import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { HowItWorks } from './components/HowItWorks';
import { QA } from './components/QA';
import { Footer } from './components/Footer';
import { DownloadPopup } from './components/DownloadPopup';
import { Notes } from './components/Notes';

function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero onDownloadClick={() => setIsDownloadOpen(true)} />
        <Features />
        <Gallery />
        <HowItWorks />
        <QA />
      </main>
      <Notes />
      <Footer />
      <DownloadPopup 
        isOpen={isDownloadOpen} 
        onClose={() => setIsDownloadOpen(false)} 
      />
    </div>
  );
}

export default App;