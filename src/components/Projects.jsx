import React from 'react';
import { ExternalLink, Calendar, Code, Zap, ArrowUpRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Projects = () => {

  const projects = [
    {
      title: 'YouTube Video Downloader',
      description: 'A modern full-stack web application for downloading YouTube videos with ease. Features a high-performance FastAPI backend using yt-dlp for reliable downloads and a responsive React frontend styled with Bootstrap.',
      tech: ['React', 'FastAPI', 'Python', 'Bootstrap', 'yt-dlp'],
      features: [
        'Full-stack Web Architecture',
        'High-speed downloads via FastAPI',
        'Responsive UI with Bootstrap',
        'Support for multiple formats'
      ],
      date: 'Dec 2024',
      link: '#',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Civic Issue Reporting Portal',
      description: 'A comprehensive full-stack platform enabling citizens to report civic issues with geolocation and image evidence. Streamlines the resolution process through a dedicated admin dashboard for authorities.',
      tech: ['React', 'Spring Boot', 'MySQL', 'Google Maps API'],
      features: [
        'Geolocation-based issue reporting',
        'Role-based access (Citizen/Admin)',
        'Secure JWT Authentication',
        'Real-time status tracking'
      ],
      date: 'Aug 2024',
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-900 py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6 shadow-xl shadow-blue-500/10">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 font-medium text-sm tracking-wide">Featured Projects</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight font-display">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Work</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Showcasing innovative solutions and technical expertise across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <SpotlightCard key={index} className="hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500">
              <div className="p-8 md:p-10 h-full flex flex-col">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-100 transition-opacity duration-500`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform group-hover:rotate-45"
                    aria-label={`View ${project.title} project`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-8 flex-grow">
                  <h4 className="flex items-center gap-2 font-semibold text-slate-200 mb-4 text-sm uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-slate-400 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tech & Date */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-medium border border-white/5 hover:bg-slate-700/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-slate-900 border border-white/10 p-2 pr-6 rounded-full hover:border-white/20 transition-all duration-300 group cursor-pointer shadow-lg">
            <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">New</span>
            <span className="text-slate-300 font-medium group-hover:text-white transition-colors">Interested in more? Check my GitHub</span>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;