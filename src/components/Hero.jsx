import React from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[88vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto animate-fadeIn">
        {/* Intro */}
        <p className="font-mono text-sm sm:text-base text-[#00D084] tracking-wide mb-5">
          {personalInfo.greeting}
        </p>

        {/* Massive Main Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2 leading-none">
          {personalInfo.name}.
        </h1>

        {/* Big Subheading / Role */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#94A3B8] sm:text-[#8892B0] mb-6 leading-tight">
          {personalInfo.role}
        </h2>

        {/* Short Summary Description */}
        <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-8">
          Building my skills in data analysis and data science through hands-on projects and continuous learning. Previously at {' '}
          <span className="text-[#00D084]">Radical Minds</span>,{' '}
          <span className="text-slate-200">Bluestock</span> and{' '}
          <span className="text-slate-200">Kodnest</span>.
        </p>

        {/* Social Links Row (Icon + Text side-by-side) */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm text-[#94A3B8] mb-10">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#00D084] transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#00D084] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#00D084] transition-colors"
          >
            <Code2 className="w-4 h-4" />
            <span>LeetCode</span>
          </a>
        </div>

        {/* Get in touch CTA button */}
        <div>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-[#00D084] text-[#0B1220] font-semibold text-sm hover:bg-[#10B981] transition-colors shadow-sm active:scale-95"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;