import Hero from "@/components/hero";
import Work from "@/components/work";
import {
  BiCarousel,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiFramer, SiPrisma, SiReactquery } from "react-icons/si";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
export default function Projects() {
  return (
    <div>
      <Hero
        heading="I've been building a"
        headingSpan="lot of things"
        subheading="from small experiments to full-blown web applications, each project showcases my love for coding and design."
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
    libs: [<TbBrandNextjs />, <SiPrisma />, <BiLogoTypescript />],
    source: "https://github.com/EugerBonete/organizify",
    description: "task management solution, organize your daily tasks.",
    createdAt: "2023",
  },
];

export const frontEnd = [
  {
    text: "Nekoanime",
    href: "https://nekoanime.vercel.app",
    img: "/neko.png",
    libs: [
      <TbBrandNextjs />,
      <BiCarousel />,
      <BiLogoTailwindCss />,
      <BiLogoTypescript />,
      <BsPhone />,
    ],
    source: "https://github.com/EugerBonete/Nekoanime",
    description: "collection of animated series and movies",
    createdAt: "2023",
  },
  {
    text: "0 coffee",
    href: "https://ocoffee.netlify.app/",
    img: "/coffee.png",
    libs: [<AiFillHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />],
    source: "https://github.com/EugerBonete/coffee",
    description: "responsive coffee website landing page",
    createdAt: "2023",
  },
  {
    text: "Ebp",
    href: "https://eb-p.vercel.app/",
    img: "/ebp.png",
    libs: [
      <SiFramer />,
      <TbBrandThreejs />,
      <BiLogoTailwindCss />,
      <BiLogoTypescript />,
    ],
    source: "https://github.com/EugerBonete/ebp",
    description: "portfolio website using react three fiber",
    createdAt: "2023",
  },
];
