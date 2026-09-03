import React from 'react';
import { Database, LineChart, Code2, Cpu, CheckCircle2, Award, Briefcase, Layers } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

const About = () => {
  const highlights = [
    {
      title: "Data Analysis & EDA",
      desc: "Deep exploratory analysis, data cleaning, pattern discovery, and statistical reporting with Python & SQL.",
      icon: LineChart
    },
    {
      title: "BI & Dashboarding",
      desc: "Interactive business intelligence dashboards, KPI metrics, DAX modeling, and Power BI reporting.",
      icon: Database
    },
    {
      title: "Software Engineering",
      desc: "Scalable full-stack systems, RESTful API, and reactive UIs using Java, JavaScript, React & Node.js.",
      icon: Code2
    },
    {
      title: "Continuous Learning",
      desc: "Exploring cloud platforms, containerization with Docker, and solving algorithmic problems daily.",
      icon: Cpu
    }
  ];

  const coreTools = [
    "Python", "SQL", "Pandas", "NumPy", "Power BI", "MySQL",
    "Java", "JavaScript", "React", "Node.js", "MongoDB", "Git", "GitHub", "Ms-Excel", "Machine Learing", "Deep Learing", "Mathematics", "Antigravity", "Canva"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Monospace Section Heading */}
      <div className="section-divider mb-12">
        <span>01. ABOUT ME</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative & Tools */}
        <div className="lg:col-span-7 space-y-6 text-[#94A3B8] leading-relaxed">
          <p className="text-base sm:text-lg text-[#F8FAFC] font-medium">
            {aboutData.narrative[0]}
          </p>

          <p className="text-sm sm:text-base">
            {aboutData.narrative[1]}
          </p>

          <p className="text-sm sm:text-base">
            {aboutData.narrative[2]}
          </p>

          <p className="text-sm sm:text-base">
            {aboutData.narrative[3]}
          </p>

          {/* Core Technologies Tag Cloud */}
          <div className="pt-4 space-y-3">
            <h3 className="font-mono text-xs text-[#00D084] tracking-wider uppercase">
              Core Technologies I Work With:
            </h3>
            <div className="flex flex-wrap gap-2">
              {coreTools.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-[#172033] border border-[#26344D] text-xs font-mono text-[#F8FAFC] hover:border-[#00D084] hover:text-[#00D084] transition-all duration-200"
                >
                  <span className="text-[#00D084] mr-1.5">▹</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Focus Areas & Fast Stats */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            {aboutData.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#172033] border border-[#26344D] hover:border-[#00D084]/50 transition-all duration-200"
              >
                <div className="text-2xl font-bold font-mono text-[#00D084]">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-[#94A3B8] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Focus Pillars */}
          <div className="p-6 rounded-xl bg-[#172033] border border-[#26344D] space-y-4">
            <h3 className="font-mono text-sm font-semibold text-[#F8FAFC] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00D084]" />
              What I Enjoy Doing Most:
            </h3>

            <div className="space-y-3">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="p-2 rounded-lg bg-[#1D293D] text-[#00D084] group-hover:bg-[#00D084] group-hover:text-[#0B1220] transition-colors mt-0.5 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00D084] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;