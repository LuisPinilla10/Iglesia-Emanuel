import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import SermonsSection from './components/SermonsSection';
import ScheduleSection from './components/ScheduleSection';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';

import VersiculoSection from './components/VersiculoSection';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'versiculo':
        return <VersiculoSection />
      case 'about':
        return <AboutSection />;
      case 'events':
        return <EventsSection />;
      case 'sermons':
        return <SermonsSection />;
      case 'contact':
        return <ContactSection />;
      
      default:
        return (
          <>
            <HeroSection />
            <VersiculoSection />
            <AboutSection />
            <EventsSection />
            <ScheduleSection />
            <ContactSection />
            
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;