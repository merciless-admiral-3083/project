import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from '../types';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: 'Context-Grounded GPT-RAG System',
      description: 'Built and pretrained a GPT-style transformer from scratch in PyTorch with causal self-attention, custom initialization, and GPT-2 tokenization on 10B FineWeb-Edu tokens. Implemented Retrieval-Augmented Generation using Sentence Transformers and FAISS, achieving sub-200ms retrieval latency and reduced hallucinations via confidence-based gating.',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/Screenshot%202025-08-27%20103737.png',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/RAG-GPT'
    },
    {
      id: 2,
      title: 'Stock Trading System',
      description: 'This is a project showing how to implement a stock trading strategy using a Simple Moving Average (SMA) Crossover approach with Python and PostgreSQL. It imports stock data from an Excel file into a database, implements a trading strategy based on short-term and long-term SMAs, and validates the data with unit tests. The project is divided into folders for data, database setup, strategy implementation, and testing, thus ensuring efficient management and execution of the trading strategy.',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/1734796608193.jpg',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/Stock-Trading-Strategy'
    },
    {
      id: 3,
      title: 'OTT Platform: PLAYZEN',
      description: 'Developed an online OTT Platform to stream movies, TV Shows, Web Series and much more! It tracks users interest and content preference for better recommendations! The app also does not require sign-in which makes it open-to-all!',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/1740989683037.jpg',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/PLAYZEN'
    },
    {
      id: 4,
      title: 'Chatbot',
      description: 'This is my project regarding a chatbot that i made using React, python and other tools',
      image: 'https://github.com/merciless-admiral-3083/project/raw/main/Images/Gemini_Generated_Image_k6joz1k6joz1k6jo.png',
      category: 'web',
      link: 'https://github.com/merciless-admiral-3083/AI_US'
    },
    {
      id: 5,
      title: 'Resume Skill Extractor',
      description: 'Engineered an AI-powered skill extraction tool leveraging NLP pipelines (spaCy, regex, TF-IDF) for entity recognition from resumes. Built REST APIs with FastAPI, extracting resume skills with 85%+ accuracy and processing each file in under 2 seconds. Deployed the backend model and UI on a containerized dev environment using GitHub Actions.',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/Screenshot%202025-09-01%20213217.png',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/ResumeSkillPro'
    },
    {
      id: 6,
      title: 'AI Restaurant Manager',
      description: 'My project is a restaurant appointment scheduling chatbot based on AI to facilitate quick and easy reservation booking for restaurants. It automates reservation management, minimizes manual labor, and improves customer satisfaction through real-time availability and instant confirmation.',
      image: 'https://github.com/merciless-admiral-3083/project/raw/main/Images/Gemini_Generated_Image_gz25ylgz25ylgz25.png',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/AI-Restro-Manager'
    },
    {
      id: 7,
      title: 'AI Document Reader',
      description: 'Developed an intelligent document processing system that uses advanced AI algorithms to analyze and engage with one or multiple documents uploaded by users. Features smooth upload and document handling, ability to ask contextual questions and get accurate answers from the document(s), and enhanced natural language processing for a better user experience.',
      image: 'https://github.com/merciless-admiral-3083/my-images/raw/main/1734851602981.jpg',
      category: 'app',
      link: 'https://github.com/merciless-admiral-3083/AI-Document-Reader'
    },
    {
      id: 8,
      title: 'QR Code Generator',
      description: 'A sleek and responsive web application that allows users to generate and download QR codes for any URL in seconds.',
      image: 'https://github.com/merciless-admiral-3083/project/raw/main/Images/Gemini_Generated_Image_swvh90swvh90swvh.png',
      category: 'web',
      link: 'https://github.com/merciless-admiral-3083/QR'
    },
    {
      id: 9,
      title: 'Invoice Similarity Matching System',
      description: 'This framework uses a combination of text extraction, feature extraction, structural analysis and similarity calculation in order to be able to find out the invoice which has maximum similarities with some other data.',
      image: 'https://github.com/merciless-admiral-3083/project/raw/main/Images/1722439516480.jpg',
      category: 'web',
      link: '#'
    },
    {
      id: 10,
      title: 'RAG Based Chatbot for Legal Domain Related Queries',
      description: 'build a domain-specific RAG-based chatbot using LangChain, Hugging Face Transformers, and FAISS. The chatbot is designed to answer legal domain-related queries by retrieving relevant information from a vector store of legal documents and generating context-aware responses using a pre-trained language model.',
      image: 'https://github.com/merciless-admiral-3083/project/raw/main/Images/Gemini_Generated_Image_w624zaw624zaw624.png',
      category: 'web',
      link: 'https://github.com/merciless-admiral-3083/Expedien_RAG'
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