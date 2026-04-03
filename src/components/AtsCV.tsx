import React from "react";
import { Link } from "react-router-dom";
import { Printer, ArrowLeft } from "lucide-react";

export const AtsCV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-slate-50 min-h-screen print:bg-white">
      {/* Navigation */}
      <nav className="p-4 bg-white border-b flex justify-between items-center max-w-5xl mx-auto sticky top-0 z-50 print:hidden shadow-sm">
        <div className="flex items-center gap-4">
          <Link 
            to="/"
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour au Portfolio
          </Link>
          <span className="h-4 w-[1px] bg-slate-200"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Version Optimisée ATS</span>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 text-sm font-bold px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20"
          >
            <Printer className="w-4 h-4" /> Imprimer / PDF
          </button>
        </div>
      </nav>

      {/* CV Content */}
      <div className="max-w-[210mm] mx-auto my-8 p-[20mm] bg-white text-black font-sans shadow-2xl print:shadow-none print:my-0 print:p-[15mm] leading-relaxed">
        
        {/* Header */}
        <header className="border-b-4 border-indigo-600 pb-6 mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-tight mb-2">Léo Lesueur</h1>
          <h2 className="text-xl font-bold text-indigo-700 mb-4 uppercase tracking-wide">Développeur IA & Informatique</h2>
          
          <div className="grid grid-cols-2 gap-y-2 text-[13px] text-slate-700">
            <div><span className="font-bold">Téléphone :</span> 07 84 55 62 96</div>
            <div><span className="font-bold">Email :</span> leolesueur27@gmail.com</div>
            <div><span className="font-bold">Localisation :</span> Louviers, France (27)</div>
            <div><span className="font-bold">LinkedIn :</span> linkedin.com/in/léo-lesueur-2724b6281/</div>
            <div><span className="font-bold">GitHub :</span> github.com/Leol-l</div>
            <div><span className="font-bold">Portfolio :</span> {window.location.origin}</div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase border-b-2 border-slate-200 mb-3 text-slate-900">Profil Professionnel</h3>
          <p className="text-[14px] text-slate-700 text-justify">
            Étudiant en Bachelor Science de l'Ingénieur au CESI, spécialisé en Intelligence Artificielle. Actuellement en stage de 7 mois axé sur le développement et l'implémentation de solutions IA. Expertise en déploiement d'IA locales, création de dashboards et gestion de données SQL. Profil rigoureux alliant compétences techniques informatiques et expérience opérationnelle en milieu industriel.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase border-b-2 border-slate-200 mb-4 text-slate-900">Expériences Professionnelles</h3>
          
          <div className="space-y-6">
            {/* STAGE ACTUEL - VALDEPHARM */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-[16px]">Stagiaire Développeur & Implémentation IA</h4>
                <span className="text-[13px] font-bold text-slate-500">En cours (7 mois)</span>
              </div>
              <div className="text-[14px] font-bold text-indigo-700 mb-2">Valdepharm (Industrie Pharmaceutique) — Val-de-Reuil, France</div>
              <ul className="list-disc list-outside ml-5 text-[13.5px] text-slate-700 space-y-1">
                <li>Développement et déploiement de solutions d'IA locales (Ollama/LLM).</li>
                <li>Conception et réalisation de Dashboards interactifs pour le suivi de la data.</li>
                <li>Gestion et manipulation de bases de données SQL pour l'extraction et l'analyse de données.</li>
                <li>Automatisation de processus internes via scripts Python.</li>
              </ul>
            </div>

            {/* SANOFI */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-[16px]">Administrateur Système (Stage)</h4>
                <span className="text-[13px] font-bold text-slate-500">2025 (3 mois)</span>
              </div>
              <div className="text-[14px] font-bold text-indigo-700 mb-2">Sanofi (Industrie Pharmaceutique) — Val-de-Reuil, France</div>
              <ul className="list-disc list-outside ml-5 text-[13.5px] text-slate-700 space-y-1">
                <li>Gestion d'infrastructure informatique et accompagnement des prestataires en salle serveur.</li>
                <li>Support technique et résolution de problèmes informatiques pour les collaborateurs.</li>
              </ul>
            </div>

            {/* VALDEPHARM INTERIM */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-[16px]">Technicien Assurance Qualité Système (Intérim)</h4>
                <span className="text-[13px] font-bold text-slate-500">2024 (2 mois)</span>
              </div>
              <div className="text-[14px] font-bold text-indigo-700 mb-2">Valdepharm — Val-de-Reuil, France</div>
              <ul className="list-disc list-outside ml-5 text-[13.5px] text-slate-700 space-y-1">
                <li>Alimentation de bases de données et centralisation des anomalies système.</li>
              </ul>
            </div>

            {/* GTM */}
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-[16px]">Assistant Chef de Chantier (Stage)</h4>
                <span className="text-[13px] font-bold text-slate-500">2023 (1 mois)</span>
              </div>
              <div className="text-[14px] font-bold text-indigo-700 mb-2">GTM Normandie Centre — Le Havre, France</div>
              <ul className="list-disc list-outside ml-5 text-[13.5px] text-slate-700 space-y-1">
                <li>Animation des réunions sécurité et suivi de l'avancement chantier.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase border-b-2 border-slate-200 mb-4 text-slate-900">Formation</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <div>
                <h4 className="font-bold text-[15px]">Bachelor Science de l'Ingénieur (Spécialité IA)</h4>
                <div className="text-[14px] text-indigo-700">CESI École d'Ingénieurs — Rouen</div>
              </div>
              <span className="text-[13px] font-bold text-slate-500">2024 - 2027</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase border-b-2 border-slate-200 mb-4 text-slate-900">Compétences Techniques</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[13.5px] text-slate-700">
            <div>
              <h4 className="font-bold text-slate-900 mb-1 uppercase text-[11px] tracking-widest text-indigo-700">Développement & IA</h4>
              <p>Python, C/C++, SQL (PostgreSQL), IA Locale (Ollama), Dashboards (Streamlit/Grafana)</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1 uppercase text-[11px] tracking-widest text-indigo-700">Infrastructure & Outils</h4>
              <p>Docker, Git, Linux, Windows Server, Administration Système</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase border-b-2 border-slate-200 mb-4 text-slate-900">Projets Notables</h3>
          <div className="space-y-3">
            <p className="text-[13.5px] text-slate-700">
              <span className="font-bold">Hackathon CESI (Projet Citoyen) :</span> Coordination logistique pour 80 lycéens et mentorat d'une équipe de 5 personnes.
            </p>
            <p className="text-[13.5px] text-slate-700">
              <span className="font-bold">Gestion SQL (Projet d'étude) :</span> Modélisation d'une base de données complète pour un établissement de restauration.
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-6 border-t border-slate-100 text-[10px] text-slate-400 text-center uppercase tracking-widest">
          IA • Python • SQL • Dashboard • Machine Learning • Alternance 2026
        </footer>
      </div>
    </div>
  );
};