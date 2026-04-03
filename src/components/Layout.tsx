import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  Terminal,
  ChevronRight
} from "lucide-react";

export const Layout = ({ children, showContact = true }: { children: React.ReactNode, showContact?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "00_HOME", href: "/" },
    { name: "01_PROJETS", href: "/projets" },
    { name: "02_COMPETENCES", href: "/competences" },
    { name: "03_PARCOURS", href: "/parcours" },
  ];

  return (
    <div className="min-h-screen selection:bg-indigo-600 selection:text-white bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-indigo-900/30 px-6 py-5 flex justify-between items-center transition-all">
        <Link to="/" className="font-display font-bold text-2xl tracking-tighter flex items-center gap-3 group">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-lg group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-600/20">LL</div>
          <span className="group-hover:text-indigo-400 transition-colors text-white">Léo Lesueur</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`hover:text-indigo-400 transition-colors relative group ${location.pathname === link.href ? 'text-indigo-400' : 'text-slate-400'}`}
            >
              {link.name.split('_')[1] || link.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-indigo-600 transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/cv" 
            className="hidden sm:block bg-white text-slate-950 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all shadow-lg shadow-white/5 hover:shadow-indigo-600/20"
          >
            Mon CV
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-xl pt-32 px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-display font-bold text-white hover:text-indigo-400 transition-colors"
                >
                  {link.name.split('_')[1] || link.name}
                </Link>
              ))}
              <Link 
                to="/cv"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-indigo-400 pt-4"
              >
                Voir mon CV
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {children}
      </main>

      {/* Contact Section / Footer */}
      <footer id="contact" className={`bg-slate-950 ${showContact ? 'py-32' : 'py-12'} px-6 md:px-12 lg:px-24 border-t border-indigo-900/30`}>
        <div className="max-w-7xl mx-auto">
          {showContact && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[2px] bg-indigo-600"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-600">CONTACT</span>
                </div>
                <h2 className="text-6xl md:text-7xl font-display font-bold mb-10 tracking-tight text-white">
                  Travaillons <br/>
                  <span className="text-indigo-600">Ensemble</span>.
                </h2>
                <p className="text-xl text-slate-400 max-w-md leading-relaxed mb-12">
                  À la recherche d'une alternance pour Septembre 2026. Prêt à intégrer vos équipes techniques et à relever vos défis IA les plus complexes.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-6">
                <a href="mailto:leolesueur27@gmail.com" className="group flex items-center justify-between p-8 rounded-3xl border border-indigo-900/20 bg-slate-900/30 hover:border-indigo-600 hover:bg-indigo-950/50 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-900/50 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-white">Email</span>
                  </div>
                  <ChevronRight className="w-6 h-6 text-indigo-600 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="https://www.linkedin.com/in/l%C3%A9o-lesueur-2724b6281/" className="group flex items-center justify-between p-8 rounded-3xl border border-indigo-900/20 bg-slate-900/30 hover:border-indigo-600 hover:bg-indigo-950/50 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-900/50 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-white">LinkedIn</span>
                  </div>
                  <ChevronRight className="w-6 h-6 text-indigo-600 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="https://github.com/Leol-l" className="group flex items-center justify-between p-8 rounded-3xl border border-indigo-900/20 bg-slate-900/30 hover:border-indigo-600 hover:bg-indigo-950/50 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-slate-950 transition-colors">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-white">GitHub</span>
                  </div>
                  <ChevronRight className="w-6 h-6 text-indigo-600 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
            </div>
          )}
          <div className={`${showContact ? 'pt-16 border-t border-indigo-900/30' : ''} flex flex-col md:flex-row justify-between items-center gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-500`}>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p>© 2026 LEO LESUEUR // PORTFOLIO V2.0</p>
            </div>
            <div className="flex gap-12">
              <Link to="/cv-ats" className="hover:text-indigo-400 transition-colors">CV ATS</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
