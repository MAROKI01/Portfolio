import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050505] dark:bg-[#050505] light:bg-[#F0F1F5] text-white dark:text-white light:text-[#0F0F12] border-t border-white/10 dark:border-white/10 light:border-black/10 pt-16 sm:pt-20 pb-12 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Dark Red Atmospheric Ambient Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-950/20 dark:bg-red-950/20 light:bg-red-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 tech-line-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 border-b border-white/10 dark:border-white/10 light:border-black/10 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link 
              to="/" 
              className="font-montserrat font-black text-2xl sm:text-3xl tracking-wider text-white dark:text-white light:text-[#0F0F12] uppercase inline-block hover:text-red-400 dark:hover:text-red-400 light:hover:text-red-700 transition-colors"
            >
              NOUREDDINE
            </Link>
            <p className="font-montserrat font-semibold text-xs sm:text-sm text-red-500 dark:text-red-500 light:text-red-700 tracking-[0.25em] uppercase flex items-center gap-2">
              <Cpu className="w-4 h-4 text-red-500 dark:text-red-500 light:text-red-700" />
              <span>SOFTWARE ENGINEER • AI &amp; DATA</span>
            </p>
            <p className="font-montserrat text-sm text-white/60 dark:text-white/60 light:text-neutral-600 leading-relaxed max-w-md pt-2">
              Architecting high-performance software systems, computer vision engines, and intelligent agent workflows with relentless focus on engineering quality.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-montserrat font-extrabold text-xs text-white dark:text-white light:text-[#0F0F12] uppercase tracking-widest border-b border-white/10 dark:border-white/10 light:border-black/10 pb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-montserrat text-xs text-white/60 dark:text-white/60 light:text-neutral-600 tracking-wider uppercase">
              <li>
                <Link to="/" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors hover:translate-x-1 inline-block">
                  HOME / WORK
                </Link>
              </li>
              <li>
                <Link to="/category/ai-data" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors hover:translate-x-1 inline-block">
                  AI &amp; DATA PROJECTS
                </Link>
              </li>
              <li>
                <Link to="/category/software-engineering" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors hover:translate-x-1 inline-block">
                  SOFTWARE ENGINEERING
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors hover:translate-x-1 inline-block">
                  ABOUT NOUREDDINE
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-montserrat font-extrabold text-xs text-white dark:text-white light:text-[#0F0F12] uppercase tracking-widest border-b border-white/10 dark:border-white/10 light:border-black/10 pb-2">
              CONNECT
            </h4>
            <div className="flex flex-col space-y-3 font-montserrat text-xs tracking-widest uppercase">
              <a
                href="https://github.com/MAROKI01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white hover:border-red-500/50 hover:bg-red-950/20 dark:hover:bg-red-950/20 light:hover:bg-red-50 text-white/80 dark:text-white/80 light:text-neutral-800 hover:text-white dark:hover:text-white light:hover:text-black transition-all group shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-red-500" />
                  <span>GITHUB</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 dark:text-white/40 light:text-neutral-500 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white hover:border-red-500/50 hover:bg-red-950/20 dark:hover:bg-red-950/20 light:hover:bg-red-50 text-white/80 dark:text-white/80 light:text-neutral-800 hover:text-white dark:hover:text-white light:hover:text-black transition-all group shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-red-500" />
                  <span>LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 dark:text-white/40 light:text-neutral-500 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="mailto:contact@noureddine.dev"
                className="flex items-center justify-between p-3 border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white hover:border-red-500/50 hover:bg-red-950/20 dark:hover:bg-red-950/20 light:hover:bg-red-50 text-white/80 dark:text-white/80 light:text-neutral-800 hover:text-white dark:hover:text-white light:hover:text-black transition-all group shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>EMAIL</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 dark:text-white/40 light:text-neutral-500 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-montserrat text-white/40 dark:text-white/40 light:text-neutral-500 uppercase tracking-widest">
          <div>
            &copy; 2026 NOUREDDINE. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors flex items-center gap-2 cursor-pointer border border-white/10 dark:border-white/10 light:border-black/10 px-3 py-1.5 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white shadow-sm"
          >
            <span>BACK TO TOP</span>
            <span className="text-red-500 font-bold">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
