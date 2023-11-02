"use client";

import { ModeToggle } from "./mode-toggle";
import { NavItems } from "./nav-items";
import Logo from "../logo";
import MobileNav from "./mobile-nav";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { BiLogoGithub } from "react-icons/bi";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center justify-between"
    >
      <div className="md:hidden flex">
        <Logo />
      </div>
      <div className="hidden md:flex items-center gap-5 dark:border-2 p-2 rounded-lg shadow">
        <Logo />
        <NavItems />
      </div>
      <div className="flex items-center gap-2">
        <span className="md:hidden">
          <MobileNav />
        </span>
        <Link target="_blank" href="https://github.com/EugerBonete">
          <Button className="text-xl" size="icon" variant="outline">
            <BiLogoGithub />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </motion.nav>
  );
}
