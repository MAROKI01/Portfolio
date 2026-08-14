import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProjectsByCategory } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { ArrowLeft, Brain, Code2 } from 'lucide-react';

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
      title: 'AI & DATA',
      subtitle: 'INTELLIGENT SYSTEMS & DATA-DRIVEN SOFTWARE',
      description: 'Intelligent systems, machine learning experiments, computer vision pipelines, autonomous agent graphs, and high-performance data processing software.',
      icon: Brain,
      color: 'from-red-950/40 via-[#050505] to-[#050505] dark:from-red-950/40 dark:via-[#050505] dark:to-[#050505] light:from-red-100/50 light:via-[#F8F9FA] light:to-[#F8F9FA]'
    },
    'software-engineering': {
      title: 'SOFTWARE ENGINEERING',
      subtitle: 'SYSTEMS, APPLICATIONS, ALGORITHMS & INFRASTRUCTURE',
      description: 'Low-level systems programming in C/C++, graphics raycasting engines, RFC-compliant socket servers, process synchronization, WebSockets, and full-stack applications.',
      icon: Code2,
      color: 'from-red-950/40 via-[#050505] to-[#050505] dark:from-red-950/40 dark:via-[#050505] dark:to-[#050505] light:from-red-100/50 light:via-[#F8F9FA] light:to-[#F8F9FA]'
    }
  };

  if (!isValidCategory) {
    return (
      <div className="min-h-screen bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] text-white dark:text-white light:text-[#0F0F12] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-montserrat font-black text-4xl text-white dark:text-white light:text-black mb-4">CATEGORY NOT FOUND</h1>
        <p className="font-montserrat text-sm text-white/60 dark:text-white/60 light:text-neutral-600 mb-8">The requested discipline category does not exist.</p>
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

  return (
    <div className="w-full bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] text-white dark:text-white light:text-[#0F0F12] min-h-screen pt-28 sm:pt-36 pb-24 transition-colors duration-300">
      {/* Category Hero Header */}
      <section className="relative w-full border-b border-white/10 dark:border-white/10 light:border-black/10 px-6 sm:px-10 lg:px-16 pb-16 lg:pb-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${currentHeader.color} pointer-events-none`} />
        <div className="absolute inset-0 tech-line-grid opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8">
          {/* Back Navigation */}
          <div>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-xs font-montserrat font-semibold tracking-widest text-white/60 dark:text-white/60 light:text-neutral-700 hover:text-white dark:hover:text-white light:hover:text-black uppercase transition-colors group border border-white/10 dark:border-white/10 light:border-black/10 hover:border-red-500/50 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white px-4 py-2 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-red-500 group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO WORK</span>
            </button>
          </div>

          {/* Title & Badge */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-950/60 dark:bg-red-950/60 light:bg-red-50 border border-red-500/40 text-red-400 dark:text-red-400 light:text-red-700 rounded">
                <CategoryIcon className="w-5 h-5" />
              </div>
              <span className="font-montserrat font-extrabold text-xs text-red-500 dark:text-red-500 light:text-red-700 tracking-[0.25em] uppercase">
                {projects.length} REPOSITORIES
              </span>
            </div>

            <h1 className="font-montserrat font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-white dark:text-white light:text-[#0F0F12] tracking-tight leading-none">
              {currentHeader.title}
            </h1>

            <p className="font-montserrat font-bold text-xs sm:text-sm text-red-400 dark:text-red-400 light:text-red-700 uppercase tracking-widest">
              {currentHeader.subtitle}
            </p>

            <p className="font-montserrat text-sm sm:text-base text-white/70 dark:text-white/70 light:text-neutral-600 leading-relaxed max-w-2xl pt-2">
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
