import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const DesktopMenu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleMode = () => {
    setDarkMode(!darkMode);
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleLoginOrLogout = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    if (storedTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  return (
    <div className="flex gap-3">
      <div
        className="md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer
       bg-button-bg-mode-light text-button-text-mode-light hover:bg-button-text-mode-light hover:text-button-bg-mode-light
       dark:bg-button-bg-mode-dark dark:text-button-text-mode-dark dark:hover:bg-button-text-mode-dark dark:hover:text-button-bg-mode-dark"
        onClick={toggleLoginOrLogout}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </div>
      <button
        className="md:px-2 md:py-1 cursor-pointer"
        onClick={() => toggleMode()}
      >
        {darkMode ? (
          <Sun
            size={24}
            className="text-text-mode-light/85 dark:text-text-mode-dark"
          />
        ) : (
          <Moon
            size={24}
            className="text-text-mode-light/85 dark:text-text-mode-dark"
          />
        )}
      </button>
    </div>
  );
};

export default DesktopMenu;
