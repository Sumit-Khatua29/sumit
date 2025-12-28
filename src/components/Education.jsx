import { Award, GraduationCap, Calendar, MapPin, BookOpen, ArrowRight } from 'lucide-react';

const Education = () => {
  const education = [
    {
      title: 'Bachelor of Engineering',
      institution: 'Chandigarh University',
      location: 'Mohali, Punjab',
      date: '2020 - 2024',
      grade: 'CGPA: 7.29',
      desc: 'Specialized in Computer Science utilizing Python, R, and SQL for data analysis and visualization.',
      skills: ['Python', 'R', 'SQL', 'Data Analytics'],
      icon: 'college'
    },
    {
      title: 'Intermediate (ISC)',
      institution: "St. Paul’s School",
      location: 'Rourkela',
      date: '2019 - 2020',
      grade: 'Percentage: 74.8%',
      desc: 'Completed Higher Secondary Education with a focus on Science and Mathematics.',
      skills: ['Physics', 'Chemistry', 'Mathematics'],
      icon: 'school'
    },
    {
      title: 'Matriculation (ICSE)',
      institution: 'M.G.M English School',
      location: 'Rourkela',
      date: '2017 - 2018',
      grade: 'Percentage: 78.9%',
      desc: 'Completed Secondary Education with distinction.',
      skills: ['General Sciences', 'Mathematics', 'English'],
      icon: 'school'
    }
  ];

  const getIcon = (type) => {
    return <GraduationCap className="w-6 h-6 text-white" />;
  };

  return (
    <section id="education" className="min-h-screen bg-slate-950 py-24 px-4 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800 mb-6">
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 font-medium text-sm">Academic Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Education <span className="text-blue-500">Timeline</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My educational background and academic milestones
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-[40px] top-0 bottom-0 w-px bg-slate-800"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative md:pl-20 transition-all duration-500"
              >
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-0 top-0 w-20 h-full justify-center items-start pt-2">
                  <div className="w-4 h-4 rounded-full bg-slate-800 border-4 border-slate-950 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-500 z-10 shadow-xl shadow-slate-950"></div>
                </div>

                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/30 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1">
                  
                  {/* Content Layout */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon Box */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-all duration-300">
                        {getIcon(edu.icon)}
                      </div>
                    </div>

                    <div className="flex-grow">
                      {/* Header Info */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {edu.title}
                          </h3>
                          <p className="text-lg text-slate-300 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="mt-2 lg:mt-0 flex items-center gap-3">
                           <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold border border-blue-500/20">
                              {edu.date}
                           </span>
                        </div>
                      </div>

                      {/* Details Row */}
                      <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm mb-6">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                        <div className="flex items-center gap-1.5 text-emerald-400">
                          <Award className="w-4 h-4" />
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-6 border-l-2 border-slate-800 pl-4 italic">
                        "{edu.desc}"
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Learnings</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium border border-slate-700 hover:border-slate-600 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:pr-8">
            Contact Me
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Education;
