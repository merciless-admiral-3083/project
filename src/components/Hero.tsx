import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              <span className="block">Jaspreet Singh Nahal</span>
              <span className="block text-blue-600 dark:text-blue-400 mt-2">Building Intelligent Web & AI Solutions</span>
            </h1>
          </div>
          
          <div className="max-w-2xl mx-auto overflow-hidden">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 animate-fade-in animation-delay-300">
              I create beautiful digital experiences that inspire and engage
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-medium rounded-full border border-gray-300 dark:border-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Contact Me
            </a>
            <a ///
              href="https://www.linkedin.com/in/jaspreet-nahal/overlay/1748186329573/single-media-viewer/?profileId=ACoAAEem9oUBYcGhn-RPsgF959px8d9U4zFKNlc"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              My Resumé
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </div>
      </a>
    </section>
  );
};

export default Hero;