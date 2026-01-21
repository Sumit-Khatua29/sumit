import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, ArrowRight, Code, Sparkles } from 'lucide-react';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-200 dark:bg-slate-950 pt-32 pb-16 transition-colors duration-300">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
        {/* Left Column - Text Content */}
        <div className="text-left animate-fade-in-up order-2 lg:order-1 pt-10 lg:pt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 mb-8 backdrop-blur-sm animate-fade-in-down shadow-sm hover:scale-105 transition-transform cursor-default w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">Available for Hire</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-slate-900 dark:text-white block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Sumit Khatua
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-light flex items-center gap-3 flex-wrap">
            <span>I am</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400 min-w-[280px]">
              <span className="font-semibold text-blue-600 dark:text-blue-400">{text}</span>
              <span className="animate-pulse text-blue-400 ml-1">|</span>
            </span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl leading-relaxed mb-10">
            Transforming complex problems into elegant, efficient, and scalable web solutions. 
            Passionate about coding, innovation, and continuous learning.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </button>
            <a 
              href="/SUMIT_Resume_NEW.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full font-semibold hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center gap-2 hover:text-blue-600 dark:hover:text-white"
            >
              <Download size={20} /> Resume
            </a>
          </div>
        </div>

        {/* Right Column - Photo */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in-up delay-200 order-1 lg:order-2">
            {/* Value Props Floating Cards */}
            <div className="absolute -top-6 -left-6 md:top-10 md:left-0 lg:-left-10 z-20 animate-float" style={{ animationDelay: '0s' }}>
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-xl flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-default scale-90 md:scale-100 origin-bottom-right">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <Code className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium">Clean Code</p>
                        <p className="text-xs md:text-sm font-bold text-slate-800 dark:text-white">Architecture</p>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:right-0 lg:-right-4 z-20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-xl flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-default scale-90 md:scale-100 origin-top-left">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium">Modern UI</p>
                        <p className="text-xs md:text-sm font-bold text-slate-800 dark:text-white">Experience</p>
                    </div>
                </div>
            </div>

            {/* Main Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                {/* Glowing Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-[60px] animate-pulse"></div>
                
                {/* Image Wrapper with Glass Border */}
                <div className="relative w-full h-full rounded-full border-4 border-white/20 dark:border-white/10 backdrop-blur-sm p-3 animate-float">
                    <div className="w-full h-full rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl relative">
                         <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10"></div>
                        <img 
                            src="/Professional image.png" 
                            alt="Sumit Khatua" 
                            className="w-full h-full object-cover object-[center_15%] transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Social Links - Absolute in Hero */}
      <div className="hidden lg:flex absolute left-8 bottom-8 flex-col gap-6 z-20 after:content-[''] after:w-[1px] after:h-24 after:bg-slate-700 after:mx-auto after:mt-6">
        <a href="https://github.com/Sumit-Khatua29" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/sumit-khatua-b46959216/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"><Linkedin size={20} /></a>
        <a href="mailto:sumitrkl2002@gmail.com" className="text-slate-400 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300"><Mail size={20} /></a>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-4 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
        >
          <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">Scroll Down</span>
          <ChevronDown size={32} className="animate-bounce-slow" />
        </button>
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