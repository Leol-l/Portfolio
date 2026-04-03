import React from "react";
import { Cpu, Code2, Database, Layers } from "lucide-react";
import { Layout } from "../components/Layout";
import { Section } from "../components/Shared";

export const Skills = () => {
  return (
    <Layout>
      <Section title="Compétences" subtitle="02_COMPÉTENCES">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-10 rounded-[2.5rem] bg-slate-900/40 shadow-sm hover:shadow-xl transition-all group border border-indigo-900/20 hover:border-indigo-600/50">
            <div className="w-16 h-16 rounded-2xl bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Code2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-display font-bold mb-6 tracking-tight text-white group-hover:text-indigo-400 transition-colors">Développement</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div> Python</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div> SQL (PostgreSQL, MySQL)</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div> Web (NodeJS, React, Axios, Express/vite)</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div> Java (Bases)</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div> Git / GitHub (Workflow)</li>
            </ul>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-slate-900/40 shadow-sm hover:shadow-xl transition-all group border border-indigo-900/20 hover:border-purple-600/50">
            <div className="w-16 h-16 rounded-2xl bg-purple-900/30 flex items-center justify-center text-purple-400 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all">
              <Cpu className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-display font-bold mb-6 tracking-tight text-white group-hover:text-purple-400 transition-colors">Data & IA</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> LLM Locale (Ollama)</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> RAG (Vector DB)</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> API Rest</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Dashboards (Visualisation)</li>
            </ul>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-slate-900/40 shadow-sm hover:shadow-xl transition-all group border border-indigo-900/20 hover:border-orange-600/50">
            <div className="w-16 h-16 rounded-2xl bg-orange-900/30 flex items-center justify-center text-orange-400 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
              <Database className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-display font-bold mb-6 tracking-tight text-white group-hover:text-orange-400 transition-colors">Infra & DevOps</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div> Docker (Dockerization)</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div> Proxmox (Hyperviseur)</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div> NAS / Stockage Réseau</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div> Linux (Debian, Ubuntu)</li>
            </ul>
          </div>
          <div className="p-10 rounded-[2.5rem] bg-slate-900/40 shadow-sm hover:shadow-xl transition-all group border border-indigo-900/20 hover:border-green-600/50">
            <div className="w-16 h-16 rounded-2xl bg-green-900/30 flex items-center justify-center text-green-400 mb-8 group-hover:bg-green-600 group-hover:text-white transition-all">
              <Layers className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-display font-bold mb-6 tracking-tight text-white group-hover:text-green-400 transition-colors">Maker Space</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Arduino / Raspberry PI</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Impression 3D</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Fusion 360 / CAD</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Prototypage (Soudure, Hardware)</li>
            </ul>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
