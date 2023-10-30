"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";

interface WorksProps {
  heading?: string;
  subheading?: string;
}

export default function Work({ heading, subheading }: WorksProps) {
  return (
    <div className="space-y-5">
      <h1 className="font-semibold text-2xl md:text-3xl">{heading}</h1>
      <p className="text-muted-foreground text-sm md:text-base">{subheading}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}

function WorkCard() {
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
        <Image
          src="/shuriken.png"
          alt="Project"
          height={100}
          width={100}
          className="object-cover w-full"
        />
        <h3
          className="text-foreground font-semibold group-hover:underline group-hover:text-primary"
          style={{
            transform: "translateZ(75px)",
          }}
        >
          Algochurn
        </h3>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-xs md:text-sm"
        >
          A web app that allows users to practice for front-end and UI
          interviews.
        </p>
        <div className="flex gap-2 text-xl">
          <TbBrandNextjs />
          <TbBrandNextjs />
          <TbBrandNextjs />
          <TbBrandNextjs />
        </div>
      </div>
    </motion.div>
  );
}
