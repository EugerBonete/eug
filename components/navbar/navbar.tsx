import { ModeToggle } from "./mode-toggle";
import { NavItems } from "./nav-items";
import Logo from "../logo";
import StaggeredDropDown from "./dropdown";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="md:hidden flex">
        <Logo />
      </div>
      <div className="hidden md:flex items-center gap-5 border p-2 rounded-lg shadow">
        <Logo />
        <NavItems />
      </div>
      <div className="flex items-center gap-2">
        <span className="md:hidden">
          <MobileNav />
        </span>
        <ModeToggle />
      </div>
    </nav>
  );
}
