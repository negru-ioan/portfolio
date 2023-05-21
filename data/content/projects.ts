type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 0,
    title: "Filmsero",
    desc: "Explorați lumea fascinantă a filmelor și serialelor unde găsiți informații detaliate, recenzii și recomandări.",
    img: "/img/projects/filmsero.jpg",
    link: "http://filmsero.42web.io/",
    github: "https://github.com/negru-ioan/filmsero/",
    tags: ["React", "Sass", "React Context", "API"],
  },
  {
    id: 1,
    title: "Riga Crypto",
    desc: "Ultimele știri, prețuri, schimburi și multe altele despre criptomonede.",
    img: "/img/projects/crypto.jpg",
    link: "http://negru-ioan.rf.gd/",
    github: "https://github.com/negru-ioan/riga-crypto",
    tags: ["React", "Ant Design", "CSS", "Redux", "API"],
  },
  {
    id: 2,
    title: "Endgames",
    desc: "Informații utile despre jocuri gratuite, disponibile pe un singur website.",
    img: "/img/projects/games.jpg",
    link: "https://negru-ioan.github.io/Endgames/",
    github: "https://github.com/negru-ioan/Endgames",
    tags: ["React", "TailwindCSS", "CSS", "Redux", "API"],
  },
  {
    id: 3,
    title: "Sumar",
    desc: "Extractează și rezumă articole cu ChatGPT.",
    img: "/img/projects/sumar.jpg",
    link: "https://negru-ioan.github.io/sumar/",
    github: "https://github.com/negru-ioan/sumar",
    tags: ["React", "CSS", "Redux", "GPT-3", "API"],
  },
  {
    id: 4,
    title: "TubeYou",
    desc: "O reprezentare autentică a platformei YouTube.",
    img: "/img/projects/TubeYou.jpg",
    link: "https://negru-ioan.github.io/TubeYou/",
    github: "https://github.com/negru-ioan/TubeYou",
    tags: ["React", "MUI", "AXIOS", "API"],
  },
  {
    id: 5,
    title: "Gioconda",
    desc: "Descoperiți cele mai recente trenduri în modă cu Gioconda ecomerce.",
    img: "/img/projects/gioconda.jpg",
    link: "https://negru-ioan.github.io/Gioconda.com/",
    github: "https://github.com/negru-ioan/Gioconda.com",
    tags: ["React", "TailwindCSS", "React Context", "API"],
  },
  {
    id: 6,
    title: "Restaurant",
    desc: "Pagina principala a unui restaurant ficțional.",
    img: "/img/projects/restaurant.jpg",
    link: "https://negru-ioan.github.io/Restaurant/",
    github: "https://github.com/negru-ioan/Restaurant",
    tags: ["React", "CSS", "React Icons"],
  },
  {
    id: 7,
    title: "Filmup",
    desc: "Explorați lumea fascinantă a filmelor unde găsiți informații detaliate, recenzii și recomandări.",
    img: "/img/projects/filmup.jpg",
    link: "https://negru-ioan.github.io/Filmup/",
    github: "https://github.com/negru-ioan/Filmup",
    tags: ["React", "Bootstrap", "API"],
  },

  {
    id: 8,
    title: "Ivaro srl",
    desc: "Ivaro Srl prezintă site-ul demo pentru distribuția de produse alcoolice.",
    img: "/img/projects/ivaro.jpg",
    link: "https://negru-ioan.github.io/Ivaro-Srl-website/",
    github: "https://github.com/negru-ioan/Ivaro-Srl-website",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Calculator",
    desc: "Un calculator simplu si funcțional.",
    img: "/img/projects/calcul.jpg",
    link: "https://negru-ioan.github.io/calculator/",
    github: "https://github.com/negru-ioan/calculator",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "Tenzies",
    desc: "Cel mai rapid și simplu joc din lume!",
    img: "/img/projects/Tenzies.jpg",
    link: "https://negru-ioan.github.io/Tenzies/",
    github: "https://github.com/negru-ioan/Tenzies",
    tags: ["React", "CSS"],
  },
  {
    id: 11,
    title: "X & O",
    desc: "Un joc simplu ala X și O.",
    img: "/img/projects/x-o.jpg",
    link: "https://negru-ioan.github.io/xo/",
    github: "https://github.com/negru-ioan/xo",
    tags: ["React", "CSS"],
  },
];

export default projects;