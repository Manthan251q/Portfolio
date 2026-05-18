import React from 'react';
import { Code2, Briefcase, MessageSquare, Mail, Camera } from 'lucide-react';
import { siteData } from '../data';

const Footer = () => {
  return (
    <footer className="bg-dark-light border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            MD
          </span>

        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-6 mb-4">
            <a href={siteData.socials.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <Code2 size={20} />
            </a>
            <a href={siteData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <Briefcase size={20} />
            </a>
            <a href={siteData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <MessageSquare size={20} />
            </a>
            <a href={siteData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <Camera size={20} />
            </a>
            <a href={siteData.socials.email} className="text-text-muted hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-text-muted text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Manthan Davra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
