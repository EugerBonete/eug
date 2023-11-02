import { ReactNode } from "react";

interface HeroProps {
  heading: string;
  headingSpan: string;
  subheading: string;
  extra?: ReactNode;
}
export default function Hero({
  heading,
  headingSpan,
  extra,
  subheading,
}: HeroProps) {
  return (
    <div className="space-y-5 text-muted-foreground text-sm md:text-base">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
        {heading} <span className="text-primary">{headingSpan}</span>
      </h1>
      <p>{subheading}</p>
      {extra}
    </div>
  );
}
