import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Terminal } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#172033] border border-[#26344D] rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#1D293D] text-[#94A3B8] hover:text-white hover:bg-[#26344D] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#00D084]/15 text-[#00D084] text-xs font-mono border border-[#00D084]/30">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#94A3B8]">
              {project.tag}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Project Description */}
        <div className="space-y-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          <p className="text-white font-medium">
            {project.description}
          </p>
          <p>
            {project.details}
          </p>
        </div>

        {/* Highlight Metrics */}
        {project.metrics && (
          <div className="p-4 rounded-xl bg-[#1D293D] border border-[#26344D] flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00D084]/10 text-[#00D084]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-[#94A3B8]">Key Highlight</div>
              <div className="text-sm font-semibold text-white">{project.metrics}</div>
            </div>
          </div>
        )}

        {/* Technologies Breakdown */}
        <div className="space-y-2">
          <h4 className="font-mono text-xs text-[#00D084] tracking-wider uppercase">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-md bg-[#0F172A] border border-[#26344D] text-[#94A3B8]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#26344D] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1D293D] border border-[#26344D] text-white hover:text-[#00D084] hover:border-[#00D084] text-xs font-mono transition-colors"
              >
                <Github className="w-4 h-4" />
                View Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00D084] text-[#0B1220] hover:bg-[#10B981] text-xs font-mono font-bold transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#94A3B8] hover:text-white transition-colors"
          >
            Close Window [ESC]
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;