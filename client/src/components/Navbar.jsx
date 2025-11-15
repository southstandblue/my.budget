import { Link } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className="border-b md:border-b-2 border-b-border-mode-light/85 dark:border-b-border-mode-dark px-3 py-3 md:py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl md:text-4xl font-medium tracking-tight text-text-mode-light/85 dark:text-text-mode-dark"
        >
          my.budget
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block md:mt-2">
          <DesktopMenu />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
