import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Award, Trophy, Code2, Users, Rocket, Brain, Dna } from 'lucide-react';
import profileData from './data/profile_data.json';
// Import components (will implement soon)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-tech-bg text-white min-h-screen relative overflow-hidden font-sans selection:bg-neon-blue selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero data={profileData.personal} />
        <About data={profileData} />
        <Experience jobs={profileData.experience} leadership={profileData.leadership} />
        <Projects projects={profileData.projects} />
        <Skills skills={profileData.skills} achievements={profileData.achievements} />
        <Contact data={profileData.personal} />
      </main>

      <footer className="relative z-10 py-8 text-center text-gray-400 text-sm border-t border-gray-800 mt-20">
        <p>&copy; {new Date().getFullYear()} Anmol Goel. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Tailwind & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
