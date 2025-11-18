import { Sun, Moon } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

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
      {isAuthenticated ? (
        <>
          <Link
            to="/"
            className="md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer primaryButton"
          >
            Home
          </Link>
          <Link
            to="/category"
            className="md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer primaryButton"
          >
            Category
          </Link>
          <Link
            to="/dashboard"
            className="md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer primaryButton"
          >
            Dashboard
          </Link>
          <Link
            to="/settings"
            className="md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer primaryButton"
          >
            Settings
          </Link>
          <Link
            to="/Profile"
            className="md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer primaryButton"
          >
            Profile
          </Link>
        </>
      ) : (
        ""
      )}
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
