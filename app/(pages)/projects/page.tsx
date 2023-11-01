import Hero from "@/components/hero";
import Work from "@/components/work";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiPrisma, SiReactquery } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";

export default function Projects() {
  return (
    <div>
      <Hero
        heading="I've been building a"
        headingSpan="lot of things."
        subheading="Come explore the fruits of my labor, from small experiments to full-blown web applications, each project showcases my love for coding and design."
      />
      <Work heading="Fullstack" projects={fullStack} />
      <Work heading="Frontend" projects={frontEnd} />
    </div>
  );
}

export const fullStack = [
  {
    text: "Shisso",
    href: "https://shisso.vercel.app/",
    img: "/shisso.png",
    libs: [
      <TbBrandNextjs />,
      <SiPrisma />,
      <BiLogoTailwindCss />,
      <BiLogoTypescript />,
      <SiReactquery />,
    ],
    source: "https://github.com/EugerBonete/shisso",
    description: "stream or watch anime your favorite anime",
    createdAt: "2023",
  },
  {
    text: "Organizify",
    href: "https://organizify.vercel.app/",
    img: "/organizify.png",
    libs: [
      <TbBrandNextjs />,
      <SiPrisma />,
      <FaRegUserCircle />,
      <BiLogoTypescript />,
    ],
    source: "https://github.com/EugerBonete/organizify",
    description: "task management solution, organize your daily tasks.",
    createdAt: "2023",
  },
];

export const frontEnd = [
  {
    text: "Nekoanime",
    href: "https://nekoanime.vercel.app",
    img: "/shisso.png",
    libs: [
      <TbBrandNextjs />,
      <SiPrisma />,
      <BiLogoTailwindCss />,
      <BiLogoTypescript />,
      <SiReactquery />,
    ],
    source: "https://github.com/EugerBonete/Nekoanime",
    description: "collection of animated series and movies",
    createdAt: "2023",
  },
  {
    text: "0 coffee",
    href: "https://ocoffee.netlify.app/",
    img: "/organizify.png",
    libs: [
      <TbBrandNextjs />,
      <SiPrisma />,
      <FaRegUserCircle />,
      <BiLogoTypescript />,
    ],
    source: "https://github.com/EugerBonete/coffee",
    description: "coffee website landing page",
    createdAt: "2023",
  },
  {
    text: "0 coffee",
    href: "https://ocoffee.netlify.app/",
    img: "/organizify.png",
    libs: [
      <TbBrandNextjs />,
      <SiPrisma />,
      <FaRegUserCircle />,
      <BiLogoTypescript />,
    ],
    source: "https://github.com/EugerBonete/coffee",
    description: "coffee website landing page",
    createdAt: "2023",
  },
];
