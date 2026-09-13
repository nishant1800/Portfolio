import React from 'react';
import { Check, Code2 } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const About = () => {
  const tools = aboutData.coreTools || [
    "Python", "SQL", "Power BI", "Pandas", "NumPy", "Machine Learning", "React", "Node.js", "MongoDB", "Java", "Git", "AWS"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="section-divider mb-12">
        <span>01. ABOUT ME</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative Statement & Description */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] leading-snug tracking-tight">
            {aboutData.headline}
          </h2>

          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            {aboutData.description}
          </p>

          <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
            {aboutData.secondaryText}
          </p>

          {/* Core Skills & Tools */}
          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D084] tracking-wider uppercase">
              <Code2 className="w-4 h-4" />
              <span>Core Technologies & Skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-[#172033] border border-[#26344D] text-xs font-mono text-[#F8FAFC] hover:border-[#00D084] hover:text-[#00D084] transition-all duration-200 cursor-default"
                >
                  <span className="text-[#00D084] mr-1.5">▹</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Clean Focus Card */}
        <div className="lg:col-span-5">
          {/* Focus Card */}
          <div className="bg-[#172033] border border-[#26344D] rounded-xl p-6 sm:p-7 shadow-lg">
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-5 tracking-tight pb-3 border-b border-[#26344D]">
              What I Care About
            </h3>

            {/* Checklist Items */}
            <ul className="space-y-3.5">
              {aboutData.careAbout?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-[#1D293D] border border-[#00D084]/40 text-[#00D084] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span className="text-sm sm:text-base text-[#94A3B8] hover:text-[#F8FAFC] transition-colors leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;