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
      title: "Home",
      path: "/",
   },
   {
      title: "Projects",
      path: "/projects",
   },
   {
      title: "Contacts",
      path: "/contacts",
   },
];

export const footer: Footer = {
   columns: [
      {
         title: "Pages",
         links: [
            {
               name: "Home",
               link: "/",
               leavesWebsite: false,
            },
            {
               name: "Projects",
               link: "/projects",
               leavesWebsite: false,
            },
            {
               name: "Contacts",
               link: "/contacts",
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
         title: "Contact Info",
         links: [
            {
               name: "Resume",
               link: "/utils/CV.pdf",
               leavesWebsite: true,
            },
            {
               name: "SMS",
               link: "sms:+37368611453?body=Hello%20there",
               leavesWebsite: true,
            },
            {
               name: "Phone Call",
               link: "tel:+37368611453",
               leavesWebsite: true,
            },
         ],
      },
   ],
};
