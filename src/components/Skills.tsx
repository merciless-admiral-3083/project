import React from 'react';
import { Layout, Server, Database, Cpu, Settings, Zap, Globe } from 'lucide-react';
import SkillCategory from './SkillCategory';
import JavaLogo from './Images/java-svgrepo-com.svg';
import PythonLogo from './Images/python-svgrepo-com.svg';
import CLogo from './Images/c-svgrepo-com.svg';      
import JsLogo from './Images/js-svgrepo-com.svg';
import HtmlLogo from './Images/html-5-svgrepo-com.svg';
import CssLogo from './Images/css-3-svgrepo-com.svg';
import ReactLogo from './Images/react-svgrepo-com.svg';
import NodeLogo from './Images/node-svgrepo-com.svg';
import FlaskLogo from './Images/flask-svgrepo-com.svg';  
import FastAPILogo from './Images/fastapi-svgrepo-com.svg';  
import ExpressLogo from './Images/express-svgrepo-com.svg';  
import JWTLogo from './Images/jwt-svgrepo-com.svg';  
import MySQLLogo from './Images/mysql-svgrepo-com.svg';
import MongoLogo from './Images/mongo-svgrepo-com.svg';
import RedisLogo from './Images/redis-svgrepo-com.svg';  
import TensorFlowLogo from './Images/tensorflow-svgrepo-com.svg';  
import PyTorchLogo from './Images/pytorch-svgrepo-com.svg';  
import PandasLogo from './Images/pandas-svgrepo-com.svg';  
import NumpyLogo from './Images/numpy-svgrepo-com.svg';  
import OpenCVLogo from './Images/opencv-svgrepo-com.svg';  
import GitLogo from './Images/git-svgrepo-com.svg';  
import GitHubLogo from './Images/github-142-svgrepo-com.svg';  
import CICDLogo from './Images/ci-cd-svgrepo-com.svg';  
import VSCodeLogo from './Images/vs-code-svgrepo-com.svg';  
import NpmLogo from './Images/npm-svgrepo-com.svg';  
import OpenAILogo from './Images/openai-svgrepo-com.svg'; 
import Algorithms from './Images/brain-svgrepo-com.svg'; 
import APIIntegration from './Images/api-interface-svgrepo-com.svg'; 
import DataStructures from './Images/data-service-svgrepo-com.svg'; 
import OOP from './Images/programming-svgrepo-com.svg'; 


const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'Java', logo: <img src={JavaLogo} alt="Java" className="w-8 h-8" /> },
        { name: 'Python', logo: <img src={PythonLogo} alt="Python" className="w-8 h-8" /> },
        { name: 'C', logo: <img src={CLogo} alt="C" className="w-8 h-8" /> },
        { name: 'JavaScript', logo: <img src={JsLogo} alt="JavaScript" className="w-8 h-8" /> },
      ]
    },
    {
      id: 'web',
      title: 'Web Technologies',
      icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'HTML5', logo: <img src={HtmlLogo} alt="HTML5" className="w-8 h-8" /> },
        { name: 'CSS3', logo: <img src={CssLogo} alt="CSS3" className="w-8 h-8" /> },
        { name: 'React.js', logo: <img src={ReactLogo} alt="React.js" className="w-8 h-8" /> },
        { name: 'Node.js', logo: <img src={NodeLogo} alt="Node.js" className="w-8 h-8" /> },
        { name: 'Flask', logo: <img src={FlaskLogo} alt="Flask" className="w-8 h-8" /> },
        { name: 'FastAPI', logo: <img src={FastAPILogo} alt="FastAPI" className="w-8 h-8" /> },
        { name: 'Express.js', logo: <img src={ExpressLogo} alt="Express.js" className="w-8 h-8" /> },
        { name: 'JWT', logo: <img src={JWTLogo} alt="JWT" className="w-8 h-8" /> },
      ]
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'MongoDB', logo: <img src={MongoLogo} alt="MongoDB" className="w-8 h-8" /> },
        { name: 'Redis', logo: <img src={RedisLogo} alt="Redis" className="w-8 h-8" /> },
        { name: 'MySQL', logo: <img src={MySQLLogo} alt="MySQL" className="w-8 h-8" /> }, // Use same as Postgres for now
      ]
    },
    {
      id: 'ai',
      title: 'AI / ML',
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'TensorFlow', logo: <img src={TensorFlowLogo} alt="TensorFlow" className="w-8 h-8" /> },
        { name: 'PyTorch', logo: <img src={PyTorchLogo} alt="PyTorch" className="w-8 h-8" /> },
        { name: 'Pandas', logo: <img src={PandasLogo} alt="Pandas" className="w-8 h-8" /> },
        { name: 'NumPy', logo: <img src={NumpyLogo} alt="NumPy" className="w-8 h-8" /> },
        { name: 'OpenCV', logo: <img src={OpenCVLogo} alt="OpenCV" className="w-8 h-8" /> },
        { name: 'OpenAI', logo: <img src={OpenAILogo} alt="OpenAI" className="w-8 h-8" /> },
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Tools',
      icon: <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'Git', logo: <img src={GitLogo} alt="Git" className="w-8 h-8" /> },
        { name: 'GitHub', logo: <img src={GitHubLogo} alt="GitHub" className="w-8 h-8" /> },
        { name: 'CI/CD', logo: <img src={CICDLogo} alt="CI/CD" className="w-8 h-8" /> },
        { name: 'VS Code', logo: <img src={VSCodeLogo} alt="VS Code" className="w-8 h-8" /> },
        { name: 'npm', logo: <img src={NpmLogo} alt="npm" className="w-8 h-8" /> },
      ]
    },
    {
      id: 'core',
      title: 'Core Competencies',
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: [
        { name: 'Algorithms', logo: <img src={Algorithms} alt="Algorithms" className="w-8 h-8" /> },
        { name: 'Data Structures', logo: <img src={DataStructures} alt="Data Structures" className="w-8 h-8" /> },
        { name: 'OOP', logo: <img src={OOP} alt="OOP" className="w-8 h-8" /> },
        { name: 'API Integration', logo: <img src={APIIntegration} alt="API Integration" className="w-8 h-8" /> },
      ]
    },
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