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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <TiltCard
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

const TiltCard = ({
  heading,
  subheading,
  img,
  libs,
  href,
  source,
}: WorkCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.7, 0.7],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.7, 0.7],
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
    <div className="grid w-full place-content-center px-4 py-5 text-slate-900 group cursor-pointer">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-96 w-72 lg:w-64 rounded-xl bg-gradient-to-br from-primary to-violet-300"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 rounded-xl bg-white shadow-lg p-2 flex flex-col justify-between"
        >
          <Link
            href={href}
            style={{
              transform: "translateZ(100px)",
            }}
          >
            <Image
              src={img}
              alt="Project"
              height={150}
              width={150}
              className="object-cover w-full rounded-md group-hover:border-2 border-primary"
            />
          </Link>

          <Link
            href={href}
            style={{
              transform: "translateZ(100px)",
            }}
            className="space-y-5"
          >
            <h3 className="text-black text-center font-semibold group-hover:underline">
              {heading}
            </h3>
            <p className="text-muted-foreground">{subheading}</p>
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
    </div>
  );
};
