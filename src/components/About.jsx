import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-mono tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              <p className="text-text-muted text-lg leading-relaxed relative z-10">
                {siteData.about.description}
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              </div>
            </div>
          </motion.div>

          {/* Profile Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Outer decorative box */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/50 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 z-0" />
              {/* Image container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 bg-dark-lighter">
                <div className="w-full h-full bg-primary/20 mix-blend-overlay absolute inset-0 z-20 group-hover:bg-transparent transition-colors duration-300" />
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80&w=600" 
                  alt="Profile" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
