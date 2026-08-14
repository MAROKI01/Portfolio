import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Sparkles } from 'lucide-react';

export const AcademicTimeline: React.FC = () => {
  const MILESTONES = [
    {
      degree: "Master’s Degree in Intelligent Processing Systems",
      institution: "Faculty of Sciences, Rabat",
      period: "2025–Present",
      status: "CURRENTLY ENROLLED",
      icon: GraduationCap,
      description: "Advanced Master's program specializing in artificial intelligence architectures, intelligent processing systems, deep neural network modeling, and computer vision data pipelines.",
      highlights: ["AI & Data Processing", "Machine Learning", "Neural Systems", "Computer Vision"]
    },
    {
      degree: "Software Engineering Program",
      institution: "1337 Coding School (42 Network), Ben Guerir",
      period: "2024–Present",
      status: "CURRENTLY ENROLLED",
      icon: BookOpen,
      description: "Intensive 42 Network software engineering curriculum focused on low-level C and C++ systems programming, POSIX threads & processes, Unix kernel mechanics, socket networking, and object-oriented architecture.",
      highlights: ["C / C++ Systems", "Unix Mechanics", "Network Sockets", "Object-Oriented Design"]
    },
    {
      degree: "Bachelor’s Degree",
      institution: "Faculty of Science and Technology (FST), Beni Mellal",
      period: "2021–2024",
      status: "COMPLETED",
      icon: Award,
      description: "Foundational computer science degree covering algorithms, object-oriented design, discrete mathematics, software engineering practices, and database management.",
      highlights: ["Computer Science Fundamentals", "Data Structures", "Mathematics", "Software Engineering"]
    }
  ];

  return (
    <div className="space-y-8 pt-8">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-red-600 dark:text-red-500" />
          <h4 className="font-montserrat font-extrabold text-xs text-red-700 dark:text-red-500 tracking-[0.25em] uppercase">
            EDUCATION &amp; PARCOURS
          </h4>
        </div>
        <h3 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#0F0F12] dark:text-white uppercase tracking-tight">
          ACADEMIC JOURNEY
        </h3>
      </div>

      <div className="relative border-l-2 border-red-600/40 dark:border-red-900/60 ml-3 sm:ml-5 space-y-10 pl-6 sm:pl-10 py-2">
        {MILESTONES.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative group">
              {/* Glowing Red Node on Timeline Axis */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#0A0A0A] border-2 border-red-600 flex items-center justify-center text-red-600 dark:text-red-500 group-hover:scale-125 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-[0_0_12px_rgba(178,31,53,0.5)]">
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              </div>

              {/* Milestone Card */}
              <div className="bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 group-hover:border-red-600/60 dark:group-hover:border-red-600/60 p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-xl relative overflow-hidden">
                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-red-100/30 dark:bg-red-950/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  {/* Date Badge & Status Tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 px-3 py-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>

                    <span className={`font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 border ${
                      item.status === 'COMPLETED'
                        ? 'border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-white/60'
                        : 'border-red-500/40 bg-red-100/60 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Degree Title & Institution */}
                  <div className="space-y-2">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="p-2.5 bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/40 text-red-600 dark:text-red-400 rounded shrink-0 mt-1 sm:mt-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-montserrat font-extrabold text-lg sm:text-xl text-[#0F0F12] dark:text-white uppercase tracking-tight group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                        {item.degree}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 font-montserrat font-semibold text-xs sm:text-sm text-neutral-700 dark:text-white/80 pt-1 pl-0.5">
                      <MapPin className="w-4 h-4 text-red-600 dark:text-red-500 shrink-0" />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-montserrat text-xs sm:text-sm text-neutral-600 dark:text-white/70 leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.highlights.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-montserrat font-medium text-neutral-700 dark:text-white/60 bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
