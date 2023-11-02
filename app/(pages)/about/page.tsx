import Hero from "@/components/hero";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Hero
        heading="Wassup! My name is "
        headingSpan="Euger Bonete."
        subheading="I embarked on this exciting journey of learning to code during the pandemic, and my enthusiasm for coding and building things has only grown stronger with each passing day.I've been consistently immersing myself in the world of web development. This journey has been an incredible experience, and I can't wait to see where it takes me next."
        extra={
          <div className="flex justify-around">
            <Image
              src="/k.png"
              alt="About Image"
              height={210}
              width={210}
              quality={100}
              className=" dark:invert"
            />
            <Image
              src="/chill.png"
              alt="About Image"
              height={210}
              width={210}
              quality={100}
              className=" dark:invert"
            />
          </div>
        }
      />
    </div>
  );
}
