import { TabData } from "./types";

export const navBurgerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

export const tracks = [
  {
    title: "Sushi-SenSation",
    link: "https://sushi-sensation.vercel.app/",
  },
  {
    title: "Coffea",
    link: "https://coffee-shop-five-jet.vercel.app/",
  },
  {
    title: "PedroPasta",
    link: "https://pedropasta-nhat-quans-projects.vercel.app/",
  },
  {
    title: "Meals Finder",
    link: "https://meals-finder-lake.vercel.app/",
  },
  {
    title: "Portfoliov2",
    link: "https://portfolio-v2-mu-neon.vercel.app/",
  },
  {
    title: "Wakaranai",
    link: "https://wakaranai-alpha.vercel.app/",
  },
  {
    title: "MyfinalPortfolio",
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
