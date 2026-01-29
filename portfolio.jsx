import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, ChevronRight, Code, Database, Zap, Award, MapPin, Phone } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: '765+', label: 'Textbooks Digitized', delay: '0s' },
    { number: '10,000+', label: 'Pages Processed', delay: '0.1s' },
    { number: '95%+', label: 'Extraction Accuracy', delay: '0.2s' },
    { number: '80%', label: 'Cache Performance Gain', delay: '0.3s' }
  ];

  const projects = [
    {
      title: 'Samacheer Kalvi Content Automation Platform',
      company: 'TNQ Technologies',
      type: 'Production System',
      description: 'Engineered an enterprise-grade GenAI pipeline that transformed 765+ legacy textbooks into structured digital content. Built config-driven automation architecture handling 10,000+ pages with intelligent routing and real-time accessibility features.',
      impact: [
        'GenAI ETL pipeline with 95%+ extraction accuracy',
        'Config-driven architecture eliminating hard-coded paths',
        'Text-to-Speech engine with word-level synchronization',
        'Automated logging system tracking thousands of files'
      ],
      tech: ['Python', 'FastAPI', 'OpenAI API', 'Claude API', 'Node.js', 'JavaScript'],
      featured: true
    },
    {
      title: 'PDF Extraction Microservice',
      company: 'TNQ Technologies',
      type: 'REST API',
      description: 'Production-ready microservice serving 20+ concurrent users with dual-mode extraction, smart caching reducing redundant downloads by 80%, and automated Google Drive integration.',
      impact: [
        'Asynchronous FastAPI with Pydantic validation',
        'Intelligent caching layer with invalidation logic',
        'Auto-generated Swagger documentation',
        'Retry logic for rate limit handling'
      ],
      tech: ['FastAPI', 'Python', 'Google Drive API', 'Async/Await'],
      featured: false
    },
    {
      title: 'Interactive Annotation System',
      company: 'TNQ Technologies',
      type: 'Full-Stack Platform',
      description: 'W3C-compliant annotation platform implementing TextQuoteSelector algorithms for precise highlighting across educational content. Features hybrid storage, offline support, and multimedia attachments.',
      impact: [
        'W3C Web Annotation Data Model implementation',
        'Secure file handling with MIME validation',
        'LocalStorage fallback for offline access',
        'Complete CRUD with context-aware text positioning'
      ],
      tech: ['JavaScript', 'Node.js', 'Express.js', 'W3C Standards'],
      featured: false
    }
  ];

  const skills = [
    {
      category: 'Backend Engineering',
      icon: <Database className="w-6 h-6" />,
      items: ['Python', 'Django', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
      proficiency: 'production'
    },
    {
      category: 'Frontend & UX',
      icon: <Code className="w-6 h-6" />,
      items: ['JavaScript (ES6+)', 'HTML5/CSS3', 'Bootstrap', 'DOM APIs', 'React'],
      proficiency: 'production'
    },
    {
      category: 'Data & AI',
      icon: <Zap className="w-6 h-6" />,
      items: ['GenAI Integration', 'OpenAI API', 'Claude API', 'ETL Pipelines', 'PyPDF2'],
      proficiency: 'production'
    },
    {
      category: 'Databases & DevOps',
      icon: <Database className="w-6 h-6" />,
      items: ['PostgreSQL', 'MySQL', 'Linux (Ubuntu/RHEL)', 'Git', 'GitHub', 'AWS'],
      proficiency: 'production'
    }
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 transition-colors duration-300">
        
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  DK
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Dravid Kumar
                </span>
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(item => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center space-y-8" style={{ animation: 'fadeInUp 1s ease-out' }}>
              
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                  Dravid Kumar
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Full-Stack Engineer Who Ships Production Systems
                </h2>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Python • Django • FastAPI • GenAI Engineering • Node.js
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  View My Work
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-200 dark:border-slate-700"
                >
                  Let's Talk
                </button>
                
                <a
                  href="./Dravid_Resume_.pdf"
                  download
                  className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-slate-200 dark:border-slate-700"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4">
                <a href="https://github.com/dravid-kumar" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all">
                  <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </a>
                <a href="https://linkedin.com/in/dravid-kumar" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a href="mailto:dravidsuju@gmail.com" className="p-3 rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all">
                  <Mail className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center space-y-2 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800/50 hover:scale-105 transition-transform duration-300"
                  style={{ animation: 'fadeInUp 1s ease-out', animationDelay: stat.delay }}
                >
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
                <p className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white leading-relaxed mb-6">
                  I'm a full-stack engineer who architectures production systems independently. Discipline from 5 years of competitive cricket taught me execution under pressure — a skill I bring to every line of code.
                </p>
                
                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    Fresh MCA graduate who doesn't just learn — I build. During my internship at TNQ Technologies, I solo-architected a GenAI content pipeline that digitized 765+ textbooks with 95%+ accuracy. Not a tutorial project. Production code serving real users.
                  </p>
                  <p>
                    My experience spans Python backend systems (Django, FastAPI), Node.js microservices, and modern JavaScript frontends. I've built everything from ETL pipelines to W3C-compliant annotation systems, always with an eye on scalability and clean architecture.
                  </p>
                  <p>
                    Based in Chennai, Tamil Nadu. Open to remote opportunities with teams that value ownership, technical depth, and delivering impact over busywork.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <Award className="w-12 h-12" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Under Pressure, I Deliver</h3>
                    <p className="text-lg text-blue-50 leading-relaxed">
                      Captained U14, U16, and U19 Tiruppur District cricket teams. Represented Tamil Nadu Colts on the Baroda Tour (2023). Five years of TNCA League cricket taught me consistency, strategy, and performing when it counts — whether on the pitch or in production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
                Featured Work
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 mt-6">
                Production systems built independently. Real impact. Real users.
              </p>
            </div>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                    project.featured 
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-600 p-1' 
                      : 'bg-white dark:bg-slate-800'
                  }`}
                >
                  <div className={`${project.featured ? 'bg-white dark:bg-slate-900' : ''} rounded-2xl p-8 md:p-10`}>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.featured
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                              : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                          }`}>
                            {project.type}
                          </span>
                          {project.featured && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400 text-yellow-900">
                              ⭐ Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {project.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {project.impact.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
                Technical Skills
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 mt-6">
                Production-tested technologies I use to build scalable systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {skill.category}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        Production Experience
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
                Let's Build Something
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 mt-6">
                Open to full-time opportunities, freelance projects, and technical collaborations
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Get In Touch
                    </h3>
                    
                    <div className="space-y-4">
                      <a
                        href="mailto:dravidsuju@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                      >
                        <Mail className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Email</div>
                          <div className="font-semibold text-slate-900 dark:text-white">dravidsuju@gmail.com</div>
                        </div>
                      </a>

                      <a
                        href="tel:+916374877701"
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                      >
                        <Phone className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Phone</div>
                          <div className="font-semibold text-slate-900 dark:text-white">+91 6374877701</div>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                        <MapPin className="w-6 h-6 text-blue-600" />
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">Location</div>
                          <div className="font-semibold text-slate-900 dark:text-white">Chennai, Tamil Nadu</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Connect With Me
                    </h3>
                    
                    <div className="space-y-3">
                      <a
                        href="https://linkedin.com/in/dravid-kumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <Linkedin className="w-6 h-6 text-blue-600" />
                          <span className="font-semibold text-slate-900 dark:text-white">LinkedIn</span>
                        </div>
                        <ExternalLink className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href="https://github.com/dravid-kumar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <Github className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                          <span className="font-semibold text-slate-900 dark:text-white">GitHub</span>
                        </div>
                        <ExternalLink className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href="./Dravid_Resume_.pdf"
                        download
                        className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <Download className="w-6 h-6" />
                          <span className="font-semibold">Download Resume</span>
                        </div>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    <div className="pt-6 text-center text-slate-600 dark:text-slate-400">
                      <p className="text-sm">
                        Open to relocation • Remote-friendly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-900 dark:bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold">
                DK
              </div>
              <span className="font-bold text-lg">Dravid Kumar</span>
            </div>
            <p className="text-slate-400 mb-4">
              Full-Stack Developer • Production Systems Engineer • Chennai, Tamil Nadu
            </p>
            <p className="text-sm text-slate-500">
              © 2026 Dravid Kumar. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>

        <style>{`
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
      </div>
    </div>
  );
}