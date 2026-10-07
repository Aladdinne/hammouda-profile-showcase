import { createElement, Fragment, type ReactNode } from 'react';

export type Lang = 'fr' | 'en';
export type Bilingual = [fr: string, en: string];

export type PointLink = { label: string; url: string };

/** Un point peut être du texte simple ou du texte avec liens cliquables (ReactNode). */
export type PointText = string | ReactNode;
export type Point = [fr: PointText, en: PointText];

/** Crée un lien cliquable sans JSX (ce fichier est un .ts). */
const link = ({ label, url }: PointLink): ReactNode =>
  createElement(
    'a',
    {
      key: url,
      href: url,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'text-blue-600 font-medium underline underline-offset-4 hover:no-underline cursor-pointer',
    },
    label,
  );

/** Texte + liens cliquables séparés par « · ». */
const withLinks = (text: string, links: PointLink[]): ReactNode =>
  createElement(
    Fragment,
    null,
    text + ' ',
    ...links.flatMap((l, i) => (i < links.length - 1 ? [link(l), ' · '] : [link(l)])),
  );

const freelanceLinks: PointLink[] = [
  { label: 'souitech.com', url: 'https://souitech.com/' },
  { label: 'intedgroup.com', url: 'https://www.intedgroup.com/' },
];

export type Experience = {
  company: string;
  location: string;
  period: Bilingual;
  role: Bilingual;
  points: Point[];
  tech: string[];
};

export type Project = {
  title: string;
  category: Bilingual;
  description: Bilingual;
  year: string;
  tech: string[];
  icon: string;
};

export type SkillGroup = { title: Bilingual; skills: string[] };

export const profileLinks = {
  email: 'alaeddine.hammouda213@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alaeddine-hammouda-93927415b/',
  github: 'https://github.com/Aladdinne',
};

export const experiences: Experience[] = [
  {
    company: 'TSE Consulting INT',
    location: 'Tunis',
    period: ['Sept. 2025 — Présent', 'Sep 2025 — Present'],
    role: ['Développeur Full Stack Java/Angular', 'Full Stack Java/Angular Developer'],
    points: [
      ['Développement de 6 modules ERP et de facturation électronique ; intégration du système fiscal TEJ.', 'Delivered 6 ERP and e-invoicing modules; integrated the TEJ tax system.'],
      ['Livraison et maintenance de 2+ projets clients, résolution de 15+ problèmes de conformité.', 'Delivered and maintained 2+ client projects and resolved 15+ compliance issues.'],
      ['Optimisation des bases PostgreSQL et MongoDB de 30 à 40 %.', 'Optimized PostgreSQL and MongoDB databases by 30–40%.'],
    ],
    tech: ['Java', 'Spring Boot', 'Angular', 'C#', 'PostgreSQL', 'MongoDB'],
  },
  {
    company: 'Freelance',
    location: 'Tunisie',
    period: ['Mars 2024 — Présent', 'Mar 2024 — Present'],
    role: ['Développeur Full Stack indépendant', 'Freelance Full Stack Developer'],
    points: [
      [
        withLinks('3+ projets : plateformes universitaires, automatisation et solutions full stack. Réalisations professionnelles :', freelanceLinks),
        withLinks('3+ projects: university platforms, automation and full-stack solutions. Professional work:', freelanceLinks),
      ],
      ['Pipelines CI/CD réduisant le déploiement de 10 à 2 minutes.', 'CI/CD pipelines reducing deployment time from 10 to 2 minutes.'],
    ],
    tech: ['Java', 'Node.js', 'Angular', 'React', 'React Native', 'CI/CD'],
  },
  {
    company: 'Uptech',
    location: 'Ariana',
    period: ['Mars — Oct. 2024', 'Mar — Oct 2024'],
    role: ['Développeur Full Stack · PFE', 'Full Stack Developer · Graduation project'],
    points: [
      ['Gestion de stock RFID : réduction du temps de recherche de 70 %.', 'RFID inventory management: reduced search time by 70%.'],
      ["Intégration de l'IA avec Weka pour prédire la position des tags RFID.", 'Integrated AI with Weka to predict RFID tag positions.'],
      ['Architecture microservices, 95 % de réussite des pipelines GitLab CI/CD et réduction du temps de débogage de 35 % avec ELK.', 'Microservices architecture, 95% GitLab CI/CD pipeline success and 35% less debugging time with ELK.'],
    ],
    tech: ['Spring Boot', 'Angular', 'Keycloak', 'RabbitMQ', 'MinIO', 'Docker', 'Weka'],
  },
  {
    company: 'Digi Smart Solutions',
    location: 'Ariana',
    period: ['Juin — Août 2023', 'Jun — Aug 2023'],
    role: ['Stagiaire Java/Angular', 'Java/Angular Intern'],
    points: [
      ['Tableau de bord temps réel pour 100+ capteurs IoT, avec 10 000+ entrées par jour et 99,9 % de disponibilité.', 'Real-time dashboard for 100+ IoT sensors, handling 10,000+ entries per day with 99.9% uptime.'],
    ],
    tech: ['Spring Boot', 'Spring Security', 'Angular', 'MongoDB'],
  },
  {
    company: 'Tunisie Telecom',
    location: 'Mahdia',
    period: ['Juil. — Août 2022', 'Jul — Aug 2022'],
    role: ['Stagiaire Python', 'Python Intern'],
    points: [
      ['Évaluation des réseaux 2G/3G/4G par mesures terrain et visualisation des données avec Nemo Outdoor.', 'Evaluated 2G/3G/4G networks through field measurements and visualized data with Nemo Outdoor.'],
    ],
    tech: ['Python', 'Nemo Outdoor', 'Data visualization'],
  },
];

