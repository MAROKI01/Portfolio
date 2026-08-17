import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import { ProjectHero } from '../components/ProjectHero';
import { ProjectDetails } from '../components/ProjectDetails';
import { ArrowLeft } from 'lucide-react';

import { SEO } from '../components/SEO';

export const Project: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
        <SEO title="Project Not Found | Noureddine Tahadout" />
        <h1 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4">
          PROJECT NOT FOUND
        </h1>
        <p className="font-montserrat text-sm text-white/60 mb-8 max-w-md">
          The project repository standard you are searching for does not exist in Noureddine's portfolio database.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-red-900 border border-red-500 text-white px-6 py-3 font-montserrat font-semibold text-xs tracking-widest uppercase hover:bg-red-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOME</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#050505] text-white min-h-screen">
      <SEO
        title={`${project.title} - ${project.shortDescription} | Noureddine Tahadout`}
        description={project.description.length > 155 ? `${project.description.slice(0, 155)}...` : project.description}
        canonical={`https://noureddinetahadout.vercel.app/project/${project.id}`}
        ogImage={project.image || "/images/cub3d.jpg"}
      />

      {/* 1. Project Hero Header */}
      <ProjectHero project={project} />

      {/* 2. Detailed Technical Breakdown */}
      <ProjectDetails project={project} />
    </div>
  );
};
