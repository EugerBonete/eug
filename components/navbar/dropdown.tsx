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

export const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center w-full">
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative w-full"
      >
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start"
          onClick={() => setOpen((pv) => !pv)}
        >
          <span className="font-medium text-sm">Socials</span>
          <motion.span className="ml-2" variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </Button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg shadow-xl absolute bg-background top-[120%] left-[50%] w-48 overflow-hidden border z-[9999]"
        >
          <Option
            href="https://mail.google.com/mail/?view=cm&fs=1&to=azkriven17@gmail.com"
            setOpen={setOpen}
            Icon={BiLogoGmail}
            text="Gmail"
          />
          <Option
            href="https://www.facebook.com/euger.bonete.9/"
            setOpen={setOpen}
            Icon={BiLogoFacebookCircle}
            text="Facebook"
          />
          <Option
            href="https://github.com/EugerBonete"
            setOpen={setOpen}
            Icon={BiLogoGithub}
            text="Github"
          />
          <Option
            href="https://www.linkedin.com/in/euger-bonete/"
            setOpen={setOpen}
            Icon={BiLogoLinkedin}
            text="LinkedIn"
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

interface OptionProps {
  text: string;
  Icon: IconType;
  setOpen: (val: boolean) => void;
  href: string;
}
const Option = ({ text, Icon, setOpen, href }: OptionProps) => {
  return (
    <motion.a href={href} target="_blank" variants={actionIconVariants}>
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-base font-medium whitespace-nowrap rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <Icon />
        <span>{text}</span>
      </motion.li>
    </motion.a>
  );
};

export default StaggeredDropDown;

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
