import React from 'react';
import { Code, PenTool, Layout, Globe, Database, Server } from 'lucide-react';
import SkillCategory from './SkillCategory';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'HTML/CSS', proficiency: 80 },
        { name: 'JavaScript', proficiency: 75 },
        { name: 'React', proficiency: 70 },
        { name: 'Axios', proficiency: 75 },
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'Node.js', proficiency: 80 },
        { name: 'Express', proficiency: 85 },
        { name: 'Python', proficiency: 75 },
        { name: 'API Design', proficiency: 85 },
        { name: 'Java', proficiency: 85 },
        { name: 'Python', proficiency: 85 },
        { name: 'Flask', proficiency: 85 }

      ]
    },
    {
      id: 'database',
      title: 'Database',
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'MongoDB', proficiency: 70 },
        { name: 'PostgreSQL', proficiency: 75 },
        { name: 'MongoDB', proficiency: 75 }
      ]
    },
    {
      id: 'Software Development Concepts:',
      title: 'Software Development Concepts:',
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'Git & GitHub', proficiency: 75 },
        { name: 'Algorithms', proficiency: 70 },
        { name: 'Data Structures', proficiency: 80 },
        { name: 'Object-Oriented Programming (OOP)', proficiency: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            I've cultivated a diverse set of skills throughout my career, allowing me to deliver 
            comprehensive solutions across the development spectrum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(category => (
            <SkillCategory 
              key={category.id} 
              title={category.title} 
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;