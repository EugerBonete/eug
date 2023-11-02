"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export let tabs = [
  { id: "/", label: "Home" },
  { id: "/projects", label: "Projects" },
  { id: "/about", label: "About" },
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
          className={cn(
            buttonVariants({
              variant: path === tab.id ? "default" : "ghost",
            }),
            path === tab.id ? "text-primary-foreground" : "text-foreground",
            `relative rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline-2 hover:bg-accent hover:text-primary w-full`
          )}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <li>{tab.label}</li>
        </Link>
      ))}
    </ul>
  );
}