export const projects: Project[] = [
  { title: 'BPMN Workflow Engine', category: ['Architecture & processus', 'Architecture & processes'], description: ['Moteur de workflow BPMN pour orchestrer des processus linéaires et complexes, avec intégration GitHub.', 'BPMN workflow engine for orchestrating linear and complex business processes, with GitHub integration.'], year: '2023', tech: ['Java EE', 'Spring', 'Angular', 'JBPM'], icon: 'workflow' },
  { title: 'DevOps Pipeline', category: ['Intégration & déploiement', 'Integration & deployment'], description: ['Pipeline CI/CD avec Jenkins, Docker, Nexus et SonarQube. Suivi de 50+ métriques avec Prometheus et Grafana.', 'CI/CD pipeline with Jenkins, Docker, Nexus and SonarQube. Monitoring of 50+ metrics with Prometheus and Grafana.'], year: '2023', tech: ['Jenkins', 'Docker', 'SonarQube', 'Grafana'], icon: 'terminal' },
  { title: 'Camping Management', category: ['Application full stack', 'Full-stack application'], description: ['Application de gestion des services de camping, associant Web Services backend et interfaces Angular.', 'Camping services management application combining backend Web Services and Angular interfaces.'], year: '2023', tech: ['Java', 'Spring Boot', 'Angular', 'MySQL'], icon: 'camp' },
  { title: 'Educational Services', category: ['Web & desktop', 'Web & desktop'], description: ['Plateforme de services éducatifs, disponible sur le web et sur desktop.', 'Educational services platform available on the web and desktop.'], year: '2022', tech: ['PHP', 'Symfony 5', 'JavaFX', 'MySQL'], icon: 'education' },
  { title: 'Lane & Fatigue Detection', category: ['IA & systèmes embarqués', 'AI & embedded systems'], description: ['Détection des voies et de la fatigue en temps réel sur Pynq Z1 et Jetson Xavier NX avec deep learning embarqué.', 'Real-time lane and driver fatigue detection on Pynq Z1 and Jetson Xavier NX using embedded deep learning.'], year: '2021', tech: ['Python', 'OpenCV', 'TensorFlow'], icon: 'vision' },
];

export const skillGroups: SkillGroup[] = [
  { title: ['Langages', 'Languages'], skills: ['Java 11/17', 'TypeScript', 'JavaScript', 'Python', 'C#'] },
  { title: ['Écosystème Java', 'Java ecosystem'], skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring Batch', 'Hibernate', 'REST APIs', 'Maven'] },
  { title: ['Frontend', 'Frontend'], skills: ['Angular', 'React', 'React Native', 'Blazor', 'Tailwind CSS', 'Bootstrap'] },
  { title: ['Bases de données', 'Databases'], skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
  { title: ['DevOps & outils', 'DevOps & tools'], skills: ['Docker', 'Jenkins', 'GitLab CI', 'SonarQube', 'Grafana', 'ELK', 'Keycloak', 'MinIO'] },
  { title: ['Environnement & méthode', 'Environment & methodology'], skills: ['Linux', 'Git', 'IntelliJ IDEA', 'VS Code', 'Agile', 'SCRUM'] },
];

/** Helper: pick the right string from a [fr, en] pair. */
export const t = (pair: Bilingual, lang: Lang): string => (lang === 'fr' ? pair[0] : pair[1]);
