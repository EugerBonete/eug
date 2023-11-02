"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TbBrowser } from "react-icons/tb";
import { Button } from "./ui/button";

interface WorksProps {
  heading?: string;
  subheading?: string;
  projects: any[];
}

export default function Work({ heading, subheading, projects }: WorksProps) {
  return (
    <div className="space-y-5 py-10">
      <h1 className="font-semibold text-2xl md:text-3xl text-center sm:text-left">
        {heading}
      </h1>
      <p className="text-muted-foreground text-sm md:text-base">{subheading}</p>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
    [-0.9, 0.9],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.9, 0.9],
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
    <div className="cursor-pointer space-y-2 flex flex-col">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[22rem] w-72 lg:w-64 rounded-xl bg-gradient-to-br from-primary to-primary/60"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 rounded-xl bg-white shadow-lg p-2 grid place-content-start"
        >
          <Link
            href={href}
            target="_blank"
            style={{
              transform: "translateZ(100px)",
            }}
            className="border-2 border-black rounded-md"
          >
            <Image
              src={img}
              alt="Project"
              height={150}
              width={150}
              className="object-cover w-full rounded-md"
            />
          </Link>

          <Link
            href={href}
            target="_blank"
            style={{
              transform: "translateZ(100px)",
            }}
            className="space-y-5"
          >
            <h3 className="text-black text-center font-semibold group-hover:underline">
              {heading}
            </h3>
            <p className="text-muted-foreground">{subheading}</p>
            <div className="flex gap-2 text-xl text-muted-foreground">
              {libs.map((Icon, key) => (
                <div key={key}>{Icon}</div>
              ))}
            </div>
          </Link>
        </div>
      </motion.div>
      <div className="justify-center flex-col flex gap-2">
        <Link target="_blank" href={source}>
          <Button variant="secondary" className="w-72 lg:w-64 gap-2">
            <AiFillGithub /> <span className="text-sm">Source</span>
          </Button>
        </Link>

        <Link target="_blank" href={href}>
          <Button className="w-72 lg:w-64 gap-2">
            <TbBrowser /> <span className="text-sm">Demo</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
