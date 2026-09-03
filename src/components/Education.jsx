import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Divider */}
      <div className="section-divider mb-12">
        <span>05. EDUCATION</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="p-7 sm:p-8 rounded-xl bg-[#172033] border border-[#26344D] hover:border-[#00D084]/50 transition-all duration-300 group"
          >
            {/* Header Icon + Label */}
            <div className="flex items-center gap-2.5 text-[#00D084] font-semibold text-base mb-4">
              <GraduationCap className="w-5 h-5 text-[#00D084]" />
              <span className="text-white font-bold text-base">Education</span>
            </div>

            {/* Degree Title */}
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00D084] transition-colors">
              {edu.degree}
            </h3>

            {/* Branch / Department */}
            <p className="text-sm font-medium text-slate-300 mb-2">
              {edu.department}
            </p>

            {/* Institution */}
            <p className="text-base text-[#00D084] font-medium mb-3">
              {edu.institution}
            </p>

            {/* Timeline & Location */}
            <p className="text-xs sm:text-sm font-mono text-[#94A3B8]">
              {edu.period} | {edu.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;