import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <Link
      to={`/project/${project.id}`}
      className="group relative block bg-[#0A0A0A] border border-white/12 hover:border-red-600/60 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(143,23,38,0.35)] flex flex-col justify-between h-full overflow-hidden"
    >
      {/* Background Radial Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Project Thumbnail / Dark-Red Technical Placeholder */}
        <div className="relative w-full h-52 sm:h-56 bg-[#050505] border-b border-white/10 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#2A050A] group-hover:scale-105 transition-transform duration-700">
              {/* Tech Line Grid Background */}
              <div className="absolute inset-0 tech-line-grid opacity-25 pointer-events-none" />
              
              {/* Subtle Red Center Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,23,38,0.25)_0%,transparent_70%)] pointer-events-none" />

              {/* Top Bar of Placeholder */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs text-red-500/80 tracking-widest uppercase border border-red-900/50 bg-red-950/50 px-2.5 py-0.5">
                  SYS //{formattedIndex}
                </span>
                <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
                  {project.category.toUpperCase()}
                </span>
              </div>

              {/* Center Abstract Monogram / Index */}
              <div className="relative z-10 my-auto text-center">
                <span className="font-montserrat font-black text-5xl sm:text-6xl text-white/10 group-hover:text-red-500/20 transition-colors tracking-tighter">
                  {formattedIndex}
                </span>
                <div className="text-[11px] font-montserrat font-bold text-white/40 tracking-[0.25em] uppercase mt-1">
                  {project.title}
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-white/40 border-t border-white/10 pt-2">
                <span>TECH_STACK // {project.technologies.length} DEPS</span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>
          )}

          {/* Floating Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-black/80 backdrop-blur-md border border-white/15 px-3 py-1 font-montserrat font-semibold text-[10px] tracking-widest uppercase text-white/90 shadow-lg">
              {project.category === 'ai-data' ? 'AI & DATA' : 'SOFTWARE'}
            </span>
          </div>

          {/* Floating Action Arrow */}
          <div className="absolute bottom-4 right-4 z-20 w-9 h-9 bg-black/80 backdrop-blur-md border border-white/20 group-hover:border-red-500 flex items-center justify-center text-white/80 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(178,31,53,0.5)]">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          {/* Project Index + Title */}
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-red-500 tracking-wider">
              {formattedIndex}.
            </span>
            <h3 className="font-montserrat font-extrabold text-xl text-white group-hover:text-red-400 transition-colors uppercase tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Repository Tag */}
          <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono mb-4">
            <GithubIcon className="w-3.5 h-3.5" />
            <span className="truncate">{project.repository}</span>
          </div>

          {/* Short Description */}
          <p className="font-montserrat text-sm text-white/70 leading-relaxed mb-6 line-clamp-3">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Footer Technologies Pills */}
      <div className="p-6 sm:p-7 pt-0 border-t border-white/10 mt-auto">
        <div className="flex flex-wrap gap-1.5 pt-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-montserrat font-medium text-white/60 bg-white/5 border border-white/10 px-2.5 py-0.5 group-hover:border-red-900/40 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-montserrat font-medium text-red-400/80 bg-red-950/30 border border-red-900/30 px-2 py-0.5">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
