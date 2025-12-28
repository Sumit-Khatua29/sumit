import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, User, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'sumitrkl2002@gmail.com',
      link: 'mailto:sumitrkl2002@gmail.com',
      icon: <Mail className="w-5 h-5 text-white" />,
      description: 'Drop me a line anytime'
    },
    {
      title: 'Phone',
      value: '+91 8260655912',
      link: 'tel:+918260655912',
      icon: <Phone className="w-5 h-5 text-white" />,
      description: 'Available Mon-Fri, 9AM-6PM IST'
    },
    {
      title: 'LinkedIn',
      value: 'Sumit Khatua',
      link: 'https://www.linkedin.com/in/sumit-khatua-b46959216/',
      icon: <Linkedin className="w-5 h-5 text-white" />,
      description: 'Let\'s connect professionally'
    },
    {
      title: 'Location',
      value: 'Rourkela, Odisha',
      link: '#',
      icon: <MapPin className="w-5 h-5 text-white" />,
      description: 'Open to remote opportunities'
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-slate-900 py-24 px-4 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800 mb-6">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300 font-medium text-sm">Let's Connect</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and collaborating on exciting projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/30 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="bg-slate-800 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1">{contact.title}</h4>
                    <p className="text-blue-400 font-medium mb-2 text-sm break-words">{contact.value}</p>
                    <a href={contact.link} className="text-xs text-slate-500 flex items-center gap-1 hover:text-white transition-colors">
                      {contact.description} <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Notice */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 shadow-xl">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Current Status
              </h4>
              <p className="text-slate-400 text-sm mb-0">
                I am currently <span className="text-green-400 font-medium">available</span> for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-3xl border border-slate-800 p-8 md:p-10 hover:border-slate-700 transition-all duration-300 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400">I'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Subject
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none transition-all duration-200"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 ${
                  isSubmitting 
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-600/30 hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;