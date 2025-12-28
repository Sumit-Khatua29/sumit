import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

const App = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
  const activeSection = useScrollSpy(sections);

  return (
    <div className="bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;