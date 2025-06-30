import React from 'react';

interface Skill {
  name: string;
  logo: React.ReactNode;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-4">
      {skills.map(skill => (
        <div key={skill.name} className="flex flex-col items-center">
          {skill.logo}
          <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCategory;