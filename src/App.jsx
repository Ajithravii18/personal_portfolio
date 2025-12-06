import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <ScrollProgress />
            <Navbar />
            <Hero />
            <Services />
            <Experience />
            <Projects />
            <Education />
            <About />
            <Contact />

            {/* Footer */}
            <footer className="py-12 border-t" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
              <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="flex space-x-8 mb-8">
                  <a href="https://github.com/Ajithravii18" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-accent text-2xl transition-colors transform hover:scale-110">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/ajithravii28/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-accent text-2xl transition-colors transform hover:scale-110">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:ajithravii28@gmail.com" className="text-[var(--text-secondary)] hover:text-accent text-2xl transition-colors transform hover:scale-110">
                    <FaEnvelope />
                  </a>
                </div>
                <p className="text-[var(--text-tertiary)] text-sm">&copy; {new Date().getFullYear()} Ajith Kumar. All rights reserved.</p>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
