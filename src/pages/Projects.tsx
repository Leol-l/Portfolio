import React from "react";
import { Layout } from "../components/Layout";
import { Section, ProjectGrid, Project } from "../components/Shared";
import valdepharmImg from "../img/Capture_dashboard.png";
import cesi from "../img/Capture_cesi.png"

export const allProjects: Project[] = [
  {
    id: "0x01",
    title: "Implémentation IA - Valdepharm",
    description: "Analyse automatisée de commentaires de satisfaction et visualisation par dashboard.",
    fullDescription: "Dans le cadre de mon stage chez Valdepharm, j’ai déployé une solution d’IA locale basée sur Ollama afin d’automatiser l’analyse des commentaires du service informatique. Ce projet inclut la conception d'une API dédiée et d’un dashboard permettant aux équipes IT de visualiser les résultats. L’enjeu majeur était de garantir la confidentialité des données tout en fournissant une synthèse exploitable des interventions. Cet outil sert désormais de base de réflexion pour l'amélioration continue des processus au sein du service.",
    tags: ["API", "Next", "React", "Node", "Dashboards", "IA Locale"],
    category: "pro",
    image: "",
    date: "Janvier 2026 - Mars 2026",
    objectives: [
      "Automatiser l'analyse de sentiment des tickets support",
      "Créer un dashboard interactif pour l'IT",
      "Optimiser le temps de traitement des retours utilisateurs"
    ],
    additionalImages: [
      valdepharmImg,
    ]
  },
  {
    id: "0x02",
    title: "Home Lab",
    description: "Infrastructure locale complète : Proxmox, NAS, DB Vectorielle et auto-hébergement.",
    fullDescription: "Passionné par l'infrastructure, j'ai construit mon propre Home Lab. Il tourne sous Proxmox et héberge un NAS, une base de données vectorielle pour mes projets IA, et diverses instances Docker. Ce projet reflète ma capacité à gérer une infrastructure de bout en bout, de la configuration matérielle au déployement logiciel. C'est mon laboratoire d'expérimentation quotidien pour tester de nouvelles technologies.",
    tags: ["Proxmox", "Docker", "NAS", "LLM Local"],
    category: "perso",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    date: "Depuis 2025",
    objectives: [
      "Centraliser le stockage de données personnel",
      "Héberger des services critiques en local (Self-hosting)",
      "Apprendre l'administration système et réseau",
      "Expérimenter avec la virtualisation et les conteneurs"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "0x06",
    title: "Hackathon CESI (Ingénieur Citoyen)",
    description: "Pilotage d'un événement pour 80 lycéens et mentorat direct d'une équipe projet de 5 personnes sur un projet en partenatier avec la.",
    fullDescription: "Organisation complète d'une journée d'immersion : création du planning, coordination logistique pour 80 participants et animation transverse. En parallèle, mentorat d'une équipe de 5 lycéens (méthodologie, gestion des priorités et aide technique) pour transformer leur concept en projet concret.",
    tags: ["Management", "Gestion de projet", "Programmation", "Animation"],
    category: "etude",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    date: "Février 2025",
    objectives: [
      "Concevoir et organiser le planning pour 80 élèves",
      "Coordonner les activités avec les responsables pédagogiques",
      "Encadrer une équipe de 5 lycéens (mentoring technique)",
      "Assurer le respect des deadlines et la présentation finale"
    ],
    additionalImages: [
      cesi,
    ]
  },
  {
    id: "0x04",
    title: "Dashboard gestion de qualité",
    description: "Système de monitoring pour ligne de production.",
    fullDescription: "Conception d'un système de surveillance de la qualiter de fiole. Les données sont collectées par un operateur, puis visualisées sur un dashboard JS.",
    tags: ["Dashboard", "Next", "React", "Node", "axios"],
    category: "etude",
    image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/Le0ll/Dashboard-de-Gestion-Qualit-",
    date: "Mai 2023",
    objectives: [
      "Collecter des données ",
      "Mettre en place une communication Font-Back",
      "Aprendre le dev web avancé"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1551288049-bbdac8a28a80?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "0x05",
    title: "SQL Restaurant",
    description: "Conception et gestion d'une base de données relationnelle sous PostgreSQL.",
    fullDescription: "Ce projet m'a permis de maîtriser les fondamentaux du SQL. J'ai conçu le schéma relationnel d'un système de gestion de restaurant, géré les requêtes complexes sous PostgreSQL via pgAdmin, et optimisé la structure des données pour assurer performance et intégrité.",
    tags: ["SQL", "PostgreSQL", "pgAdmin", "Data"],
    category: "etude",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    date: "Férvier 2025",
    objectives: [
      "Modéliser une base de données complexe (MCD/MLD)",
      "Optimiser les requêtes SQL pour la performance",
      "Gérer l'intégrité référentielle des données",
      "Automatiser les processus via des triggers et fonctions"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "0x07",
    title: "Catapult programable",
    description: "Conception d'une catapult.",
    fullDescription: "Conception et programmation d'une catapulte automatisée. Ce projet intègre des aspects de mécanique, de mathématiques pour les trajectoires, et d'électronique pour le contrôle des moteurs.",
    tags: ["Mecanique", "Math", "Programation", "Electronique"],
    category: "etude",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    date: "Janvier 2026",
    objectives: [
      "Calculer des trajectoires balistiques",
      "Programmer un microcontrôleur pour le tir",
      "Concevoir une structure mécanique robuste",
      "Intégrer des capteurs de précision"
    ],
    additionalImages: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const Projects = () => {
  return (
    <Layout>
      <Section title="Mes Projets" subtitle="01_PROJETS">
        <ProjectGrid 
          projects={allProjects}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        />
      </Section>
    </Layout>
  );
};
