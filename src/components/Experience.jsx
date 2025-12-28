import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
  const experiences = [
    {
      title: 'PGDAC Trainee',
      company: 'C-DAC Hyderabad',
      location: 'Hyderabad, Telangana',
      date: 'Aug 2025 - Feb 2026',
      type: 'Trainee',
      desc: 'Intensive Post Graduate Diploma in Advanced Computing focusing on full-stack development, software engineering, and enterprise technologies.',
      skills: ['Java', 'Spring Boot', 'React', 'Database Design', 'Software Engineering'],
      icon: 'cdac'
    },
    {
      title: 'Web Development Intern',
      company: 'Internshala Trainings',
      location: 'Remote',
      date: 'Jun 2023 - Aug 2023', // Estimated dates, user didn't specify
      type: 'Internship',
      desc: 'Completed an intensive web development training program, gaining hands-on experience in building responsive websites and web applications using HTML, CSS, JavaScript, and PHP.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design'],
      icon: 'internshala'
    }
  ];

  const getIcon = (type) => {
    return <Briefcase className="w-6 h-6 text-slate-600 dark:text-white" />;
  };

  return (
    <section id="experience" className="min-h-screen bg-slate-200 dark:bg-slate-900 py-24 px-4 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 mb-6">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-slate-600 dark:text-slate-300 font-medium text-sm">Professional Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Work <span className="text-blue-600 dark:text-blue-500">Experience</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional experience and internships
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-[40px] top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative md:pl-20 transition-all duration-500"
              >
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-0 top-0 w-20 h-full justify-center items-start pt-2">
                  <div className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-950 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-500 z-10 shadow-xl shadow-slate-200/50 dark:shadow-slate-950"></div>
                </div>

                <SpotlightCard className="p-8 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300">
                  
                  {/* Content Layout */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon Box */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 text-slate-500 dark:text-white">
                        {getIcon(exp.icon)}
                      </div>
                    </div>

                    <div className="flex-grow">
                      {/* Header Info */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="mt-2 lg:mt-0 flex items-center gap-3">
                           <span className="px-3 py-1 bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-semibold border border-blue-600/10 dark:border-blue-500/20">
                              {exp.date}
                           </span>
                        </div>
                      </div>

                      {/* Details Row */}
                      <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 text-sm mb-6">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="w-1 h-1 bg-slate-400 dark:bg-slate-700 rounded-full"></div>
                        <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.type}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 border-l-2 border-slate-200 dark:border-slate-800 pl-4 italic">
                        "{exp.desc}"
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-medium border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;