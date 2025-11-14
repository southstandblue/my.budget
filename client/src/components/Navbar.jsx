import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-container-light border-b-2 border-border-light py-4 md:py-6">
      <div className="container mx-auto flex justify-between items-center px-3 md:px-2">
        <Link
          to="/"
          className="md:text-5xl text-3xl text-text-light/85 font-medium cursor-pointer tracking-tighter"
        >
          my.budget
        </Link>
        <div className="md:hidden flex gap-3">
          <MobileNav />
          <button
            className="cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun size={19} className="text-text-light/85" />
            ) : (
              <Moon size={19} className="text-text-light/85" />
            )}
          </button>
        </div>
        <div className="hidden md:flex gap-5 px-1">
          <MainNav />
          <button
            className="cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun size={24} className="text-text-light/85" />
            ) : (
              <Moon size={24} className="text-text-light/85" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
