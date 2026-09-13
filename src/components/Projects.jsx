import React, { useState } from 'react';
import { Github, ExternalLink, FolderGit2, ArrowUpRight, Info } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Divider */}
      <div className="section-divider mb-10">
        <span>04. THINGS I'VE BUILD</span>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#172033] border border-[#26344D] hover:border-[#00D084]/60 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 relative overflow-hidden"
          >
            {/* Top Row: Folder Icon + Action Links */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-lg bg-[#1D293D] text-[#00D084] border border-[#26344D] group-hover:bg-[#00D084] group-hover:text-[#0B1220] transition-colors">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94A3B8] hover:text-[#00D084] transition-colors p-1"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94A3B8] hover:text-[#00D084] transition-colors p-1"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Category & Tag */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-[#00D084] font-medium">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-[#94A3B8]/60">•</span>
                <span className="text-xs font-mono text-[#94A3B8]">
                  {project.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D084] transition-colors flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#00D084]" />
              </h3>

              {/* Description */}
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Bottom: Tech Stack & Detail Trigger */}
            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#26344D]/80 mb-4">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-[#1D293D] text-[#94A3B8] group-hover:text-[#F8FAFC] border border-[#26344D] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between text-xs font-mono pt-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-[#00D084] hover:underline"
                >
                  <Info className="w-3.5 h-3.5" /> Details
                </button>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#F8FAFC] hover:text-[#00D084] transition-colors"
                  >
                    Live Preview <ArrowUpRight className="w-3 h-3" />
                  </a>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#94A3B8] hover:text-[#00D084] transition-colors"
                  >
                    Source Code <Github className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;