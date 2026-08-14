import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowUpRight, ArrowDown, Video, VideoOff, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const [videoEnabled, setVideoEnabled] = useState<boolean>(() => {
    const saved = localStorage.getItem('hero_video_enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleVideo = () => {
    setVideoEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('hero_video_enabled', JSON.stringify(next));
      return next;
    });
  };

  // Pause video when hero section scrolls out of view or tab is inactive
  useEffect(() => {
    if (!videoEnabled || !videoRef.current || !heroRef.current) return;

    const videoEl = videoRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(heroRef.current);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoEl.pause();
      } else if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          videoEl.play().catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [videoEnabled]);

  const STATS = [
    { value: "13+", label: "Projects" },
    { value: "3+", label: "AI / Data Projects" },
    { value: "10+", label: "Software & Systems Projects" },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F8F9FA] dark:bg-[#050505] text-[#0F0F12] dark:text-white pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 transition-colors duration-300"
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {videoEnabled ? (
          <>
            <video
              ref={videoRef}
              src="/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover transform-gpu opacity-100"
            />
            {/* Fixed 80% Ambient Base Shade */}
            <div className="absolute inset-0 bg-[#F8F9FA] dark:bg-[#050505] opacity-55 pointer-events-none" />
            {/* Fixed 80% Radial Vignette Frame */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#F8F9FA_95%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_25%,#050505_95%)] opacity-80 pointer-events-none" />
          </>
        ) : (
          /* Pure CSS High-Performance Technical Canvas (0% CPU/GPU Overhead) */
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-red-50/50 to-[#F8F9FA] dark:from-[#050505] dark:via-[#120306] dark:to-[#050505]">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-200/30 dark:bg-red-950/25 rounded-full blur-[140px]" />
          </div>
        )}

        {/* Subtle Tech Grid Lines */}
        <div className="absolute inset-0 tech-line-grid opacity-15 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 my-auto">
        {/* Tagline & Performance Mode Toggle */}
        <div className="animate-fade-up flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 text-neutral-700 dark:text-white/70 text-xs sm:text-sm font-montserrat font-medium tracking-[0.3em] uppercase">
            <div className="p-1.5 rounded bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-500/40 text-red-700 dark:text-red-400">
              <Cpu className="w-4 h-4" />
            </div>
            <span>SOFTWARE ENGINEER • AI &amp; DATA</span>
          </div>

          {/* Toggle Video Button (Low Power / High Performance Mode) */}
          <button
            onClick={toggleVideo}
            title="Toggle video background for low power mode"
            className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase border border-black/15 dark:border-white/15 hover:border-red-500 bg-white/90 dark:bg-[#0A0A0A]/90 text-neutral-800 dark:text-white/70 hover:text-black dark:hover:text-white px-3 py-1.5 rounded transition-all cursor-pointer pointer-events-auto shadow-sm"
          >
            {videoEnabled ? (
              <>
                <Video className="w-3.5 h-3.5 text-red-600 dark:text-red-500" />
                <span>VIDEO: ON</span>
              </>
            ) : (
              <>
                <VideoOff className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span>PERFORMANCE MODE</span>
              </>
            )}
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-up-delay-1 font-montserrat font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(2.5rem,6.5vw,5.2rem)] text-[#0F0F12] dark:text-white mb-4 sm:mb-6 max-w-5xl">
          BUILD.
          <br />
          THINK.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F0F12] via-neutral-800 to-red-600 dark:from-white dark:via-white dark:to-red-500">
            ENGINEER.
          </span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up-delay-2 font-montserrat text-sm sm:text-base text-neutral-600 dark:text-white/60 leading-relaxed max-w-lg mb-6 sm:mb-8">
          I build intelligent systems, scalable applications, and experimental digital experiences across AI, data, and software engineering.
        </p>

        {/* CTA & Projects Badge */}
        <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 sm:gap-6 mb-8 lg:mb-10">
          <button
            onClick={scrollToWork}
            className="bg-red-900 hover:bg-red-800 text-white px-7 py-3.5 font-montserrat font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(178,31,53,0.5)] flex items-center gap-3 border border-red-500/40 group cursor-pointer pointer-events-auto"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          {/* Contact Button taking visitor to Contact Page */}
          <Link
            to="/contact"
            className="bg-white dark:bg-[#0A0A0A] hover:bg-neutral-100 dark:hover:bg-red-950/40 text-[#0F0F12] dark:text-white border border-black/15 dark:border-white/20 hover:border-red-500 px-7 py-3.5 font-montserrat font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-sm flex items-center gap-2.5 group pointer-events-auto"
          >
            <Mail className="w-4 h-4 text-red-600 dark:text-red-500 group-hover:scale-110 transition-transform" />
            <span>CONTACT ME</span>
          </Link>

          <div className="flex flex-col border-l-2 border-red-600 dark:border-red-800/60 pl-6 py-0.5 font-montserrat">
            <span className="text-xs font-bold tracking-widest text-[#0F0F12] dark:text-white uppercase">13 PROJECTS</span>
            <span className="text-[11px] font-medium tracking-wider text-neutral-500 dark:text-white/50 uppercase mt-0.5">
              AI • SOFTWARE • SYSTEMS
            </span>
          </div>
        </div>

        {/* Technical Stats Grid */}
        <div className="animate-fade-up-delay-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 pt-6 border-t border-black/10 dark:border-white/10 max-w-3xl">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/90 dark:bg-[#0A0A0A]/95 border border-black/10 dark:border-white/10 p-4 sm:p-5 hover:border-red-600 dark:hover:border-red-900/60 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="font-montserrat font-black text-2xl sm:text-3xl text-[#0F0F12] dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors tracking-tight">
                {stat.value}
              </div>
              <div className="font-montserrat font-semibold text-[11px] text-neutral-500 dark:text-white/60 tracking-wider uppercase mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-6 flex items-center justify-between text-xs text-neutral-500 dark:text-white/40 font-montserrat tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>BASED IN ENGINEERING &amp; SYSTEMS</span>
        </div>
        <button 
          onClick={scrollToWork}
          className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors cursor-pointer pointer-events-auto"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-4 h-4 text-red-500 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
