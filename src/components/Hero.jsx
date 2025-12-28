import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showContent, setShowContent] = useState(false);

  const roles = ['Java Developer', 'Full Stack Java Developer', 'Java Expert'];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-32 pb-16">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Main Content */}
        <div className={`transition-all duration-1000 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700/50 mb-6 backdrop-blur-sm animate-fade-in-down">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-slate-300 font-medium">Available for Hire</span>
          </div>

          {/* Greeting & Name */}
          <div className="mb-4 space-y-2">
            <p className="text-blue-400 text-lg md:text-xl font-medium tracking-wide animate-fade-in">Currently building things for the web</p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none">
              Sumit
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent ml-4">
                Khatua
              </span>
            </h1>
          </div>

          {/* Typing Animation */}
          <div className="mb-8 h-12 flex items-center justify-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-300">
              I am a <span className="font-semibold text-blue-400">{text}</span>
              <span className="animate-pulse text-blue-400 ml-1">|</span>
            </div>
          </div>

          {/* Description */}
          <div className={`mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-slate-400 leading-relaxed">
              Passionate about crafting efficient, scalable solutions with modern technologies. 
              Turning complex problems into elegant, user-centric experiences.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 transform ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <a
              href="/SUMIT RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 bg-slate-900/50 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
            >
              <Download className="w-4 h-4" />
              <span>View Resume</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="mt-16 cursor-pointer group transition-all duration-1000 delay-700"
          onClick={() => scrollToSection('about')}
        >
          <div className="flex flex-col items-center animate-bounce-slow">
            <span className="text-sm text-slate-500 mb-2 font-medium tracking-wide group-hover:text-blue-400 transition-colors duration-300">Scroll Down</span>
            <ChevronDown size={24} className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Social Links - Absolute in Hero */}
      <div className="hidden lg:flex absolute left-8 bottom-8 flex-col gap-6 z-20 after:content-[''] after:w-[1px] after:h-24 after:bg-slate-700 after:mx-auto after:mt-6">
        <a href="https://github.com/Sumit-Khatua29" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/sumit-khatua-b46959216/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"><Linkedin size={20} /></a>
        <a href="mailto:sumitrkl2002@gmail.com" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"><Mail size={20} /></a>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;