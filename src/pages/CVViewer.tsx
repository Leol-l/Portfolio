import React from "react";
import { Layout } from "../components/Layout";
import cvPdf from "../img/Leo_LESUEUR_CV.pdf";
import { ChevronLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

export const CVViewer = () => {
  return (
    <Layout showContact={false}>
      <div className="min-h-screen bg-slate-950 pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Actions */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div>
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors group mb-4"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-bold uppercase tracking-widest">Retour</span>
              </Link>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Curriculum <span className="text-indigo-600">Vitae</span></h1>
            </div>
            
            <a 
              href={cvPdf} 
              download="CV_Leo_LESUEUR.pdf"
              className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20"
            >
              <Download className="w-5 h-5" /> Télécharger le PDF
            </a>
          </div>

          {/* PDF Container */}
          <div className="relative w-full h-[80vh] rounded-[2.5rem] overflow-hidden border border-indigo-900/30 shadow-2xl bg-slate-900">
            <iframe 
              src={`${cvPdf}#view=FitH`} 
              className="w-full h-full border-none"
              title="CV Léo Lesueur"
            />
          </div>

          <p className="mt-8 text-center text-slate-500 text-sm italic">
            Note : Si le visualiseur ne s'affiche pas correctement, utilisez le bouton de téléchargement ci-dessus.
          </p>
        </div>
      </div>
    </Layout>
  );
};
