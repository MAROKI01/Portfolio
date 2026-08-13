import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Cpu } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './Icons';

interface ProjectHeroProps {
  project: Project;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute scroll transform properties
  const maxScroll = 600;
  const scrollRatio = Math.min(scrollY / maxScroll, 1);
  const opacity = Math.max(1 - scrollRatio * 1.2, 0);
  const translateY = scrollY * 0.35;
  const scale = 1 + scrollRatio * 0.05;

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen w-full bg-[#050505] text-white flex flex-col justify-between overflow-hidden pt-28 sm:pt-36 pb-16 px-6 sm:px-10 lg:px-16 border-b border-white/10">
      {/* Background Graphic & Tech Lines */}
      <div className="absolute inset-0 tech-line-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Back Navigation Bar */}
      <div className="relative z-20 max-w-7xl w-full mx-auto mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-montserrat font-semibold tracking-widest text-white/60 hover:text-white uppercase transition-colors group border border-white/10 hover:border-red-500/50 bg-[#0A0A0A] px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO WORK</span>
        </Link>
      </div>

      {/* Hero Animated Scroll Content Wrapper */}
      <div
        className="relative z-10 max-w-7xl w-full mx-auto my-auto transition-transform duration-75 ease-out"
        style={{
          opacity: opacity,
          transform: `translateY(${translateY}px) scale(${scale})`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Project Info */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category & Repo Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-red-950/60 border border-red-500/40 text-red-400 px-3.5 py-1 text-xs font-montserrat font-extrabold tracking-widest uppercase">
                {project.category === 'ai-data' ? 'AI & DATA' : 'SOFTWARE ENGINEERING'}
              </span>
              <span className="text-xs font-mono text-white/50 tracking-wider flex items-center gap-1.5 border border-white/10 px-3 py-1 bg-black/40">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{project.repository}</span>
              </span>
            </div>

            {/* Title */}
            <h1 className="font-montserrat font-black uppercase text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.92] tracking-[-0.03em] text-white">
              {project.title}
            </h1>

            {/* Short Description */}
            <p className="font-montserrat text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-900 hover:bg-red-800 text-white px-8 py-4 font-montserrat font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(178,31,53,0.5)] flex items-center gap-3 border border-red-500/40 group"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>VIEW ON GITHUB</span>
                <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Hero Image / Canvas Area */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-video sm:aspect-square lg:aspect-4/3 bg-[#0A0A0A] border border-white/15 overflow-hidden red-glow-card">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="relative w-full h-full p-8 flex flex-col justify-between bg-gradient-to-br from-[#0A0A0A] via-[#120407] to-[#3A070E]">
                  <div className="absolute inset-0 tech-line-grid opacity-30" />
                  
                  {/* Top Canvas Label */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-xs text-red-400 tracking-widest uppercase">
                      SYSTEM_MANIFEST
                    </span>
                    <Cpu className="w-5 h-5 text-red-500 animate-pulse" />
                  </div>

                  {/* Center Emblem */}
                  <div className="relative z-10 my-auto text-center">
                    <div className="font-montserrat font-black text-6xl text-white/15 tracking-tighter">
                      {project.title.slice(0, 4)}
                    </div>
                    <div className="font-mono text-xs text-white/40 tracking-widest uppercase mt-2">
                      // HIGH PERFORMANCE CODEBASE
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="relative z-10 border-t border-white/10 pt-4 flex justify-between text-[11px] font-mono text-white/40">
                    <span>STATUS: DEPLOYED</span>
                    <span>ENV: PRODUCTION</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto pt-8 flex items-center justify-between text-xs text-white/40 font-montserrat tracking-widest uppercase">
        <span>PROJECT ARCHITECTURE &amp; DETAILS</span>
        <span>SCROLL DOWN ↓</span>
      </div>
    </section>
  );
};
