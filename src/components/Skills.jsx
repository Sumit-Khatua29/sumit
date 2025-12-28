import React, { useState } from 'react';
import { Code, Database, Globe, Award, Server, Zap } from 'lucide-react';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Java (Core & Advanced)', level: 90 },
        { name: 'JavaScript ES6+', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'C', level: 75 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Java Technologies',
      icon: <Server className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Spring Boot', level: 85 },
        { name: 'Servlets & JSP', level: 80 },
        { name: 'JDBC', level: 85 },
        { name: 'Collections Framework', level: 90 },
        { name: 'Multithreading', level: 75 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="w-8 h-8" />,
      gradient: 'from-green-500 to-teal-500',
      skills: [
        { name: 'React', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Bootstrap5', level: 90 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'Tools & Databases',
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'VSCode', level: 80 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'Maven', level: 80 },
        { name: 'IntelliJ IDEA', level: 90 }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section id="skills" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Zap className="text-blue-400 w-6 h-6" />
            <span className="text-blue-400 font-medium text-lg">Technical Expertise</span>
            <Zap className="text-blue-400 w-6 h-6" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Skills & <span className="text-blue-400">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and programming languages that I use to build robust, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                hoveredCard === index ? 'shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 200}ms both`
              }}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
              <div className="relative bg-gray-800/90 rounded-3xl p-8 -m-2">
                
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                      <div className="text-white group-hover:animate-pulse">
                        {category.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List with Progress Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 delay-${skillIndex * 100} ${getSkillColor(skill.level)}`}
                          style={{
                            width: hoveredCard === index ? `${skill.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skill Level Legend (only show on hover) */}
                <div className={`mt-6 pt-6 border-t border-gray-700/50 transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <div className="flex justify-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400">Expert</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-400">Advanced</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-400">Intermediate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-6">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              View My Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;