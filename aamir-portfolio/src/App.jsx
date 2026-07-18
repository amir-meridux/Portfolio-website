import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowIThink from './components/HowIThink';
import Expertise from './components/Expertise';
import Methodology from './components/Methodology';
import SelectedProjects from './components/SelectedProjects';
import Research from './components/Research';
import Insights from './components/Insights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <HowIThink />
        <Expertise />
        <Methodology />
        <SelectedProjects />
        <Research />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;