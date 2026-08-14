import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import { GithubIcon } from './Icons';
import { MobileMenu } from './MobileMenu';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, path: string, hash?: string) => {
    e.preventDefault();
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
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#050505]/95 dark:bg-[#050505]/95 light:bg-white/95 border-b border-white/10 dark:border-white/10 light:border-black/10 py-4 lg:py-5 shadow-2xl' 
            : 'bg-gradient-to-b from-[#050505]/90 dark:from-[#050505]/90 light:from-white/90 via-[#050505]/40 dark:via-[#050505]/40 light:via-white/40 to-transparent py-5 lg:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Left Brand */}
          <Link 
            to="/" 
            className="font-montserrat font-extrabold text-2xl sm:text-3xl tracking-wider text-white dark:text-white light:text-[#0F0F12] uppercase flex items-center gap-2 group"
          >
            <span>NOUREDDINE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:animate-ping" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <a
              href="#work"
              onClick={(e) => handleNavClick(e, '/', '#work')}
              className="font-montserrat font-semibold text-sm text-white/70 dark:text-white/70 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-[#0F0F12] tracking-widest uppercase relative py-1 transition-colors group"
            >
              WORK
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#B21F35]" />
            </a>

            <Link
              to="/category/ai-data"
              className={`font-montserrat font-semibold text-sm tracking-widest uppercase relative py-1 transition-colors group ${
                location.pathname === '/category/ai-data' 
                  ? 'text-white dark:text-white light:text-[#0F0F12]' 
                  : 'text-white/70 dark:text-white/70 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-[#0F0F12]'
              }`}
            >
              AI &amp; DATA
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 shadow-[0_0_8px_#B21F35] ${
                location.pathname === '/category/ai-data' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            <Link
              to="/category/software-engineering"
              className={`font-montserrat font-semibold text-sm tracking-widest uppercase relative py-1 transition-colors group ${
                location.pathname === '/category/software-engineering' 
                  ? 'text-white dark:text-white light:text-[#0F0F12]' 
                  : 'text-white/70 dark:text-white/70 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-[#0F0F12]'
              }`}
            >
              SOFTWARE
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 shadow-[0_0_8px_#B21F35] ${
                location.pathname === '/category/software-engineering' ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>

            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '/', '#about')}
              className="font-montserrat font-semibold text-sm text-white/70 dark:text-white/70 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-[#0F0F12] tracking-widest uppercase relative py-1 transition-colors group"
            >
              ABOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#B21F35]" />
            </a>
          </nav>

          {/* Right CTA & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2.5 border border-white/15 dark:border-white/15 light:border-black/15 bg-white/5 dark:bg-white/5 light:bg-black/5 hover:border-red-500 text-white dark:text-white light:text-[#0F0F12] transition-all duration-300 flex items-center justify-center cursor-pointer group"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-red-600 group-hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Desktop Github Link */}
            <div className="hidden md:flex items-center">
              <a
                href="https://github.com/MAROKI01"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-red-500/40 hover:border-red-500 hover:bg-red-900/20 dark:hover:bg-red-900/20 light:hover:bg-red-50 px-6 py-3 font-montserrat font-semibold text-xs tracking-widest text-white dark:text-white light:text-[#0F0F12] uppercase transition-all duration-300 flex items-center gap-2 group shadow-[0_0_15px_rgba(92,10,20,0.2)] hover:shadow-[0_0_20px_rgba(178,31,53,0.4)]"
              >
                <GithubIcon className="w-4 h-4 text-red-500 group-hover:text-red-400 transition-colors" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/60 dark:text-white/60 light:text-neutral-600 group-hover:text-white dark:group-hover:text-white light:group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none group border border-white/10 dark:border-white/10 light:border-black/10 p-2 rounded"
            >
              <span className="w-6 h-0.5 bg-white dark:bg-white light:bg-black group-hover:bg-red-500 transition-colors" />
              <span className="w-6 h-0.5 bg-white dark:bg-white light:bg-black group-hover:bg-red-500 transition-colors" />
              <span className="w-6 h-0.5 bg-white dark:bg-white light:bg-black group-hover:bg-red-500 transition-colors" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
