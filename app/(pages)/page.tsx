import Hero from "@/components/hero";
import Work from "@/components/work";
import Link from "next/link";
import { fullStack } from "./projects/page";
import HoverDevCards from "@/components/certs";

export default function Page() {
  return (
    <div className="flex flex-col gap-20">
      <Hero
        heading="I'm a react software developer that design &"
        headingSpan="write code."
        subheading="I'm Euger Bonete, a full stack react developer. Let's turn your ideas into beautiful websites. I'm passionate about working with cutting-edge web technologies and creating seamless, user-friendly online experiences."
        extra={
          <p>
            Building{" "}
            <Link
              target="_blank"
              href="https://shisso.vercel.app/"
              className="hover:underline font-semibold text-foreground"
            >
              Shisso
            </Link>{" "}
            when I'm not working on my day job.
          </p>
        }
      />
      <Work
        projects={fullStack}
        heading=" I've been building a lot of things"
        subheading="Here are some of them."
      />

      <div className="space-y-5 pb-10">
        <h1 className="font-semibold text-2xl md:text-3xl">Certificates</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Some of my certifications in various technologies.
        </p>
        <HoverDevCards />
      </div>
    </div>
  );
}
