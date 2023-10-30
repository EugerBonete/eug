import { IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
const HoverDevCards = () => {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <Card
        title="HTML/CSS"
        subtitle="View certificate"
        href="https://www.testdome.com/certificates/5faeb9a601474a2a906f712f40dfab6f"
        Icon={IoLogoHtml5}
      />
      <Card
        title="Javascript"
        subtitle="View certificate"
        href="https://www.testdome.com/certificates/530156ebb39f43c5a407bb157b414413"
        Icon={IoLogoJavascript}
      />
      <Card
        title="Typescript"
        subtitle="View certificate"
        href="https://www.testdome.com/certificates/b42958b8c828498782f72c304e0f7d24"
        Icon={SiTypescript}
      />
      <Card
        title="React"
        subtitle="View certificate"
        href="https://www.testdome.com/certificates/da2507e9432941068913931a9ce1dc47"
        Icon={IoLogoReact}
      />
      <Card
        title="Internship"
        subtitle="View certificate"
        href="https://shorturl.at/suTZ5"
        Icon={FaAddressCard}
      />
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }: any) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-accent"
      target="_blank"
    >
      <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-primary group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;
