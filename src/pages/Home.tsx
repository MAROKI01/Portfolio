import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { CategoryCard } from '../components/CategoryCard';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import { Brain, Database, Sparkles, Cpu, Code2, Terminal, Layers, Network, Server } from 'lucide-react';

export const Home: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai-data' | 'software-engineering'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const aiDataCount = PROJECTS.filter(p => p.category === 'ai-data').length;
  const softwareCount = PROJECTS.filter(p => p.category === 'software-engineering').length;

  const AREAS = [
    { title: "Software Engineering", desc: "Clean architecture, modular C/C++, object-oriented design & robust software systems." },
    { title: "Artificial Intelligence", desc: "LLM agents, autonomous state graphs, vector search & retrieval-augmented generation." },
    { title: "Computer Vision", desc: "Real-time keyframe processing, face embeddings, detection models & vector search pipelines." },
    { title: "Backend Development", desc: "High-throughput APIs, RESTful services, microservices & secure cloud data synchronization." },
    { title: "Systems Programming", desc: "Graphics engines, memory alignment, raycasting, process execution & signal handling." },
    { title: "Algorithms & Complexity", desc: "Data structure optimizations, sorting algorithm benchmarks & dynamic space/time efficiency." },
    { title: "Networking & Sockets", desc: "RFC-compliant socket servers, non-blocking I/O multiplexing & real-time WebSockets." },
    { title: "Intelligent Applications", desc: "Cross-platform applications combining AI workflows, state management & fluid UX." }
  ];

  return (
    <div className="w-full bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] text-white dark:text-white light:text-[#0F0F12] transition-colors duration-300">
      {/* 1. CINEMATIC HERO */}
      <Hero />

      {/* 2. WHAT I BUILD SECTION */}
      <section className="relative w-full bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] py-20 sm:py-24 lg:py-32 border-t border-white/10 dark:border-white/10 light:border-black/10 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Subtle Atmospheric Red Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-950/15 dark:bg-red-950/15 light:bg-red-200/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 tech-line-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
          {/* Section Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <h2 className="font-montserrat font-extrabold text-xs sm:text-sm text-red-500 dark:text-red-500 light:text-red-700 tracking-[0.25em] uppercase">
                ENGINEERING DISCIPLINES
              </h2>
            </div>
            <h3 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white dark:text-white light:text-[#0F0F12]">
              WHAT I BUILD
            </h3>
            <p className="font-montserrat text-sm sm:text-base text-white/60 dark:text-white/60 light:text-neutral-600 max-w-2xl">
              Two disciplines. One engineering mindset. Focused on raw execution, low-level precision, and intelligent system design.
            </p>
          </div>

          {/* Two Large Category Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {/* Card 1: AI & DATA */}
            <CategoryCard
              id="ai-data"
              badgeIndex="01"
              title="AI & DATA"
              subtitle="INTELLIGENT SYSTEMS & EXPERIMENTS"
              description="Intelligent systems, computer vision engines, deep embedding search, autonomous LLM agents, and AI-powered data pipelines."
              highlights={["Artificial Intelligence", "Machine Learning", "Computer Vision", "LLMs", "Intelligent Agents", "Vector Search"]}
              icons={[Brain, Database, Sparkles, Cpu]}
              projectCount={aiDataCount}
              linkTo="/category/ai-data"
            />

            {/* Card 2: SOFTWARE ENGINEERING */}
            <CategoryCard
              id="software-engineering"
              badgeIndex="02"
              title="SOFTWARE ENGINEERING"
              subtitle="SYSTEMS, NETWORKING & ALGORITHMS"
              description="Systems programming in C and C++, backend networking servers, graphics engines, concurrent synchronization, and full-stack applications."
              highlights={["C", "C++", "Backend Sockets", "Networking", "Algorithms", "Concurrency", "Graphics Engine"]}
              icons={[Code2, Terminal, Layers, Network, Server, Cpu]}
              projectCount={softwareCount}
              linkTo="/category/software-engineering"
            />
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS GRID SECTION */}
      <section id="work" className="relative w-full bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] py-20 sm:py-24 lg:py-32 border-t border-white/10 dark:border-white/10 light:border-black/10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 dark:border-white/10 light:border-black/10 pb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <h2 className="font-montserrat font-extrabold text-xs sm:text-sm text-red-500 dark:text-red-500 light:text-red-700 tracking-[0.25em] uppercase">
                  PORTFOLIO ARCHIVE
                </h2>
              </div>
              <h3 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white dark:text-white light:text-[#0F0F12]">
                FEATURED PROJECTS
              </h3>
              <p className="font-montserrat text-sm text-white/60 dark:text-white/60 light:text-neutral-600 max-w-xl">
                Explore 13 complete engineering repositories spanning C/C++ systems, neural networks, WebSockets, graphics, and mobile apps.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`font-montserrat font-semibold text-xs tracking-widest uppercase px-5 py-3 border transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-red-900 border-red-500 text-white shadow-[0_0_20px_rgba(178,31,53,0.4)]'
                    : 'bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white border-white/12 dark:border-white/12 light:border-black/10 text-white/60 dark:text-white/60 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-black hover:border-white/30'
                }`}
              >
                ALL ({PROJECTS.length})
              </button>

              <button
                onClick={() => setFilter('ai-data')}
                className={`font-montserrat font-semibold text-xs tracking-widest uppercase px-5 py-3 border transition-all cursor-pointer ${
                  filter === 'ai-data'
                    ? 'bg-red-900 border-red-500 text-white shadow-[0_0_20px_rgba(178,31,53,0.4)]'
                    : 'bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white border-white/12 dark:border-white/12 light:border-black/10 text-white/60 dark:text-white/60 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-black hover:border-white/30'
                }`}
              >
                AI &amp; DATA ({aiDataCount})
              </button>

              <button
                onClick={() => setFilter('software-engineering')}
                className={`font-montserrat font-semibold text-xs tracking-widest uppercase px-5 py-3 border transition-all cursor-pointer ${
                  filter === 'software-engineering'
                    ? 'bg-red-900 border-red-500 text-white shadow-[0_0_20px_rgba(178,31,53,0.4)]'
                    : 'bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white border-white/12 dark:border-white/12 light:border-black/10 text-white/60 dark:text-white/60 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-black hover:border-white/30'
                }`}
              >
                SOFTWARE ({softwareCount})
              </button>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SECTION */}
      <section id="about" className="relative w-full bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white py-20 sm:py-24 lg:py-32 border-t border-white/10 dark:border-white/10 light:border-black/10 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <h2 className="font-montserrat font-extrabold text-xs sm:text-sm text-red-500 dark:text-red-500 light:text-red-700 tracking-[0.25em] uppercase">
                  BIOGRAPHY &amp; CAPABILITIES
                </h2>
              </div>
              <h3 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white dark:text-white light:text-[#0F0F12]">
                WHO I AM
              </h3>
              <p className="font-montserrat text-base sm:text-lg text-white/80 dark:text-white/80 light:text-neutral-800 leading-relaxed">
                I am <span className="text-white dark:text-white light:text-black font-bold">Noureddine</span>, a dedicated Software Engineer focused on building high-performance systems, intelligent AI applications, and robust backend architectures.
              </p>
              <p className="font-montserrat text-sm sm:text-base text-white/60 dark:text-white/60 light:text-neutral-600 leading-relaxed">
                My work spans low-level C/C++ memory mechanics, real-time socket networking, graphics engine algorithms, and cutting-edge machine learning pipelines with LLMs and computer vision models. I treat engineering as a craft—where architectural clarity, code elegance, and technical performance are non-negotiable.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] border border-white/12 dark:border-white/12 light:border-black/10 p-8 sm:p-10 border-l-4 border-l-red-600 space-y-6 red-glow-card shadow-md">
              <div className="font-montserrat font-extrabold text-xs text-red-400 dark:text-red-400 light:text-red-700 tracking-widest uppercase">
                ENGINEERING PROFILE
              </div>
              <div className="grid grid-cols-2 gap-6 text-xs font-montserrat">
                <div>
                  <div className="text-white/40 dark:text-white/40 light:text-neutral-500 uppercase font-semibold">PRIMARY FOCUS</div>
                  <div className="text-white dark:text-white light:text-[#0F0F12] font-bold mt-1">Systems &amp; AI Engineering</div>
                </div>
                <div>
                  <div className="text-white/40 dark:text-white/40 light:text-neutral-500 uppercase font-semibold">LANGUAGES</div>
                  <div className="text-white dark:text-white light:text-[#0F0F12] font-bold mt-1">C, C++, Python, TypeScript</div>
                </div>
                <div>
                  <div className="text-white/40 dark:text-white/40 light:text-neutral-500 uppercase font-semibold">AI FRAMEWORKS</div>
                  <div className="text-white dark:text-white light:text-[#0F0F12] font-bold mt-1">Mistral AI, PyTorch, LangGraph</div>
                </div>
                <div>
                  <div className="text-white/40 dark:text-white/40 light:text-neutral-500 uppercase font-semibold">REPOSITORIES</div>
                  <div className="text-white dark:text-white light:text-[#0F0F12] font-bold mt-1">13 Production Repos</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-between text-xs font-mono text-white/50 dark:text-white/50 light:text-neutral-500">
                <span>IDENTITY: NOUREDDINE</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Areas Grid */}
          <div className="space-y-8 pt-8 border-t border-white/10 dark:border-white/10 light:border-black/10">
            <h4 className="font-montserrat font-extrabold text-lg sm:text-xl text-white dark:text-white light:text-[#0F0F12] uppercase tracking-tight">
              CORE AREAS OF EXPERTISE
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AREAS.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] border border-white/10 dark:border-white/10 light:border-black/10 hover:border-red-600/40 p-6 transition-all duration-300 group shadow-sm"
                >
                  <div className="font-mono text-xs text-red-500 font-bold mb-3">
                    0{idx + 1}.
                  </div>
                  <h5 className="font-montserrat font-bold text-base text-white dark:text-white light:text-[#0F0F12] uppercase tracking-tight mb-2 group-hover:text-red-400 dark:group-hover:text-red-400 light:group-hover:text-red-700 transition-colors">
                    {area.title}
                  </h5>
                  <p className="font-montserrat text-xs text-white/60 dark:text-white/60 light:text-neutral-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
