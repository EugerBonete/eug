import HoverDevCards from "@/components/certs";
import Hero from "@/components/hero";
import Work from "@/components/work";

export default function Certificates() {
  return (
    <div className="flex flex-col gap-20">
      <Hero
        heading="Some of my certifications"
        headingSpan="in various technologies."
        subheading="Some proof of my skills and capabilities."
      />

      <HoverDevCards />
    </div>
  );
}
