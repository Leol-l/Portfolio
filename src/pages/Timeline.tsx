import React from "react";
import { Layout } from "../components/Layout";
import { Section, ExperienceItem } from "../components/Shared";

export const Timeline = () => {
  return (
    <Layout>
      <Section title="Parcours" subtitle="03_PARCOURS" className="bg-indigo-950/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8">
            <ExperienceItem 
              year="2024 - Présent"
              title="Développeur IA (Stage)"
              company="Valdepharm - Val-de-Reuil"
              time="7 mois"
              description="Mise en place de solutions d'IA locales pour l'analyse automatisée de commentaires et la recherche documentaire intelligente. Développement de scripts Python pour l'optimisation des processus internes et création de dashboards de suivi. Travail en étroite collaboration avec les équipes métier pour identifier les cas d'usage à forte valeur ajoutée."
              type="work"
            />
            <ExperienceItem 
              year="2024"
              title="Support Infra & Admin Système (Stage)"
              company="Sanofi - Val-de-Reuil"
              time="3 mois"
              description="Immersion au cœur de l'infrastructure d'un leader mondial. Participation à l'installation et à la configuration d'un Metro Cluster pour garantir la haute disponibilité des données. Support technique de proximité pour les utilisateurs et maintenance préventive du parc informatique. Apprentissage des protocoles de sécurité et de conformité en milieu pharmaceutique."
              type="work"
            />
            <ExperienceItem 
              year="2024 - 2027"
              title="Bachelor en sciences et ingénierie en intelligence artificielle "
              company="CESI Rouen"
              time="3 ans"
              description="Formation intensive couvrant le développement logiciel, les bases de données, les statistiques. Réalisation de nombreux projets pratiques en Python et SQL pour consolider les bases techniques."
              type="edu"
            />
            <ExperienceItem 
              year="2023"
              title="Assistant chef de chantier (Stage)"
              company="GTM Normandie centre - Le havre"
              time="1 mois"
              description="Stage de découverte du milieu du bâtiment et des travaux publics. Suivi de chantier, gestion des approvisionnements et coordination des équipes sur le terrain."
              type="work"
            />
            <ExperienceItem 
              year="2022 - 2024"
              title="BUT Génie Civil"
              company="IUT du Havre"
              time="2 ans"
              description="Formation technique axée sur la conception, la construction de bâtiment et de travaux publics. Apprentissage des calculs de structures, de l'étude des matériaux et de la gestion de chantier."
              type="edu"
            />
            <ExperienceItem 
              year="2019 - 2022"
              title="BAC STI2D"
              company="Lycée Buisson - Elbeuf"
              time="3 ans"
              description="Obtention du Bac STI2D option architecture et construction (mention: Asser Bien)"
              type="edu"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
};
