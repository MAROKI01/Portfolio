import React, { useState, useEffect, useRef } from 'react';
import { Cpu, ArrowUpRight, ArrowDown, Video, VideoOff } from 'lucide-react';

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
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F8F9FA] dark:bg-[#050505] text-[#0F0F12] dark:text-white pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24 transition-colors duration-300"
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
              className="absolute inset-0 w-full h-full object-cover transform-gpu opacity-100 dark:opacity-100"
            />
            {/* Overlay depending on mode */}
            <div className="absolute inset-0 bg-white/80 dark:bg-[#050505]/60" />
          </>
        ) : (
          /* Pure CSS High-Performance Technical Canvas (0% CPU/GPU Overhead) */
          <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-red-50/50 to-[#F8F9FA] dark:from-[#050505] dark:via-[#120306] dark:to-[#050505]">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-200/30 dark:bg-red-950/25 rounded-full blur-[140px]" />
          </div>
        )}

        {/* Layer 2: Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] dark:from-[#050505] via-red-900/10 dark:via-[#5C0A14]/30 to-transparent opacity-90" />

        {/* Layer 3: Vignette & Edge Shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#F8F9FA_95%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_95%)] pointer-events-none" />

        {/* Subtle Tech Grid Lines */}
        <div className="absolute inset-0 tech-line-grid opacity-20 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 my-auto">
        {/* Tagline & Performance Mode Toggle */}
        <div className="animate-fade-up flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
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
                <span>VIDEO: ON (CLICK FOR PERFORMANCE MODE)</span>
              </>
            ) : (
              <>
                <VideoOff className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span>PERFORMANCE MODE (VIDEO OFF)</span>
              </>
            )}
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-up-delay-1 font-montserrat font-black uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(3rem,8.5vw,7rem)] text-[#0F0F12] dark:text-white mb-8 sm:mb-10 max-w-5xl">
          BUILD.
          <br />
          THINK.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F0F12] via-neutral-800 to-red-600 dark:from-white dark:via-white dark:to-red-500">
            ENGINEER.
          </span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up-delay-2 font-montserrat text-sm sm:text-base text-neutral-600 dark:text-white/60 leading-relaxed max-w-lg mb-10 sm:mb-12">
          I build intelligent systems, scalable applications, and experimental digital experiences across AI, data, and software engineering.
        </p>

        {/* CTA & Projects Badge */}
        <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-6 sm:gap-8 mb-16 lg:mb-20">
          <button
            onClick={scrollToWork}
            className="bg-red-900 hover:bg-red-800 text-white px-8 py-4 font-montserrat font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(178,31,53,0.5)] flex items-center gap-3 border border-red-500/40 group cursor-pointer pointer-events-auto"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex flex-col border-l-2 border-red-600 dark:border-red-800/60 pl-6 py-1 font-montserrat">
            <span className="text-xs font-bold tracking-widest text-[#0F0F12] dark:text-white uppercase">13 PROJECTS</span>
            <span className="text-[11px] font-medium tracking-wider text-neutral-500 dark:text-white/50 uppercase mt-0.5">
              AI • SOFTWARE • SYSTEMS
            </span>
          </div>
        </div>

        {/* Technical Stats Grid */}
        <div className="animate-fade-up-delay-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-black/10 dark:border-white/10 max-w-3xl">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#0A0A0A]/95 border border-black/10 dark:border-white/10 p-5 sm:p-6 hover:border-red-600 dark:hover:border-red-900/60 transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div className="font-montserrat font-black text-3xl sm:text-4xl text-[#0F0F12] dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors tracking-tight">
                {stat.value}
              </div>
              <div className="font-montserrat font-semibold text-xs text-neutral-500 dark:text-white/60 tracking-wider uppercase mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-8 flex items-center justify-between text-xs text-neutral-500 dark:text-white/40 font-montserrat tracking-widest uppercase">
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
