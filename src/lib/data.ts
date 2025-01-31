import { NavItem, TabData } from "./types";

export const tracks = [
  {
    title: "Nhatflix - Avril,2024 - React, Tailwind",
    link: "https://nhatflix.vercel.app/",
  },
  {
    title: "Sushi-SenSation - Avril,2024 - React, Styled-Components",
    link: "https://sushi-sensation.vercel.app/",
  },
  {
    title: "Barameyv3 - Juin,2024 - React, EmailJs",
    link: "https://barameyv3.vercel.app/",
  },
  {
    title: "Portfoliov2 - Juillet,2024 - React, Tailwind , Framer Motion",
    link: "https://portfolio-v2-mu-neon.vercel.app/",
  },
  {
    title: "Wakaranai - Juillet,2024 - React, Tailwind , Zustand , Firebase",
    link: "https://wakaranai-alpha.vercel.app/",
  },
  {
    title: "Coffea - Décembre,2024 - Next, Tailwind , Context API",
    link: "https://coffee-shop-five-jet.vercel.app/",
  },
  {
    title:
      "Meals Finder - Janvier,2025 - Next, Tailwind , Tanstack Query ,Typescript",
    link: "https://meals-finder-lake.vercel.app/",
  },
  {
    title:
      "PedroPasta - Janvier,2025 - Next, Server Actions , Prisma ,Typescript",
    link: "https://pedropasta-nhat-quans-projects.vercel.app/",
  },
  {
    title:
      "MyfinalPortfolio - Janvier,2025 - Next , Tailwind , Shadcn Ui ,Typescript",
    link: "https://myfinalportfolio-five.vercel.app/",
  },
];

export const tabsData: TabData[] = [
  {
    id: 1,
    title: "Moi de tous les jours",
    imageSrc: [
      {
        src: "https://res.cloudinary.com/nhatflux/image/upload/f_webp/idii5lwwpxknebuusbqe",
        alt: "Moi de tous les jours souriant.",
      },
    ],
    description:
      "Cette image me représente dans ma vie quotidienne, toujours avec le sourire. C'est un reflet de ma personnalité joyeuse et optimiste, prêt à affronter chaque jour avec enthousiasme.",
  },
  {
    id: 2,
    title: "Quand j'étais artiste danseur.",
    imageSrc: [
      {
        src: "https://res.cloudinary.com/nhatflux/image/upload/f_webp/wglxef4rlituz4et6op2",
        alt: "Moi quand j'étais artiste danseur.",
      },
    ],
    description:
      "Ici, vous pouvez me voir dans ma période d'artiste danseur. La danse a toujours été une passion pour moi, et cette image capture un moment où j'exprimais ma créativité et mon amour pour cet art.",
  },
  {
    id: 3,
    title: "Comme je suis actuellement",
    imageSrc: [
      {
        src: "https://res.cloudinary.com/nhatflux/image/upload/f_webp/uxbkryyv9zq9ywanxllw",
        alt: "Moi actuellement en tant que développeur full stack.",
      },
    ],
    description:
      "Aujourd'hui, je suis un développeur full stack. J'ai trouvé ma passion pour la programmation et la technologie, et je m'efforce de devenir un meilleur développeur chaque jour. ",
  },
];

export const textLoopItems = [
  "Mon Journal",
  "Mes Astuces",
  "Mes Ressentis",
  "Mes Galères",
];

export const navItems: NavItem[] = [
  { name: "nhat.dev", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
];
