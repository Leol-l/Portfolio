import React from "react";
import { motion } from "motion/react";
import { ChevronRight, GraduationCap, Briefcase, Clock, ExternalLink, Github as GithubIcon } from "lucide-react";
import { Link } from "react-router-dom";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'perso' | 'etude' | 'pro';
  image: string;
  fullDescription?: string;
  link?: string;
  github?: string;
  objectives?: string[];
  date?: string;
  additionalImages?: string[];
}

export const Section = ({ children, className = "", id = "", title = "", subtitle = "" }: { children: React.ReactNode, className?: string, id?: string, title?: string, subtitle?: string }) => (
  <section id={id} className={`py-32 ${className}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      {title && (
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-indigo-600"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-400">{subtitle || "SECTION"}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-white">{title}</h2>
        </div>
      )}
      {children}
    </div>
  </section>
);

export const ProjectCard = ({ project }: { project: Project, key?: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-slate-900/40 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-indigo-900/20 flex flex-col h-full hover:border-indigo-600/50"
  >
    <Link to={`/projets/${project.id}`} className="flex flex-col h-full">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-indigo-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
          <span className="bg-white text-slate-950 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform">
            Voir les Détails
          </span>
        </div>
      </div>
      <div className="p-10 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
            project.category === 'pro' ? 'text-emerald-400 bg-emerald-950/50 border-emerald-900/30' :
            project.category === 'etude' ? 'text-blue-400 bg-blue-950/50 border-blue-900/30' :
            'text-amber-400 bg-amber-950/50 border-amber-900/30'
          }`}>
            {project.category}
          </span>
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/50 px-3 py-1 rounded-full border border-indigo-900/30">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-slate-400 mb-8 leading-relaxed flex-grow line-clamp-3">{project.description}</p>
        <div className="flex items-center text-sm font-bold text-white group-hover:gap-4 transition-all">
          En savoir plus <ChevronRight className="ml-2 w-4 h-4 text-indigo-400" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export const ProjectGrid = ({ projects, className = "" }: { projects: Project[], className?: string }) => {
  return (
    <div className={`grid ${className}`}>
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
        />
      ))}
    </div>
  );
};

export const ExperienceItem = ({ year, title, company, description, type, time }: { year: string, title: string, company: string, description: string, type: 'edu' | 'work', time?: string }) => (
  <div className="relative pl-12 pb-16 last:pb-0 border-l border-indigo-900/30 ml-4 group">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-600 group-hover:scale-150 group-hover:bg-indigo-600 transition-all duration-300 shadow-[0_0_0_4px_rgba(99,102,241,0.1)]"></div>
    <div className="bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-indigo-900/20 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-indigo-600/50">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <span className="text-sm font-bold text-indigo-400 bg-indigo-950/50 px-4 py-1.5 rounded-full border border-indigo-900/30">{year}</span>
        <div className="flex items-center gap-4">
          {time && (
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{time}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-slate-500">
            {type === 'edu' ? <GraduationCap className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
            <span className="text-[10px] font-bold uppercase tracking-widest">{type === 'edu' ? 'Formation' : 'Expérience'}</span>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-display font-bold mb-2 text-white">{title}</h3>
      <p className="text-lg font-medium text-slate-300 mb-4">{company}</p>
      <p className="text-slate-400 leading-relaxed max-w-3xl">{description}</p>
    </div>
  </div>
);
