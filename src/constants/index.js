import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaEthereum } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiThreedotjs, SiNextdotjs, SiSolidity } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

import portfolio from "../assets/portfolio.png";
import contries from "../assets/contries.png";
import cocacola from "../assets/cocacola.png";
import fullstark from "../assets/back-end.png";
import pumpfun from "/pumpfun-bot.png";
import lbrestaurent from "/lb-restaurent.png";
import voisinage from "/voisinage-welcome-screen.jpg";
import junessoudure from "/junes-soudure.png";
import bladamarket from "/blada-market.png";
import blockchain from "../assets/blockchain.png";


export const navLinks = [
  {
    id: "about",
    title: "À_propos",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur fullstack",
    icon: fullstark,
  },
  {
    title: "Développeur Blockchain",
    icon: blockchain,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: FaHtml5,
  },
  {
    name: "CSS 3",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React JS",
    icon: FaReact,
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Node JS",
    icon: FaNodeJs,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Three JS",
    icon: SiThreedotjs,
  },
  {
    name: "git",
    icon: FaGitAlt,
  },
  {
    name: "figma",
    icon: FaFigma,
  },
];

const experiences = [
  {
    title: " Html",
    icon: FaHtml5,
    iconBg: "#E6DEDD",
    iconColor: "#E44D26",
    date: " 2021",
    points: [
      "Développement de structures web sémantiques et bien organisées avec HTML5.",
      "Intégration d'éléments multimédias et garantie de la validation du code pour une compatibilité et une accessibilité optimales."
    ],
  },
  {
    title: "Css",
    icon: FaCss3Alt,
    iconBg: "#383E56",
    iconColor: "#1572B6",
    date: "2021 - 2022",
    points: [
      "Maîtrise de CSS3 pour créer des designs de sites web attrayants et responsives.",
      "Utilisation de techniques avancées comme les Flexbox, les Grids et les media queries pour des mises en page adaptatives.",
      "Expérience avec les préprocesseurs CSS comme Sass et les frameworks comme Tailwind CSS pour un développement plus efficace."
    ],
  },
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
    iconBg: "#383E56",
    iconColor: "#F7DF1E",
    date: "2022 - 2023",
    points: [
      "Développement de fonctionnalités web interactives et dynamiques en utilisant JavaScript (ES6+).",
      "Manipulation du DOM, gestion des événements et utilisation des API web pour créer des expériences utilisateur riches.",
      "Application des concepts de programmation asynchrone (Promises, async/await) pour des performances optimisées."
    ],
  },
  {
    title: "React",
    icon: FaReact,
    iconBg: "#383E56",
    iconColor: "#61DAFB",
    date: "2023",
    points: [
      "Construction d'interfaces utilisateur modernes et performantes avec React.",
      "Gestion de l'état de l'application avec des outils comme Redux et l'API Context.",
      "Utilisation de l'écosystème React, y compris React Router pour la navigation et les Hooks pour la logique des composants."
    ],
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    iconBg: "#E6DEDD",
    iconColor: "#000000",
    date: "2023 - 2024",
    points: [
      "Développement d'applications web full-stack, rendues côté serveur (SSR) et générées statiquement (SSG) avec Next.js.",
      "Mise en place de routes d'API et optimisation des performances pour des applications web rapides et évolutives.",
      "Intégration de diverses bibliothèques et services pour étendre les fonctionnalités des applications Next.js."
    ],
  },
  {
    title: "React Native",
    icon: FaReact, // Vous pouvez changer pour une icône React Native si disponible
    iconBg: "#383E56",
    iconColor: "#61DAFB",
    date: "2024",
    points: [
      "Développement d'applications mobiles multiplateformes (iOS et Android) avec React Native.",
      "Création d'interfaces utilisateur natives et réactives.",
      "Intégration de bibliothèques natives et gestion du cycle de vie des applications mobiles."
    ],
  },
  {
    title: "Solidity",
    icon: SiSolidity,
    iconBg: "#E6DEDD",
    iconColor: "#3C3C3D",
    date: "2025 - En cours",
    points: [
      "Apprentissage du développement de contrats intelligents (smart contracts) sur la blockchain Ethereum avec Solidity.",
      "Compréhension des principes de la finance décentralisée (DeFi) et des tokens (ERC-20, ERC-721).",
      "Développement et test de contrats intelligents dans un environnement de développement local."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PumpRadar Bot",
    description: "Un bot Telegram qui détecte en temps réel les nouveaux tokens à fort volume sur Pump.fun, tout en suivant le ratio achat/vente et la pression d'achat.",
    tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "telethon",
          color: "green-text-gradient",
        },
      ],
    image: pumpfun,
    source_code_link: "https://t.me/solInsidersX",
    link: "https://t.me/solInsidersX",
  },
  {
    name: "LB Restaurent",
    description: "Site vitrine pour un restaurant, présentant le menu et les informations de contact.",
    tags: [
        {
          name: "astro",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "vercel",
          color: "pink-text-gradient",
        },
      ],
    image: lbrestaurent,
    source_code_link: "https://lb-restaurent.vercel.app/",
    link: "https://lb-restaurent.vercel.app/",
  },
  {
    name: "Voisinage",
    description: "Application mobile pour connecter les voisins. Actuellement en développement, son avenir est incertain.",
    tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tanstack-query",
          color: "pink-text-gradient",
        },
      ],
    image: voisinage,
    source_code_link: "https://expo.dev/accounts/cliford/projects/voisinaGe/builds/2b0b135b-8cde-4fdf-8a5f-9da859415bf6",
    link: "https://expo.dev/accounts/cliford/projects/voisinaGe/builds/2b0b135b-8cde-4fdf-8a5f-9da859415bf6",
  },
  {
    name: "Junes Soudure",
    description: "Site vitrine pour une entreprise spécialisée en soudure.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: junessoudure,
    source_code_link: "https://junes-soudure.vercel.app/",
    link: "https://junes-soudure.vercel.app/",
  },
  {
    name: "Blada Market",
    description: "Une marketplace pour la Guyane, actuellement en développement.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "netlify",
        color: "green-text-gradient",
      },
    ],
    image: bladamarket,
    source_code_link: "https://guyane-matketplace.netlify.app/",
    link: "https://guyane-matketplace.netlify.app/",
  },
  {
    name: " Portfolio",
    description:
      "Portfolio personnel développé pour présenter mes compétences et projets, incluant un mode sombre et d'autres fonctionnalités interactives.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://netlify.com/",
    link: "https://preneuscliford.github.io/",
  },
  {
    name: "coca cola",
    description:
      "Exemple de landing page pour Coca-Cola avec une magnifique slide.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: cocacola,
    source_code_link: "https://github.com/",
    link: "https://cocacolapage.netlify.app/",
  },
  {
    name: "Application React",
    description:
      "Application React qui interroge une API pour afficher une liste de pays et leur population, démontrant la manipulation de données et le rendu de composants.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: contries,
    source_code_link: "https://www.netlify.com/",
    link: "https://countries-react-app-ex.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
