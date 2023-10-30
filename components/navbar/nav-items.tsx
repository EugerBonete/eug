"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import StaggeredDropDown from "./dropdown";
import { usePathname } from "next/navigation";

export let tabs = [
  { id: "/", label: "Home" },
  { id: "/projects", label: "Projects" },
  { id: "/certificates", label: "Certificates" },
];

export function NavItems() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const path = usePathname();
  useEffect(() => {
    if (path === "/") {
      setActiveTab("/");
    }
  }, [path]);

  return (
    <ul className="flex items-center flex-col sm:flex-row gap-2 md:gap-5 w-full sm:w-fit">
      {tabs.map((tab) => (
        <Link
          aria-label={tab.id}
          href={tab.id}
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : ""
          } relative rounded-md px-3 py-2 text-sm font-medium text-foreground outline-sky-400 transition focus-visible:outline-2 hover:bg-accent w-full`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-background dark:bg-white mix-blend-difference rounded-md"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
      <StaggeredDropDown />
    </ul>
  );
}
