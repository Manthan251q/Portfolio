import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-dark-light/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-mono tracking-tight"
          >
            <span className="text-primary mr-2">04.</span> Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mt-4"
          />
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {siteData.experience.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon / Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-dark-lighter shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors z-10">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl group-hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-sm font-mono text-accent mt-1 sm:mt-0">
                    {item.duration}
                  </span>
                </div>
                <div className="text-lg text-text-muted/80 font-medium mb-4">
                  {item.company}
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
