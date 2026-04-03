import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, ExternalLink, Github as GithubIcon, Calendar, Tag, Terminal } from "lucide-react";
import { Layout } from "../components/Layout";
import { allProjects } from "./Projects";

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-display font-bold text-white mb-6">Projet non trouvé</h1>
          <Link to="/projets" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Retour aux projets
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout showContact={false}>
      <div className="pt-32 pb-12">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <Link 
            to="/projets" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Retour aux projets</span>
          </Link>
        </div>

        {/* Project Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-indigo-600"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-400">DÉTAILS DU PROJET</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-8 leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-indigo-950/30 border border-indigo-900/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-6">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20">
                    <ExternalLink className="w-5 h-5" /> Voir le live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-slate-700 transition-all border border-white/5">
                    <GithubIcon className="w-5 h-5" /> Code Source
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur-2xl opacity-20"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-6">Description Complète</h3>
                <div className="prose prose-invert prose-indigo max-w-none">
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {project.fullDescription || project.description}
                  </p>
                </div>
              </div>

              {project.additionalImages && project.additionalImages.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-3xl font-display font-bold text-white mb-8">Galerie du Projet</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.additionalImages.map((img, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-3xl overflow-hidden border border-white/10 shadow-xl"
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${index + 1}`} 
                          className="w-full h-auto hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-slate-900/50 border border-indigo-900/20">
                  <div className="w-12 h-12 rounded-xl bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Objectifs Techniques</h4>
                  {project.objectives ? (
                    <ul className="space-y-2 list-disc list-inside text-slate-400 leading-relaxed">
                      {project.objectives.map((obj, index) => (
                        <li key={index}>{obj}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 leading-relaxed">
                      Ce projet visait à explorer les limites de l'IA dans un contexte réel, en surmontant des défis techniques liés à la scalabilité et à la précision des modèles.
                    </p>
                  )}
                </div>
                <div className="p-8 rounded-3xl bg-slate-900/50 border border-indigo-900/20">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6">
                    <Tag className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Stack Technologique</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-10">
              <div className="p-10 rounded-[2.5rem] bg-indigo-950/10 border border-indigo-900/20">
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-400 mb-8">Infos Projet</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/20 flex items-center justify-center text-indigo-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Date</div>
                      <div className="text-sm font-bold text-white">{project.date || "2024 - 2025"}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-900/20 flex items-center justify-center text-indigo-400">
                      <Tag className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Catégorie</div>
                      <div className="text-sm font-bold text-white capitalize">{project.category}</div>
                    </div>
                  </div>
                </div>
              </div>


            </aside>
          </div>
        </section>
      </div>
    </Layout>
  );
};
