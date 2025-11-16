import { Sun, Moon } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const DesktopMenu = ({ darkMode, toggleMode }) => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleLoginOrLogout = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className="flex gap-3">
      <div
        className="md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer primaryButton"
        onClick={toggleLoginOrLogout}
      >
        {isAuthenticated ? "Logout" : "Login"}
      </div>
      <button
        className="md:px-2 md:py-1 cursor-pointer"
        onClick={() => toggleMode()}
      >
        {darkMode ? (
          <Sun size={24} className="primaryText" />
        ) : (
          <Moon size={24} className="primaryText" />
        )}
      </button>
    </div>
  );
};

export default DesktopMenu;
