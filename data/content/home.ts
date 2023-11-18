type Skill = {
    title: string;
    icon: string;
    style?: object;
    mobile?: boolean;
};

export const skills: Skill[] = [
    {
        title: 'HTML',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
        title: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
        title: 'Javascript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
        title: 'Typescript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
        title: 'Angular',
        icon: '/img/doodles/skills/angular.png',
    },
    {
        title: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        title: 'jQuery',
        icon: 'https://github.com/jquery.png',
    },
    {
        title: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
        title: 'Sass',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
        title: 'TailwindCSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    },
    //  {
    //      title: 'Bootstrap',
    //      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    //  },
    {
        title: 'Next',
        icon: 'https://willstenzel.com/tools/nextjs-dark.png',
        mobile: true,
    },
    {
        title: 'RxJs',
        icon: 'https://github.com/reactivex.png',
        mobile: true,
    },
    //  {
    //      title: 'Redux',
    //      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    //      mobile: true,
    //  },
    //  {
    //      title: 'Vite',
    //      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png',
    //      mobile: true,
    //  },
];
