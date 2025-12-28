import React from 'react';
import { Award, Calendar, Building, CheckCircle, ExternalLink, Shield } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'PGDAC (Post Graduate Diploma in Advanced Computing)',
      provider: 'C-DAC Hyderabad',
      year: '2025-2026',
      description: 'Intensive training in advanced computing technologies including full-stack development and enterprise software engineering.',
      skills: ['Java', 'Spring Boot', 'React', 'Database Technologies'],
      credentialId: 'In Progress',
      status: 'In Progress',
      link: '#'
    },
    {
      title: 'Mastering Java + Spring Boot: REST APIs and Microservices',
      provider: 'Udemy',
      year: 'Dec 2025',
      description: 'Comprehensive course covering Java, Spring Boot, REST APIs, and Microservices architecture with hands-on projects.',
      skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'],
      credentialId: 'UC-ef0ab68c-baff-4ae0-8736-83a9d129f770',
      status: 'Completed',
      link: 'https://www.udemy.com/certificate/UC-ef0ab68c-baff-4ae0-8736-83a9d129f770/'
    },
    {
      title: 'Web Development Training',
      provider: 'Internshala Trainings',
      year: 'Aug 2022',
      description: '8-week intensive training covering HTML, CSS, Bootstrap, DBMS, PHP, JS, and React. Scored 79% in final assessment.',
      skills: ['HTML/CSS', 'React', 'PHP', 'DBMS', 'Bootstrap'],
      credentialId: 'D0FF0731-E4C3-C50C-74BE-6D53CF901E07',
      status: 'Completed',
      link: 'https://trainings.internshala.com/verify_certificate'
    },
    {
      title: 'Python for Everybody',
      provider: 'Coursera',
      year: 'Completed',
      description: 'Comprehensive python programming course covering data structures, databases, and visualization.',
      skills: ['Python', 'Data Structures', 'Databases'],
      credentialId: 'Verified',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Software Testing',
      provider: 'NPTEL',
      year: 'Completed',
      description: 'In-depth study of software testing methodologies and best practices.',
      skills: ['Manual Testing', 'Automation', 'QA Processes'],
      credentialId: 'Verified',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Data Visualization using Tableau',
      provider: 'Great Learning',
      year: 'Completed',
      description: 'Mastering data visualization techniques and dashboard creation using Tableau.',
      skills: ['Tableau', 'Data Viz', 'Dashboards'],
      credentialId: 'Verified',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'IBM Data Analytics with Excel and R',
      provider: 'Coursera',
      year: 'Completed',
      description: 'Professional certificate focusing on data analysis using Excel and R programming.',
      skills: ['Excel', 'R', 'Data Analysis'],
      credentialId: 'Verified',
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      provider: 'Google',
      year: 'Completed',
      description: 'Rigorous training in data analytics, covering the complete data lifecycle.',
      skills: ['Data Cleaning', 'Analysis', 'Visualization'],
      credentialId: 'Verified',
      status: 'Completed',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="min-h-screen bg-slate-950 py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800 mb-6">
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 font-medium text-sm">Achievements</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Certifications & <span className="text-blue-500">Awards</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Continuous learning and professional development across multiple domains
          </p>
        </div>
        
        {/* Certifications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 overflow-hidden"
            >
              {/* Status Bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${cert.status === 'Completed' ? 'from-emerald-500 to-green-400' : 'from-yellow-500 to-orange-400'}`}></div>
              
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-5">
                    <div className="bg-slate-800/80 p-3.5 rounded-xl group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors duration-300">
                      <Shield className="w-7 h-7 text-slate-300 group-hover:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 font-semibold text-lg flex items-center gap-2">
                        {cert.provider}
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                        <span className={`text-sm px-2 py-0.5 rounded-full border ${
                          cert.status === 'Completed' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                            : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                        }`}>
                          {cert.status}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href={cert.link}
                    className="flex-shrink-0 flex items-center justify-center p-2.5 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                {/* Description */}
                <p className="text-slate-400 text-lg leading-relaxed mb-8 border-b border-slate-800/50 pb-6">
                  {cert.description}
                </p>

                {/* Skills Covered */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500/50" />
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50 group-hover:border-slate-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Meta Information / Footer */}
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Certifications', value: '8', color: 'text-blue-400' },
            { label: 'Completed', value: '7', color: 'text-emerald-400' },
            { label: 'Skills Gained', value: '20+', color: 'text-purple-400' },
            { label: 'Latest Year', value: '2026', color: 'text-orange-400' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-800 hover:border-slate-700 transition-colors">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;