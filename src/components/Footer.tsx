import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">Portfolio</a>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating beautiful digital experiences that combine stunning visuals with seamless functionality.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full mb-4 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jaspreet Singh Nahal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;