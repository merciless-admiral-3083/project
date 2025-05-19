import React, { useState, useEffect, Suspense } from 'react';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Header from './components/Header';
import Hero from './components/Hero';

const About = React.lazy(() => import('./components/About'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Contact = React.lazy(() => import('./components/Contact'));
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(userPrefersDark);
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Analytics />
      <SpeedInsights/>
      
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading sections...</div>}>
        <About />
        <Projects />
        <Skills />
        <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;