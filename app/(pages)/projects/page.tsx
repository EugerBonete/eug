import Hero from "@/components/hero";
import Work from "@/components/work";

export default function Projects() {
  return (
    <div>
      <Hero
        heading="I've been building a"
        headingSpan="lot of things."
        subheading="Come explore the fruits of my labor, from small experiments to full-blown web applications, each project showcases my love for coding and design."
      />
      <Work />
    </div>
  );
}
