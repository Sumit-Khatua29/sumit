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
import ThemeToggle from './components/ThemeToggle';
import { useScrollSpy } from './hooks/useScrollSpy';

const App = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
  const activeSection = useScrollSpy(sections);

  return (
    <div className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200 selection:bg-blue-500/30 selection:text-blue-900 dark:selection:bg-cyan-500/30 dark:selection:text-cyan-200 min-h-screen transition-colors duration-300">
      <ThemeToggle />
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