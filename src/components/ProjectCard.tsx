import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectData } from '../types';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative group">
        <div className="aspect-video overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <a 
            href={project.link} 
            className="text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform translate-y-8 group-hover:translate-y-0"
            aria-label={`View ${project.title} project`}
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium capitalize">
            {project.category === 'web' ? 'Web Development' : 
             project.category === 'app' ? 'App Design' : 'UI/UX Design'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);