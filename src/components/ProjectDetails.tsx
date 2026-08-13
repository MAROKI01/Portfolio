import React from 'react';
import type { Project } from '../data/projects';
import { 
  CheckCircle2, 
  Layers, 
  AlertTriangle, 
  Trophy, 
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <section className="relative w-full bg-[#050505] text-white py-20 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24">
        {/* Section 1: Overview & Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16 sm:pb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-600" />
              <h2 className="font-montserrat font-extrabold text-xs sm:text-sm text-red-500 tracking-[0.25em] uppercase">
                OVERVIEW
              </h2>
            </div>
            <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
              ABOUT THE PROJECT
            </h3>
            <p className="font-montserrat text-base sm:text-lg text-white/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6 bg-[#0A0A0A] border border-white/12 p-8 border-l-4 border-l-red-700">
            <div className="flex items-center gap-3 text-white/50">
              <Code2 className="w-5 h-5 text-red-500" />
              <h4 className="font-montserrat font-bold text-xs tracking-widest uppercase text-white">
                TECHNOLOGIES USED
              </h4>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-montserrat font-medium text-xs text-white bg-white/5 border border-white/12 px-3.5 py-1.5 hover:border-red-500/50 hover:bg-red-950/20 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.concepts && project.concepts.length > 0 && (
              <div className="pt-6 border-t border-white/10">
                <div className="text-[11px] font-montserrat font-semibold text-white/40 uppercase tracking-widest mb-3">
                  CORE TECHNICAL CONCEPTS
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.concepts.map((concept, idx) => (
                    <span
                      key={idx}
                      className="font-montserrat text-xs text-red-400/90 bg-red-950/30 border border-red-900/40 px-3 py-1"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-10 border-b border-white/10 pb-16 sm:pb-20">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <h2 className="font-montserrat font-extrabold text-xs sm:text-sm text-red-500 tracking-[0.25em] uppercase">
                  CAPABILITIES
                </h2>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
                KEY FEATURES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A0A0A] border border-white/10 hover:border-red-600/40 p-6 sm:p-7 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-xs text-red-500/80 tracking-widest font-bold">
                      [0{idx + 1}]
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="font-montserrat font-medium text-sm text-white/90 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Architecture & System Design (If Available) */}
        {project.architecture && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-white/10 pb-16 sm:pb-20">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <h2 className="font-montserrat font-extrabold text-xs sm:text-sm text-red-500 tracking-[0.25em] uppercase">
                  SYSTEM DESIGN
                </h2>
              </div>
              <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                ARCHITECTURE
              </h3>
            </div>

            <div className="lg:col-span-8 bg-[#0A0A0A] border border-white/10 p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-950/50 border border-red-500/30 text-red-400 rounded shrink-0 hidden sm:block">
                  <Layers className="w-6 h-6" />
                </div>
                <p className="font-montserrat text-base sm:text-lg text-white/80 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Section 4: Engineering Challenges & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="bg-[#0A0A0A] border border-white/12 p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-white uppercase tracking-tight">
                  ENGINEERING CHALLENGES
                </h3>
              </div>
              <ul className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-montserrat text-white/70 leading-relaxed border-b border-white/5 pb-3 last:border-0">
                    <span className="font-mono text-red-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results / Impact */}
          {project.results && (
            <div className="bg-[#0A0A0A] border border-white/12 p-8 sm:p-10 space-y-6 border-t-2 border-t-red-600">
              <div className="flex items-center gap-3 text-red-400">
                <Trophy className="w-5 h-5 text-red-500" />
                <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-white uppercase tracking-tight">
                  IMPACT &amp; RESULTS
                </h3>
              </div>
              <p className="font-montserrat text-sm sm:text-base text-white/80 leading-relaxed">
                {project.results}
              </p>
              <div className="pt-4 border-t border-white/10 font-mono text-xs text-red-400/90 tracking-wider">
                STATUS: VERIFIED &amp; TESTED
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA to Repository */}
        <div className="pt-12 text-center border-t border-white/10">
          <div className="max-w-xl mx-auto space-y-6">
            <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight">
              EXPLORE CODEBASE ON GITHUB
            </h3>
            <p className="font-montserrat text-xs sm:text-sm text-white/60">
              Inspect the source code, architecture documentation, and commit history for {project.title}.
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-900 hover:bg-red-800 text-white px-8 py-4 font-montserrat font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(178,31,53,0.5)] border border-red-500/40 group"
            >
              <GithubIcon className="w-5 h-5 text-white" />
              <span>VIEW REPOSITORY</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
