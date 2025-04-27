import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: 'Stock Trading System',
      description: 'This is a project showing how to implement a stock trading strategy using a Simple Moving Average (SMA) Crossover approach with Python and PostgreSQL. It imports stock data from an Excel file into a database, implements a trading strategy based on short-term and long-term SMAs, and validates the data with unit tests. The project is divided into folders for data, database setup, strategy implementation, and testing, thus ensuring efficient management and execution of the trading strategy.',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/1734796608193.jpg',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/Stock-Trading-Strategy'
    },
    {
      id: 2,
      title: 'OTT Platform: PLAYZEN',
      description: 'Developed an online OTT Platform to stream movies, TV Shows, Web Series and much more! It tracks users interest and content preference for better recommendations! The app also does not require sign-in which makes it open-to-all!',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/1740989683037.jpg',
      category: 'app',
      link: '#'
    },
    {
      id: 3,
      title: 'Chatbot',
      description: 'This is my project regarding a chatbot that i made using React, python and other tools',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/1734017123741.jpg',
      category: 'web',
      link: 'https://github.com/merciless-admiral-3083/AI_US'
    },
    {
      id: 4,
      title: 'AI Document Reader',
      description: 'Developed an intelligent document processing system that uses advanced AI algorithms to analyze and engage with one or multiple documents uploaded by users. This system includes the following: ---Smooth upload and document handling. ---Ability to ask contextual questions and get accurate answers from the document(s). ---Enhanced natural language processing for a better user experience. ---Scalable and user-friendly interface to quickly explore the documents. This project represents the culmination of AI-based solutions, natural language understanding, and delivering practical applications to streamline document analysis and information retrieval.',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/1734851602981.jpg',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/AI-Document-Reader'
    },
    {
      id: 5,
      title: 'AI Restaurant Manager',
      description: 'My project is a restaurant appointment scheduling chatbot based on AI to facilitate quick and easy reservation booking for restaurants. It automates reservation management, minimizes manual labor, and improves customer satisfaction through real-time availability and instant confirmation.',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/1739775468506.jpg',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/AI-Restro-Manager'
    },
    {
      id: 6,
      title: 'Invoice Similarity Matching System',
      description: 'The Invoice Similarity Matching System automaticizes incoming invoices categorization by associating them over existing templates or on previously treated ones. This framework uses a combination of text extraction, feature extraction, structural analysis and similarity calculation in order to be able to find out the invoice which has maximum similarities with some other data. The objective is to eliminate the need for manual allocation, so that invoice processing can be accomplished with ease and respect of data accuracy.',
      image: 'https://media.licdn.com/dms/image/v2/D562DAQH1fFoW450thQ/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1722439516464?e=1746288000&v=beta&t=h8pWsTouq3MqC6Fe8HSmUcPfcnWtFYWnm-isjNu9s-s',
      category: 'web',
      link: '#'
    }
  ];
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'App Design' },  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Explore a selection of my recent work across different domains and technologies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;