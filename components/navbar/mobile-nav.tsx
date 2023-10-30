"use client";
import { FiChevronDown } from "react-icons/fi";
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { IconType } from "react-icons";
import { Menu } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <Button variant="ghost" size="sm" onClick={() => setOpen((pv) => !pv)}>
          {open ? (
            <AiOutlineClose className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </Button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg shadow-xl absolute bg-background top-[120%] -left-[50%] w-48 overflow-hidden border z-[9999]"
        >
          <Option href="/" setOpen={setOpen} text="Home" />
          <Option href="/projects" setOpen={setOpen} text="Projects" />
          <Option href="/certificates" setOpen={setOpen} text="Certificates" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

interface OptionProps {
  text: string;
  setOpen: (val: boolean) => void;
  href: string;
}
const Option = ({ text, setOpen, href }: OptionProps) => {
  return (
    <Link href={href} className="w-full h-full">
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-base font-medium whitespace-nowrap rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        {text}
      </motion.li>
    </Link>
  );
};

export default MobileNav;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.01,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.01,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
