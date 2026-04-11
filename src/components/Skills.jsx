import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-dark-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-mono tracking-tight"
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteData.skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/5 rounded-lg text-primary mr-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>

                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-muted">{skill.name}</span>
                        <span className="text-primary font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-dark rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                          className="h-full bg-gradient-to-r from-primary to-accent relative"
                        >
                           <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/30" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
