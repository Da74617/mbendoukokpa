import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Zap, Code } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Profile Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                MBENDOU KOKPA
                <span className="block text-2xl md:text-3xl text-blue-600 mt-2">
                  GRUMBERT DAREL
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                  <Code size={18} />
                  <span className="font-medium">Développeur Front-End</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
                  <Zap size={18} />
                  <span className="font-medium">Automatisme</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 max-w-2xl mb-4">
                Étudiant en <strong>Informatique Industrielle et Automatisme</strong> , 
                passionné par la création d'expériences web modernes et de systèmes automatisés innovants.
              </p>
              <p className="text-gray-600">
                Spécialisé dans le développement front-end et la conception de solutions d'automatisme : 
                lave-mains automatiques, portails intelligents, et applications web interactives.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="#contact"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-300 group"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300 group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Me contacter
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full p-2">
                <img
                  src="derel.jpg"
                  alt="MBENDOU KOKPA GRUMBERT DAREL"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                <Code size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce delay-500">
                <Zap size={20} />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
                L3
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;