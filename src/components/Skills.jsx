import React from 'react';
import {
  TrendingUp,
  BarChart3,
  Database,
  Code2,
  Globe,
  Wrench,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const iconMap = {
  TrendingUp: TrendingUp,
  BarChart3: BarChart3,
  Database: Database,
  Code2: Code2,
  Globe: Globe,
  Wrench: Wrench,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Divider */}
      <div className="section-divider mb-10">
        <span>03. SKILLS & EXPERTISE</span>
      </div>

      {/* Skills Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((categoryGroup, idx) => {
          const Icon = iconMap[categoryGroup.iconName] || Layers;
          return (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#172033] border border-[#26344D] hover:border-[#00D084]/50 transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-[#1D293D] text-[#00D084] border border-[#26344D] group-hover:bg-[#00D084] group-hover:text-[#0B1220] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-[#00D084] transition-colors">
                      {categoryGroup.category}
                    </h3>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      {categoryGroup.skills.length} competencies
                    </span>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-md bg-[#1D293D] border border-[#26344D] text-xs font-mono text-[#94A3B8] hover:text-white hover:border-[#00D084] hover:bg-[#00D084]/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent indicator */}
              <div className="mt-6 pt-3 border-t border-[#26344D]/50 flex items-center justify-between text-xs font-mono text-[#94A3B8]/60">
                <span>Domain</span>
                <span className="text-[#00D084]">Verified Proficient</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;