import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import AnimatedHero from './components/AnimatedHero';
import ProjectShowcase from './components/ProjectShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const pageVariants = {
    initial: { opacity: 0, y: 12, scale: 0.99 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -12, scale: 0.99, transition: { duration: 0.2, ease: 'easeIn' } }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col justify-between relative selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Background Ambient Lighting */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-cyan-500/[0.06] via-emerald-500/[0.03] to-transparent blur-[160px] pointer-events-none -z-20" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.03] blur-[150px] pointer-events-none -z-20" />

      {/* Top Navbar */}
      <Navbar 
        activePage={activePage} 
        onNavigate={(page) => setActivePage(page)} 
      />

      {/* Dynamic View Router (Clean 4 Views, No Endless Scroll) */}
      <main className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <AnimatedHero onNavigate={(page) => setActivePage(page)} />
            </motion.div>
          )}

          {activePage === 'projects' && (
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <ProjectShowcase />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <AboutSection />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

    </div>
  );
}
