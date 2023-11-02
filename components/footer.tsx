import Logo from "./logo";
import Socials from "./navbar/socials";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full">
        <Logo />
        <Socials />
        {/* <p>© {new Date().getFullYear()}. All rights reserved.</p> */}
      </div>
    </footer>
  );
}
