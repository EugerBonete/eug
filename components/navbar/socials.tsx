"use client";
import {
  BiLogoFacebookCircle,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Socials() {
  return (
    <ul className="flex gap-1">
      <li>
        <Link
          target="_blank"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=azkriven17@gmail.com"
        >
          <Button className="text-xl" size="icon" variant="ghost">
            <BiLogoGmail />
          </Button>
        </Link>
      </li>
      <li>
        <Link target="_blank" href="https://www.facebook.com/euger.bonete.9/">
          <Button className="text-xl" size="icon" variant="ghost">
            <BiLogoFacebookCircle />
          </Button>
        </Link>
      </li>
      <li>
        <Link target="_blank" href="https://github.com/EugerBonete">
          <Button className="text-xl" size="icon" variant="ghost">
            <BiLogoGithub />
          </Button>
        </Link>
      </li>
      <li>
        <Link target="_blank" href="https://www.linkedin.com/in/euger-bonete/">
          <Button className="text-xl" size="icon" variant="ghost">
            <BiLogoLinkedin />
          </Button>
        </Link>
      </li>
    </ul>
  );
}
