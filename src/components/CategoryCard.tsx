import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  id: 'ai-data' | 'software-engineering';
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icons: LucideIcon[];
  projectCount: number;
  linkTo: string;
  badgeIndex: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  subtitle,
  description,
  highlights,
  icons: Icons,
  projectCount,
  linkTo,
  badgeIndex,
}) => {
  return (
    <Link
      to={linkTo}
      className="group relative block bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 hover:border-red-600/70 dark:hover:border-red-600/70 p-6 sm:p-8 lg:p-10 transition-all duration-500 red-glow-hover flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none"
    >
      {/* Background Dark-Red Glow & Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-200/40 dark:from-red-950/30 via-red-900/10 to-transparent rounded-full blur-3xl group-hover:from-red-900/40 transition-all duration-700 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-8 border-b border-black/10 dark:border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-montserrat font-extrabold text-xs text-red-700 dark:text-red-500 tracking-widest uppercase border border-red-300 dark:border-red-900/60 bg-red-50 dark:bg-red-950/40 px-3 py-1">
              CATEGORY {badgeIndex}
            </span>
            <span className="text-xs font-montserrat font-medium text-neutral-500 dark:text-white/50 tracking-wider">
              {projectCount} PROJECTS
            </span>
          </div>

          <div className="w-10 h-10 border border-black/10 dark:border-white/15 bg-neutral-100 dark:bg-black/50 flex items-center justify-center text-neutral-700 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(178,31,53,0.4)]">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Dedicated Image / Abstract Technical Canvas Area */}
        <div className="relative w-full h-48 sm:h-56 mb-8 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-black/60 overflow-hidden flex items-center justify-center group-hover:border-red-900/50 transition-colors">
          {/* Subtle Abstract Technical Overlay Grid */}
          <div className="absolute inset-0 tech-line-grid opacity-30" />
          
          {/* Animated Ambient Red Glow Center */}
          <div className="absolute w-40 h-40 bg-gradient-to-r from-red-300/40 dark:from-red-950/60 to-red-900/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

          {/* Icons Grid Render inside empty container */}
          <div className="relative z-10 grid grid-cols-2 gap-6 p-6">
            {Icons.map((Icon, idx) => (
              <div 
                key={idx}
                className="p-3 bg-white dark:bg-[#050505]/90 border border-black/10 dark:border-white/10 group-hover:border-red-500/40 rounded text-red-700 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300 transition-all duration-300 transform group-hover:scale-105 shadow-sm"
              >
                <Icon className="w-6 h-6" />
              </div>
            ))}
          </div>

          {/* Metadata watermark */}
          <div className="absolute bottom-3 right-4 font-mono text-[10px] text-neutral-400 dark:text-white/30 tracking-widest uppercase">
            // READY FOR MEDIA
          </div>
          <div className="absolute top-3 left-4 font-mono text-[10px] text-red-600 dark:text-red-500/60 tracking-widest uppercase">
            SYS_SPEC: {badgeIndex}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#0F0F12] dark:text-white uppercase tracking-tight group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors mb-2">
          {title}
        </h3>
        <p className="font-montserrat font-semibold text-xs text-red-700 dark:text-red-400/90 uppercase tracking-wider mb-4">
          {subtitle}
        </p>

        {/* Description */}
        <p className="font-montserrat text-sm text-neutral-600 dark:text-white/70 leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* Highlights Pills Footer */}
      <div className="border-t border-black/10 dark:border-white/10 pt-6">
        <div className="text-[11px] font-montserrat font-semibold text-neutral-500 dark:text-white/40 uppercase tracking-widest mb-3">
          CORE FOCUS &amp; STACK
        </div>
        <div className="flex flex-wrap gap-2">
          {highlights.map((item, idx) => (
            <span
              key={idx}
              className="text-xs font-montserrat font-medium text-neutral-800 dark:text-white/80 bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-red-500/30 hover:text-black dark:hover:text-white transition-colors px-2.5 py-1"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
