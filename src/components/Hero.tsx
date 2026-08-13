import React from 'react';
import { Cpu, ArrowUpRight, ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const STATS = [
    { value: "13+", label: "Projects" },
    { value: "3+", label: "AI / Data Projects" },
    { value: "10+", label: "Software & Systems Projects" },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#050505] text-white pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Video (Hardware-Accelerated, Optimized, Filter-Free) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
        />
        {/* Layer 1: Dark Translucent Pure Overlay (No CPU/GPU Backdrop Blur Filter) */}
        <div className="absolute inset-0 bg-[#050505]/75" />

        {/* Layer 2: Dark-Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#5C0A14]/30 to-transparent opacity-90" />

        {/* Layer 3: Vignette & Edge Shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_95%)] pointer-events-none" />

        {/* Subtle Tech Grid Lines */}
        <div className="absolute inset-0 tech-line-grid opacity-20 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 my-auto">
        {/* Tagline */}
        <div className="animate-fade-up flex items-center gap-3 text-white/70 text-xs sm:text-sm font-montserrat font-medium tracking-[0.3em] uppercase mb-6 sm:mb-8">
          <div className="p-1.5 rounded bg-red-950/60 border border-red-500/40 text-red-400">
            <Cpu className="w-4 h-4" />
          </div>
          <span>SOFTWARE ENGINEER • AI &amp; DATA</span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-up-delay-1 font-montserrat font-black uppercase leading-[0.88] tracking-[-0.04em] text-[clamp(3rem,8.5vw,7rem)] text-white mb-8 sm:mb-10 max-w-5xl">
          BUILD.
          <br />
          THINK.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500">
            ENGINEER.
          </span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up-delay-2 font-montserrat text-sm sm:text-base text-white/60 leading-relaxed max-w-lg mb-10 sm:mb-12">
          I build intelligent systems, scalable applications, and experimental digital experiences across AI, data, and software engineering.
        </p>

        {/* CTA & Projects Badge */}
        <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-6 sm:gap-8 mb-16 lg:mb-20">
          <button
            onClick={scrollToWork}
            className="bg-red-900 hover:bg-red-800 text-white px-8 py-4 font-montserrat font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(178,31,53,0.5)] flex items-center gap-3 border border-red-500/40 group cursor-pointer"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex flex-col border-l-2 border-red-800/60 pl-6 py-1 font-montserrat">
            <span className="text-xs font-bold tracking-widest text-white uppercase">13 PROJECTS</span>
            <span className="text-[11px] font-medium tracking-wider text-white/50 uppercase mt-0.5">
              AI • SOFTWARE • SYSTEMS
            </span>
          </div>
        </div>

        {/* Technical Stats Grid (Solid Hardware Accelerated Container) */}
        <div className="animate-fade-up-delay-4 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10 max-w-3xl">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-[#0A0A0A]/95 border border-white/10 p-5 sm:p-6 hover:border-red-900/60 transition-all duration-300 group"
            >
              <div className="font-montserrat font-black text-3xl sm:text-4xl text-white group-hover:text-red-500 transition-colors tracking-tight">
                {stat.value}
              </div>
              <div className="font-montserrat font-semibold text-xs text-white/60 tracking-wider uppercase mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-8 flex items-center justify-between text-xs text-white/40 font-montserrat tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>BASED IN ENGINEERING &amp; SYSTEMS</span>
        </div>
        <button 
          onClick={scrollToWork}
          className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
        >
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-4 h-4 text-red-500 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
