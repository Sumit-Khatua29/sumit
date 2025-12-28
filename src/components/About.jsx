import React from 'react';
import { GraduationCap, MapPin, Code, Trophy, User, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-slate-200 dark:bg-slate-900 relative overflow-hidden py-20 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 mb-6 shadow-sm">
            <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-600 dark:text-slate-300 font-medium text-sm">Personal Profile</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            About <span className="text-blue-600 dark:text-blue-500">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate developer with a strong foundation in computer science and a drive for continuous learning
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Introduction */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Computer Science Graduate &<br />
                <span className="text-blue-600 dark:text-blue-500">Full Stack Developer</span>
              </h3>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  I am a results-oriented Computer Science graduate from <span className="text-blue-600 dark:text-blue-400 font-semibold">Chandigarh University</span>, distinguished by a solid command of <span className="text-blue-600 dark:text-blue-400 font-medium">Java programming</span> and <span className="text-blue-600 dark:text-blue-400 font-medium">full-stack development</span>. My background is anchored in object-oriented principles, database optimization, and the deployment of modern web technologies.
                </p>
                
                <p>
                  With a commitment to engineering scalable, high-performance applications, I bring a proactive approach to complex problem-solving. I am enthusiastic about driving value within forward-thinking development teams and advancing my expertise in an ever-evolving technological landscape.
                </p>
              </div>
            </div>

            {/* Education & Location Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors">
                    <GraduationCap size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Education</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700 dark:text-slate-200 font-medium">B.E. Computer Science</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Chandigarh University</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded border border-emerald-200 dark:border-emerald-500/20">CGPA: 7.29</span>
                    <span className="text-slate-500 text-xs">2024</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white/50 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-xl group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors">
                    <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Location</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-700 dark:text-slate-200 font-medium">Hyderabad, Telangana</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Available for Remote Work</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded border border-blue-200 dark:border-blue-500/20">Open to Relocate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:col-span-5">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-8 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              {/* Decorative gradient blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="text-center mb-10 relative z-10">
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">My Journey</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Key milestones in my development career</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { icon: Code, value: '4+', label: 'Years Learning', color: 'text-blue-600 dark:text-blue-400' },
                  { icon: Trophy, value: '3+', label: 'Projects Built', color: 'text-purple-600 dark:text-purple-400' },
                  { icon: GraduationCap, value: '5+', label: 'Certifications', color: 'text-emerald-600 dark:text-emerald-400' },
                  { icon: null, value: '100%', label: 'Dedication', color: 'text-orange-600 dark:text-orange-400', special: '💯' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group bg-slate-50 dark:bg-slate-900/30 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-1 shadow-sm">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-slate-800 rounded-xl mb-3 group-hover:scale-110 transition-transform shadow-md">
                      {stat.icon ? (
                        <stat.icon size={20} className={stat.color} />
                      ) : (
                        <span className="text-xl">{stat.special}</span>
                      )}
                    </div>
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs font-medium uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-10 pt-8 border-t border-slate-800 text-center relative z-10">
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Ready to collaborate?</p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  Let's Connect
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;