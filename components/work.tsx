"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { SiPrisma, SiReactquery } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { ReactNode } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineCode } from "react-icons/ai";

const projects = [
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

interface WorksProps {
  heading?: string;
  subheading?: string;
}

export default function Work({ heading, subheading }: WorksProps) {
  return (
    <div className="space-y-5 py-20">
      <h1 className="font-semibold text-2xl md:text-3xl">{heading}</h1>
      <p className="text-muted-foreground text-sm md:text-base">{subheading}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.map((project) => (
          <WorkCard
            source={project.source}
            libs={project.libs}
            heading={project.text}
            subheading={project.description}
            img={project.img}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}

interface WorkCardProps {
  heading: string;
  subheading: string;
  img: string;
  libs: ReactNode[];
  href: string;
  source: string;
}

function WorkCard({
  heading,
  subheading,
  img,
  libs,
  href,
  source,
}: WorkCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-1.5, 1.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-1.5, 1.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: any) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="aspect-video sm:aspect-square relative my-5 border-l-2 group cursor-pointer"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center space-y-3 px-2 text-muted-foreground"
      >
        <Link
          href={href}
          target="_blank"
          style={{
            transform: "translateZ(100px)",
          }}
        >
          <Image
            src={img}
            alt="Project"
            height={150}
            width={150}
            className="object-cover w-full"
          />
        </Link>

        <Link
          href={href}
          target="_blank"
          style={{
            transform: "translateZ(75px)",
          }}
        >
          <h3 className="text-foreground font-semibold group-hover:underline">
            {heading}
          </h3>
        </Link>

        <Link
          href={href}
          target="_blank"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          <p className="text-xs md:text-sm">{subheading}</p>
        </Link>

        <Link
          href={href}
          target="_blank"
          style={{
            transform: "translateZ(25px)",
          }}
        >
          <div className="flex gap-2 text-xl">
            {libs.map((Icon, key) => (
              <div key={key}>{Icon}</div>
            ))}
          </div>
        </Link>

        <Link
          target="_blank"
          href={source}
          className="flex gap-2 text-xl hover:underline hover:text-primary"
        >
          <AiOutlineCode /> <span className="text-sm">View Source</span>
        </Link>
      </div>
    </motion.div>
  );
}
