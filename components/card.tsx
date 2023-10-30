"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";

const Card = () => {
  return (
    <div className="grid w-full place-content-center px-4 text-muted-foreground aspect-video">
      <TiltCard />
    </div>
  );
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
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
      className="relative h-96 w-64 rounded-xl border-2 shadow-sm px-5"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-background shadow-lg space-y-5 px-2"
      >
        <Image
          src="/shuriken.png"
          alt="Project"
          height={100}
          width={100}
          className="object-cover w-full"
        />
        <h3
          className="text-foreground font-semibold"
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
          className="text-sm md:text-base"
        >
          A web app that allows users to practice for front-end and UI
          interviews.
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
