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

import portfolio from "../assets/portfolio.png";
import contries from "../assets/contries.png";
import cocacola from "../assets/cocacola.png";

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
    title: "Développeur Web Front-End",
    icon: web,
  },
  {
    title: "Développeur React Native",
    icon: mobile,
  },
  {
    title: "Développeur Backend ",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: " Html",
    icon: html,
    iconBg: "#383E56",
    date: " 2021",
    points: [
      "J'ai acquis une solide compréhension des concepts fondamentaux d'HTML (HyperText Markup Language).",

      "J'ai appris à structurer et à organiser efficacement le contenu d'une page web en utilisant les balises HTML appropriées.",

      "J'ai également appris à intégrer des images, des vidéos, des liens et d'autres éléments multimédias à l'aide des balises appropriées. En outre, j'ai compris l'importance de la validation du code HTML pour garantir une compatibilité et une accessibilité optimales.",
    ],
  },
  {
    title: "Css",
    icon: css,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "J'ai acquis une expertise en CSS (Cascading Style Sheets) pour donner un style et une présentation attrayante à mes pages web. J'ai appris à utiliser des sélecteurs CSS pour cibler et styliser spécifiquement les éléments HTML.",
      " J'ai une connaissance approfondie des propriétés CSS telles que la couleur, la typographie, les marges, les arrière-plans, les bordures, les animations, les transitions, etc. J'ai également appris à créer des mises en page responsives en utilisant des techniques telles que les médias queries et les grilles CSS. ",

      "J'ai une compréhension de base des préprocesseurs CSS tels que Sass ou Tailwind Css, qui facilitent l'écriture et la gestion du code CSS.",
    ],
  },
  {
    title: "JavaScript",
    icon: javascript,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "J'ai une solide compréhension des principes fondamentaux de JavaScript, ce qui me permet de créer des fonctionnalités interactives et dynamiques sur mes pages web.",

      " J'ai appris les bases de la syntaxe JavaScript, y compris les variables, les types de données, les opérateurs, les boucles et les conditions. ",

      "J'ai également maîtrisé les concepts clé tels que les fonctions, les tableaux, les objets, les événements et les manipulations du DOM (Document Object Model)...",
    ],
  },
  {
    title: "React",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "J'ai déjà fait mes premiers pas avec React, l'une des bibliothèques JavaScript les plus populaires pour la construction d'interfaces utilisateur.",

      "J'ai une compréhension des concepts fondamentaux de React, tels que les composants, le rendu conditionnel, la gestion de l'état et les cycles de vie. Et j'ai appris à structurer mes applications React de manière modulaire en utilisant des composants réutilisables.",

      "J'ai également travaillé avec des concepts plus avancés tels que les hooks, le routage avec React Router, la gestion de l'état avec Redux ou le contexte API.",
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
    name: " Portfolio",
    description:
      "Mon premier portfolio personnel avec le darkMode et d'autre fonctionnalité.",
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
      "Exemple d'application listant les pays et leurs nombres d'habitants",
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

export { services, technologies, experiences, testimonials, projects };
