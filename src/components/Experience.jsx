import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Divider */}
      <div className="section-divider mb-12">
        <span>02. WHERE I'VE WORKED</span>
      </div>

      <div className="space-y-6">
        {experienceData.map((exp) => {
          const isHovered = hoveredCard === exp.id;
          return (
            <div
              key={exp.id}
              onMouseEnter={() => setHoveredCard(exp.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-6 sm:p-8 rounded-xl bg-[#172033] border transition-all duration-300 relative overflow-hidden group ${isHovered || exp.current
                  ? 'border-[#00D084]/60 shadow-lg shadow-[#00D084]/5 -translate-y-1'
                  : 'border-[#26344D] hover:border-[#00D084]/40'
                }`}
            >
              {/* Subtle top indicator bar */}
              <div
                className={`absolute top-0 left-0 h-1 bg-[#00D084] transition-all duration-500 ${isHovered || exp.current ? 'w-full' : 'w-0'
                  }`}
              />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-[#00D084] font-semibold text-lg">
                      @ {exp.company}
                    </span>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#00D084]/15 text-[#00D084] border border-[#00D084]/30">
                        Current Role
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#94A3B8] mt-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#00D084]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00D084]" />
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#1D293D] border border-[#26344D] text-[#F8FAFC]">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#94A3B8] leading-relaxed">
                    <span className="text-[#00D084] font-mono text-sm mt-0.5 select-none">▹</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-[#26344D]/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#94A3B8]/70 mr-1">Skills:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-[#1D293D] text-[#94A3B8] group-hover:text-[#F8FAFC] border border-[#26344D] group-hover:border-[#00D084]/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;