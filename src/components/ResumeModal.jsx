import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe, CheckCircle2, Award } from 'lucide-react';
import { personalInfo, experienceData, skillsData, projectsData, educationData } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate downloadable text representation or print to PDF
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#0F172A] border border-[#26344D] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Toolbar */}
        <div className="px-6 py-4 bg-[#172033] border-b border-[#26344D] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00D084]" />
            <span className="font-mono text-sm font-semibold text-white">
              NishantResume.pdf
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1D293D] border border-[#26344D] text-[#F8FAFC] hover:text-[#00D084] text-xs font-mono transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1D293D] text-[#94A3B8] hover:text-white hover:bg-[#26344D] transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B1220] text-[#94A3B8]">
          {/* Header */}
          <div className="border-b border-[#26344D] pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base text-[#00D084] font-mono mt-1 font-semibold">
                {personalInfo.role}
              </p>
            </div>

            <div className="text-xs font-mono space-y-1 sm:text-right">
              <p className="text-[#F8FAFC]">{personalInfo.location}</p>
              <p className="text-[#00D084]">{personalInfo.email}</p>
              <p className="text-[#94A3B8]">github.com/nishant1800</p>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-[#00D084] uppercase tracking-wider font-bold">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
              {personalInfo.tagline} Experienced in statistical data analysis, exploratory modeling, BI dashboards (Power BI), and full-stack software development with Java, JavaScript, Python, and SQL.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-[#00D084] uppercase tracking-wider font-bold">
              Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-lg bg-[#172033]/60 border border-[#26344D] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} <span className="text-[#00D084]">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-[#94A3B8] pl-2">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#00D084]">▹</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs text-[#00D084] uppercase tracking-wider font-bold">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-lg bg-[#172033]/60 border border-[#26344D] space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-white">{proj.title}</h3>
                    <span className="text-[10px] font-mono text-[#00D084]">{proj.category}</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-tight line-clamp-2">
                    {proj.description}
                  </p>
                  <p className="text-[10px] font-mono text-[#94A3B8]/80 pt-1">
                    Tech: {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs text-[#00D084] uppercase tracking-wider font-bold">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((cat, i) => (
                <div key={i} className="p-3 rounded bg-[#172033]/40 border border-[#26344D]">
                  <span className="font-semibold text-white font-mono">{cat.category}: </span>
                  <span className="text-[#94A3B8]">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs text-[#00D084] uppercase tracking-wider font-bold">
              Education
            </h2>
            <div className="space-y-2">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-4 rounded-lg bg-[#172033]/60 border border-[#26344D] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white">{edu.degree} in {edu.department}</h3>
                    <p className="text-xs text-[#00D084]">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]">
                    {edu.period} | {edu.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;