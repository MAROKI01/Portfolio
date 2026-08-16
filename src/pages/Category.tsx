import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectsByCategory } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowLeft, Brain, Code2 } from 'lucide-react';

import { SEO } from '../components/SEO';

export const Category: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const isValidCategory = categoryId === 'ai-data' || categoryId === 'software-engineering';
  const categoryType = categoryId as 'ai-data' | 'software-engineering';

  const projects = isValidCategory ? getProjectsByCategory(categoryType) : [];

  const headers = {
    'ai-data': {
      title: 'AI & DATA PROJECTS',
      subtitle: 'INTELLIGENT SYSTEMS & DATA-DRIVEN SOFTWARE',
      description: 'Intelligent systems, machine learning experiments, computer vision pipelines, autonomous agent graphs, and high-performance data processing software built by Noureddine Tahadout.',
      icon: Brain,
      color: 'from-red-100/50 via-[#F8F9FA] to-[#F8F9FA] dark:from-red-950/40 dark:via-[#050505] dark:to-[#050505]'
    },
    'software-engineering': {
      title: 'SOFTWARE ENGINEERING PROJECTS',
      subtitle: 'SYSTEMS, APPLICATIONS, ALGORITHMS & INFRASTRUCTURE',
      description: 'Low-level systems programming in C/C++, graphics raycasting engines, RFC-compliant socket servers, process synchronization, WebSockets, and full-stack applications built by Noureddine Tahadout.',
      icon: Code2,
      color: 'from-red-100/50 via-[#F8F9FA] to-[#F8F9FA] dark:from-red-950/40 dark:via-[#050505] dark:to-[#050505]'
    }
  };

  if (!isValidCategory) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] dark:bg-[#050505] text-[#0F0F12] dark:text-white flex flex-col items-center justify-center p-6 text-center">
        <SEO title="Category Not Found | Noureddine Tahadout" />
        <h1 className="font-montserrat font-black text-4xl text-[#0F0F12] dark:text-white mb-4">CATEGORY NOT FOUND</h1>
        <p className="font-montserrat text-sm text-neutral-600 dark:text-white/60 mb-8">The requested discipline category does not exist.</p>
        <Link
          to="/"
          className="bg-red-900 border border-red-500 text-white px-6 py-3 font-montserrat font-semibold text-xs tracking-widest uppercase"
        >
          RETURN TO HOME
        </Link>
      </div>
    );
  }

  const currentHeader = headers[categoryType];
  const CategoryIcon = currentHeader.icon;
  const pageTitle = `${currentHeader.title} | Noureddine Tahadout`;

  return (
    <div className="w-full bg-[#F8F9FA] dark:bg-[#050505] text-[#0F0F12] dark:text-white min-h-screen pt-28 sm:pt-36 pb-24 transition-colors duration-300">
      <SEO
        title={pageTitle}
        description={currentHeader.description}
        canonical={`https://noureddinetahadout.com/category/${categoryId}`}
      />

      {/* Category Hero Header */}
      <section className="relative w-full border-b border-black/10 dark:border-white/10 px-6 sm:px-10 lg:px-16 pb-16 lg:pb-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${currentHeader.color} pointer-events-none`} />
        <div className="absolute inset-0 tech-line-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          {/* Back Navigation */}
          <div>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-xs font-montserrat font-semibold tracking-widest text-neutral-700 dark:text-white/60 hover:text-black dark:hover:text-white uppercase transition-colors group border border-black/10 dark:border-white/10 hover:border-red-500/50 bg-white dark:bg-[#0A0A0A] px-4 py-2 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-red-600 dark:text-red-500 group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO WORK</span>
            </button>
          </div>

          {/* Title & Badge */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 dark:bg-red-950/60 border border-red-300 dark:border-red-500/40 text-red-700 dark:text-red-400 rounded">
                <CategoryIcon className="w-5 h-5" />
              </div>
              <span className="font-montserrat font-extrabold text-xs text-red-700 dark:text-red-500 tracking-[0.25em] uppercase">
                {projects.length} REPOSITORIES BY NOUREDDINE TAHADOUT
              </span>
            </div>

            <h1 className="font-montserrat font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-[#0F0F12] dark:text-white tracking-tight leading-none">
              {currentHeader.title}
            </h1>

            <p className="font-montserrat font-bold text-xs sm:text-sm text-red-700 dark:text-red-400 uppercase tracking-widest">
              {currentHeader.subtitle}
            </p>

            <p className="font-montserrat text-sm sm:text-base text-neutral-600 dark:text-white/70 leading-relaxed max-w-2xl pt-2">
              {currentHeader.description}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};
