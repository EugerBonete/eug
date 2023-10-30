import Hero from "@/components/hero";
import Work from "@/components/work";
import Link from "next/link";

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
              href="#"
              className="hover:underline font-semibold text-foreground"
            >
              Shisso
            </Link>{" "}
            when I'm not working on my day job.
          </p>
        }
      />
      <Work
        heading=" I've been building a lot of things"
        subheading="I switch a lot of companies. It's mostly about the culture."
      />
    </div>
  );
}
