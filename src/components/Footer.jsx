import React from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#26344D]/40 bg-[#0B1220]">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
        {/* Circular Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-[#172033] border border-[#26344D]/60 text-[#94A3B8] hover:text-[#00D084] hover:border-[#00D084]/50 flex items-center justify-center transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full bg-[#172033] border border-[#26344D]/60 text-[#94A3B8] hover:text-[#00D084] hover:border-[#00D084]/50 flex items-center justify-center transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="w-10 h-10 rounded-full bg-[#172033] border border-[#26344D]/60 text-[#94A3B8] hover:text-[#00D084] hover:border-[#00D084]/50 flex items-center justify-center transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Minimal Copyright Text */}
        <p className="text-xs sm:text-sm text-[#94A3B8] text-center">
          Designed & Built by {personalInfo.name} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;