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
      className="group relative block bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white border border-white/12 dark:border-white/12 light:border-black/10 hover:border-red-600/70 dark:hover:border-red-600/70 light:hover:border-red-600/70 p-6 sm:p-8 lg:p-10 transition-all duration-500 red-glow-hover flex flex-col justify-between overflow-hidden shadow-sm dark:shadow-none light:shadow-md"
    >
      {/* Background Dark-Red Glow & Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-950/30 dark:from-red-950/30 light:from-red-200/40 via-red-900/10 to-transparent rounded-full blur-3xl group-hover:from-red-900/40 transition-all duration-700 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-pattern opacity-10 pointer-events-none" />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-8 border-b border-white/10 dark:border-white/10 light:border-black/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-montserrat font-extrabold text-xs text-red-500 tracking-widest uppercase border border-red-900/60 dark:border-red-900/60 light:border-red-300 bg-red-950/40 dark:bg-red-950/40 light:bg-red-50 px-3 py-1">
              CATEGORY {badgeIndex}
            </span>
            <span className="text-xs font-montserrat font-medium text-white/50 dark:text-white/50 light:text-neutral-500 tracking-wider">
              {projectCount} PROJECTS
            </span>
          </div>

          <div className="w-10 h-10 border border-white/15 dark:border-white/15 light:border-black/15 bg-black/50 dark:bg-black/50 light:bg-neutral-100 flex items-center justify-center text-white/60 dark:text-white/60 light:text-neutral-700 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(178,31,53,0.4)]">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Dedicated Image / Abstract Technical Canvas Area */}
        <div className="relative w-full h-48 sm:h-56 mb-8 border border-white/10 dark:border-white/10 light:border-black/10 bg-black/60 dark:bg-black/60 light:bg-neutral-100 overflow-hidden flex items-center justify-center group-hover:border-red-900/50 transition-colors">
          {/* Subtle Abstract Technical Overlay Grid */}
          <div className="absolute inset-0 tech-line-grid opacity-30" />
          
          {/* Animated Ambient Red Glow Center */}
          <div className="absolute w-40 h-40 bg-gradient-to-r from-red-950/60 dark:from-red-950/60 light:from-red-300/40 to-red-900/40 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

          {/* Icons Grid Render inside empty container */}
          <div className="relative z-10 grid grid-cols-2 gap-6 p-6">
            {Icons.map((Icon, idx) => (
              <div 
                key={idx}
                className="p-3 bg-[#050505]/90 dark:bg-[#050505]/90 light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 group-hover:border-red-500/40 rounded text-red-400 dark:text-red-400 light:text-red-700 group-hover:text-red-300 transition-all duration-300 transform group-hover:scale-105 shadow-sm"
              >
                <Icon className="w-6 h-6" />
              </div>
            ))}
          </div>

          {/* Metadata watermark */}
          <div className="absolute bottom-3 right-4 font-mono text-[10px] text-white/30 dark:text-white/30 light:text-neutral-400 tracking-widest uppercase">
            // READY FOR MEDIA
          </div>
          <div className="absolute top-3 left-4 font-mono text-[10px] text-red-500/60 tracking-widest uppercase">
            SYS_SPEC: {badgeIndex}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white dark:text-white light:text-[#0F0F12] uppercase tracking-tight group-hover:text-red-400 dark:group-hover:text-red-400 light:group-hover:text-red-700 transition-colors mb-2">
          {title}
        </h3>
        <p className="font-montserrat font-semibold text-xs text-red-400/90 dark:text-red-400/90 light:text-red-700 uppercase tracking-wider mb-4">
          {subtitle}
        </p>

        {/* Description */}
        <p className="font-montserrat text-sm text-white/70 dark:text-white/70 light:text-neutral-600 leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* Highlights Pills Footer */}
      <div className="border-t border-white/10 dark:border-white/10 light:border-black/10 pt-6">
        <div className="text-[11px] font-montserrat font-semibold text-white/40 dark:text-white/40 light:text-neutral-500 uppercase tracking-widest mb-3">
          CORE FOCUS &amp; STACK
        </div>
        <div className="flex flex-wrap gap-2">
          {highlights.map((item, idx) => (
            <span
              key={idx}
              className="text-xs font-montserrat font-medium text-white/80 dark:text-white/80 light:text-neutral-800 bg-white/5 dark:bg-white/5 light:bg-neutral-100 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-red-500/30 hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
