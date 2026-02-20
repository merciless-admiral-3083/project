import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              I'm Jaspreet Singh Nahal, a Computer Science Student
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Software with intelligence that gives the impression of being purposeful, scalable, and thoughtfully designed is what I enjoy building. 
            I frequently work at the point of union between all the development and applied AI; it could be designing low-latency APIs, data-driven backend crafting or modern language integrating into the products that I take care of. 
            I give a lot of importance to clean architecture, performance, and systems that are easy to extend rather than quick hacks.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            One of my main interests is the process of how ideas transition from theory to production. My curiosity has been a reason for my involvement in many projects including AI chatbots, trading systems, and first-principle language model development. 
            During this period I have built a very strong problem-solving mentality through rigorous algorithmic practice, hackathons, and hands-on experimentation. 
            I firmly believe that the finest software is produced when tech depth is paired with clarity of purpose and that’s the benchmark I set in everything I build.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Name</h4>
                <p className="text-gray-700 dark:text-gray-300">Jaspreet Singh Nahal</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <p className="text-gray-700 dark:text-gray-300">jaspreetnahal100@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">New Delhi, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h4>
                <p className="text-gray-700 dark:text-gray-300">Freelance & Full-time</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Hire Me
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative z-10 shadow-xl">
              <img
                src="https://github.com/merciless-admiral-3083/project/raw/main/Images/WhatsApp%20Image%202023-11-18%20at%2021.04.59_dc3f1dc2.jpg"
                alt="Jaspreet portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 md:w-32 md:h-32 bg-blue-600 dark:bg-blue-500 rounded-full z-0"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 md:w-40 md:h-40 bg-teal-500 dark:bg-teal-600 rounded-full z-0 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;