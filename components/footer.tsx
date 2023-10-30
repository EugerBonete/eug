import Logo from "./logo";
import { NavItems } from "./navbar/nav-items";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4">
      <NavItems />
      <Logo />
      <p>© 2023 Devpro Portfolio Template. All rights reserved.</p>
    </footer>
  );
}
