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
    id: 1,
    title: "Stockz",
    desc: "A financial platform that provides advanced charting tools, privileged insights, and comprehensive stock information and insider trades.",
    img: "./img/projects/Stockz.jpg",
    link: "https://stockz-chi.vercel.app/",
    github: "https://github.com/negru-ioan/stockz/",
    tags: ["Next", "React", "Tailwind Css", "API", "Chartjs"],
  },
  {
    id: 2,
    title: "Filmsero",
    desc: "Explore the fascinating world of movies and TV shows where you can find detailed information, reviews, and recommendations.",
    img: "./img/projects/Filmsero.png",
    link: "http://filmsero.42web.io/",
    github: "https://github.com/negru-ioan/filmsero/",
    tags: ["React", "Sass", "React Context", "API"],
  },
  {
    id: 3,
    title: "Riga Crypto",
    desc: "The latest news, prices, exchanges, and much more about cryptocurrencies.",
    img: "./img/projects/riga-crypto.png",
    link: "https://riga-two.vercel.app/",
    github: "https://github.com/negru-ioan/riga",
    tags: ["React", "Ant Design", "CSS", "Redux", "API"],
  },
  {
    id: 4,
    title: "Endgames",
    desc: "Useful information about free games, available on a single website.",
    img: "./img/projects/games.jpg",
    link: "https://negru-ioan.github.io/Endgames/",
    github: "https://github.com/negru-ioan/Endgames",
    tags: ["React", "TailwindCSS", "CSS", "Redux", "API"],
  },
  {
    id: 5,
    title: "Shoperz",
    desc: "An online shop with a mock API, offering authentication, a shopping cart, admin roles, product filtering, search, and user/administrator pages.",
    img: "./img/projects/Shoperz.jpg",
    link: "https://shoperz-six.vercel.app/",
    github: "https://github.com/negru-ioan/shoperz",
    tags: ["Angular", "RxJs", "Mock API", "Zone.js", "Scss"],
  },
  {
    id: 6,
    title: "Sumar",
    desc: "Extract and summarize articles with ChatGPT.",
    img: "./img/projects/sumar.jpg",
    link: "https://negru-ioan.github.io/sumar/",
    github: "https://github.com/negru-ioan/sumar",
    tags: ["React", "CSS", "Redux", "GPT-3.5", "API"],
  },
  {
    id: 7,
    title: "TubeYou",
    desc: "An authentic representation of the YouTube platform.",
    img: "./img/projects/TubeYou.jpg",
    link: "https://negru-ioan.github.io/TubeYou/",
    github: "https://github.com/negru-ioan/TubeYou",
    tags: ["React", "MUI", "AXIOS", "API"],
  },
  {
    id: 8,
    title: "Gioconda",
    desc: "Discover the latest fashion trends with Gioconda ecommerce.",
    img: "./img/projects/gioconda.jpg",
    link: "https://negru-ioan.github.io/Gioconda.com/",
    github: "https://github.com/negru-ioan/Gioconda.com",
    tags: ["React", "TailwindCSS", "React Context", "API"],
  },
  {
    id: 9,
    title: "Memorix",
    desc: "Test your memory and attention in a captivating game!",
    img: "./img/projects/Memorix.jpg",
    link: "https://negru-ioan.github.io/memorix/",
    github: "https://github.com/negru-ioan/memorix/",
    tags: ["React", "PWA", "CSS"],
  },
  {
    id: 10,
    title: "Restaurant",
    desc: "A fictional restaurant where you can order food and drinks.",
    img: "./img/projects/restaurant.jpg",
    link: "https://negru-ioan.github.io/Restaurant/",
    github: "https://github.com/negru-ioan/Restaurant",
    tags: ["React", "CSS", "React Icons"],
  },
  {
    id: 11,
    title: "Calculator",
    desc: "A simple and functional calculator.",
    img: "./img/projects/calcul.jpg",
    link: "https://negru-ioan.github.io/calculator/",
    github: "https://github.com/negru-ioan/calculator",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 12,
    title: "Filmup",
    desc: "Embark on a captivating journey through the world of movies, where you can discover detailed information, reviews, and recommendations.",
    img: "./img/projects/filmup.jpg",
    link: "https://negru-ioan.github.io/Filmup/",
    github: "https://github.com/negru-ioan/Filmup",
    tags: ["React", "Bootstrap", "API"],
  },
  {
    id: 13,
    title: "Temporent",
    desc: "Temporent, rent cars online with ease!",
    img: "./img/projects/Temporent.jpg",
    link: "https://temporent.vercel.app/",
    github: "https://github.com/negru-ioan/temporent",
    tags: ["Next", "React", "TailwindCSS", "CSS"],
  },
  {
    id: 14,
    title: "Ivaro srl",
    desc: "A demo website for Ivaro srl, a company specializing in the distribution of alcoholic products.",
    img: "./img/projects/ivaro.jpg",
    link: "https://negru-ioan.github.io/Ivaro-Srl-website/",
    github: "https://github.com/negru-ioan/Ivaro-Srl-website",
    tags: ["React", "CSS", "JavaScript"],
  },
  {
    id: 15,
    title: "Tenzies",
    desc: "Tenzi, the world's fastest and simplest game!",
    img: "./img/projects/Tenzies.jpg",
    link: "https://negru-ioan.github.io/Tenzies/",
    github: "https://github.com/negru-ioan/Tenzies",
    tags: ["React", "CSS"],
  },
];

export default projects;
