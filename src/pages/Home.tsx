import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Github, Linkedin, Terminal, ChevronRight } from "lucide-react";
import { Layout } from "../components/Layout";
import { Section, ProjectGrid, Project } from "../components/Shared";
import valdepharmImg from "../img/Capture_dashboard.png";
import Lab from "../img/lab1.png"
import photo from "../img/Photo.png"

const featuredProjects: Project[] = [
  {
    id: "0x01",
    title: "Implémentation IA - Valdepharm",
    description: "Déploiement d'IA locale (Ollama) pour l'analyse automatisée de commentaires et la recherche documentaire intelligente.",
    fullDescription: "Au sein de Valdepharm, j'ai mis en place une infrastructure d'IA locale utilisant Ollama. L'objectif était de traiter des volumes importants de commentaires et de faciliter la recherche dans une base documentaire dense. J'ai développé des scripts Python pour l'automatisation et créé des dashboards de suivi pour visualiser les résultats de l'analyse sémantique.",
    tags: ["Python", "Ollama", "Dashboards"],
    category: "pro",
    image: valdepharmImg,
    github: "#"
  },
  {
    id: "0x02",
    title: "Home Lab Personnel",
    description: "Infrastructure d'auto-hébergement complète sous Proxmox avec NAS, base de données vectorielle et IA locale.",
    fullDescription: "Mon Home Lab est mon terrain de jeu favori. Sous Proxmox, je gère plusieurs machines virtuelles et containers Docker. Il intègre un NAS pour le stockage, une base de données vectorielle pour mes tests en IA, et une instance Ollama. C'est ici que je teste mes configurations réseau et mes déploiements avant de les passer en production.",
    tags: ["Proxmox", "Docker", "NAS"],
    category: "perso",
    image: Lab,
    github: "#"
  }
];

export const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Low-poly background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="0,0 100,0 100,100" fill="currentColor" />
            <polygon points="0,100 100,100 50,50" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-indigo-600"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600">MAKER & DÉVELOPPEUR IA</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-display font-bold tracking-tight mb-10 leading-[0.9] text-white">
              L'IA concrète <br/>
              <span className="text-indigo-600">par la pratique</span>.
            </h1>
            <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
              Étudiant en Bachelor IA au CESI Rouen. Après un virage à 180° depuis le Génie Civil, je transforme ma passion pour la technique et mon profil "Maker" en solutions IA concrètes.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <Link to="/projets" className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40">
                Explorer mes projets
              </Link>
              <div className="flex items-center gap-6">
                <a href="https://github.com/Leol-l" className="text-slate-400 hover:text-indigo-400 transition-all hover:scale-110"><Github className="w-7 h-7" /></a>
                <a href="https://www.linkedin.com/in/l%C3%A9o-lesueur-2724b6281/" className="text-slate-400 hover:text-indigo-400 transition-all hover:scale-110"><Linkedin className="w-7 h-7" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[4rem] rotate-6 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M0 0 L100 0 L50 100 Z" fill="white" />
                  <path d="M0 100 L100 100 L50 0 Z" fill="white" />
                </svg>
              </div>
              <img 
                src="https://picsum.photos/seed/ai/800/800" 
                alt="AI Visualization" 
                className="w-full h-full object-cover mix-blend-overlay -rotate-6 scale-125"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-10 -left-10 bg-slate-900 p-8 rounded-3xl shadow-2xl border border-indigo-900/30 max-w-[200px]">
              <div className="text-3xl font-bold text-indigo-600 mb-1">2026</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Alternance recherchée</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section title="À propos de moi" subtitle="00_BIO">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <p className="text-xl text-slate-400 leading-relaxed mb-6">
                Passionné par la technique sous toutes ses formes, j'ai opéré un virage à 180° du Génie Civil vers l'Intelligence Artificielle par pure passion pour l'informatique. 
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Mon approche est celle d'un <span className="text-indigo-400 font-semibold">"Maker"</span> : j'aime comprendre comment les choses fonctionnent, du hardware au software. C'est cette curiosité qui m'a poussé à construire mon propre <span className="text-indigo-400 font-semibold">Home Lab</span>, un terrain d'expérimentation où je déploie mes propres serveurs, bases de données et modèles d'IA locaux.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Aujourd'hui, je combine la rigueur acquise dans le bâtiment avec la flexibilité du développement moderne pour créer des solutions IA qui ne sont pas seulement des concepts, mais des outils fonctionnels et optimisés.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full bg-indigo-950/30 border border-indigo-900/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  Curiosité
                </div>
                <div className="px-4 py-2 rounded-full bg-indigo-950/30 border border-indigo-900/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  Rigueur
                </div>
                <div className="px-4 py-2 rounded-full bg-indigo-950/30 border border-indigo-900/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  Pratique
                </div>
                <div className="px-4 py-2 rounded-full bg-indigo-950/30 border border-indigo-900/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  Autonomie
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
                <img 
                  src={photo} 
                  alt="Léo Lesueur" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section title="Ma Vision" subtitle="01_PHILOSOPHIE" className="bg-indigo-950/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h4 className="text-2xl font-display font-bold text-white">L'IA au service de l'humain</h4>
            <p className="text-slate-400 leading-relaxed">
              Je crois fermement que l'IA ne doit pas être une boîte noire mystérieuse, mais un outil transparent et accessible. Mon objectif est de démystifier ces technologies en créant des implémentations locales et souveraines.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-display font-bold text-white">L'apprentissage par le faire</h4>
            <p className="text-slate-400 leading-relaxed">
              Rien ne remplace l'expérience pratique. Que ce soit en configurant un cluster Proxmox ou en optimisant un script Python, chaque défi technique est une opportunité de croissance et d'innovation.
            </p>
          </div>
        </div>
      </Section>

      {/* Vitrine: Projects Preview */}
      <Section title="Projets Sélectionnés" subtitle="02_PROJETS">
        <ProjectGrid 
          projects={featuredProjects}
          className="grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        />
        <div className="flex justify-center">
          <Link to="/projets" className="group flex items-center gap-4 text-sm font-bold hover:text-indigo-600 transition-colors">
            Voir tous les projets <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-indigo-600" />
          </Link>
        </div>
      </Section>

      {/* Vitrine: Skills Preview */}
      <Section title="Expertise Technique" subtitle="02_COMPÉTENCES" className="bg-indigo-950/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 rounded-[2.5rem] bg-slate-900/40 shadow-sm hover:shadow-xl transition-all group border border-indigo-900/20 hover:border-indigo-600/50">
            <h4 className="text-3xl font-display font-bold mb-6 group-hover:text-indigo-400 transition-colors text-white">Data & IA</h4>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">Implémentation d'IA locales avec Ollama, gestion de bases de données SQL et vectorielles.</p>
            <Link to="/competences" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400">
              Voir mes technos <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-12 rounded-[2.5rem] bg-slate-900/40 shadow-sm hover:shadow-xl transition-all group border border-indigo-900/20 hover:border-indigo-600/50">
            <h4 className="text-3xl font-display font-bold mb-6 group-hover:text-indigo-400 transition-colors text-white">Infrastructure & Maker</h4>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">Gestion de Home Lab (Proxmox, Docker) et conception électronique/3D.</p>
            <Link to="/competences" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400">
              Voir mon lab <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
