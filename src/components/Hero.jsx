import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { siteData } from '../data';
import { Link } from 'react-scroll';

const Hero = () => {
  const { name, taglines } = siteData.hero;
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs for modern gradient effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono mb-4 tracking-wider"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          {name}.
        </motion.h1>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="h-16 md:h-20 mb-8"
        >
           <p className="text-2xl md:text-4xl text-text-muted font-bold">
             <span className="block animate-pulse">
               {taglines[currentTagline]}
             </span>
           </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            to="projects"
            smooth={true}
            offset={-80}
            className="group relative cursor-pointer inline-flex items-center justify-center px-8 py-3 text-base font-bold text-dark bg-primary rounded-full overflow-hidden transition-all hover:scale-105 hover:bg-primary-dark"
          >
            <span>View Work</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>

          <a
            href="#"
            className="group cursor-pointer inline-flex items-center justify-center px-8 py-3 text-base font-bold text-text bg-transparent border border-white/20 rounded-full hover:bg-white/5 transition-all"
          >
            <Download className="mr-2" size={20} />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm font-mono text-text-muted mb-2">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
