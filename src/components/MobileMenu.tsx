import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isOpen) return null;

  const handleNavClick = (path: string, hash?: string) => {
    onClose();
    if (hash) {
      if (location.pathname !== '/') {
        navigate(`/${hash}`);
      } else {
        const elem = document.querySelector(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between px-6 py-8 sm:p-10 animate-fade-in border-b border-red-900/30">
      {/* Background dark-red subtle atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5C0A14]/20 via-transparent to-black/80 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
        <Link 
          to="/" 
          onClick={onClose}
          className="font-montserrat font-extrabold text-2xl sm:text-3xl tracking-wider text-white uppercase"
        >
          NOUREDDINE
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-white/80 hover:text-white transition-colors border border-white/10 rounded-md hover:border-red-500/50"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className="relative z-10 flex flex-col space-y-6 my-auto py-8">
        <button
          onClick={() => handleNavClick('/', '#work')}
          className="text-left font-montserrat font-extrabold text-3xl sm:text-4xl text-white/80 hover:text-white hover:translate-x-2 transition-all uppercase tracking-wider flex items-center justify-between group"
        >
          <span>WORK</span>
          <span className="text-xs font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">01</span>
        </button>

        <button
          onClick={() => handleNavClick('/category/ai-data')}
          className="text-left font-montserrat font-extrabold text-3xl sm:text-4xl text-white/80 hover:text-white hover:translate-x-2 transition-all uppercase tracking-wider flex items-center justify-between group"
        >
          <span>AI &amp; DATA</span>
          <span className="text-xs font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">02</span>
        </button>

        <button
          onClick={() => handleNavClick('/category/software-engineering')}
          className="text-left font-montserrat font-extrabold text-3xl sm:text-4xl text-white/80 hover:text-white hover:translate-x-2 transition-all uppercase tracking-wider flex items-center justify-between group"
        >
          <span>SOFTWARE</span>
          <span className="text-xs font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">03</span>
        </button>

        <button
          onClick={() => handleNavClick('/', '#about')}
          className="text-left font-montserrat font-extrabold text-3xl sm:text-4xl text-white/80 hover:text-white hover:translate-x-2 transition-all uppercase tracking-wider flex items-center justify-between group"
        >
          <span>ABOUT</span>
          <span className="text-xs font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">04</span>
        </button>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 border-t border-white/10 pt-6">
        <a
          href="https://github.com/MAROKI01"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full flex items-center justify-center gap-3 border border-red-500/40 hover:border-red-500 bg-red-900/20 hover:bg-red-900/40 px-6 py-4 font-montserrat font-semibold text-sm tracking-widest text-white uppercase transition-all duration-300"
        >
          <GithubIcon className="w-5 h-5 text-red-500" />
          <span>GITHUB</span>
          <ArrowUpRight className="w-4 h-4 text-red-400" />
        </a>
      </div>
    </div>
  );
};
