type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
};

export const routes: Route[] = [
  {
    title: "Acasă",
    path: "/",
  },
  {
    title: "Proiecte",
    path: "/proiecte",
  },
  {
    title: "Contacte",
    path: "/contacte",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Pagini",
      links: [
        {
          name: "Acasă",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Proiecte",
          link: "/proiecte",
          leavesWebsite: false,
        },
        {
          name: "Contacte",
          link: "/contacte",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/negru-ioan",
          icon: "./img/icons/github.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/ioan-negru-7b0730226/",
          icon: "./img/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:negruioan@duck.com",
          icon: "./img/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
    {
      title: "Utile",
      links: [
        {
          name: "CV",
          link: "/utils/CV.pdf",
          leavesWebsite: true,
        },
        {
          name: "Resume",
          link: "/utils/resume.pdf",
          leavesWebsite: true,
        },
        {
          name: "Apelează",
          link: "tel:0742440724",
          leavesWebsite: true,
        },
      ],
    },
  ],
};
