import { useAuth0 } from "@auth0/auth0-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ darkMode, toggleMode }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleLoginOrLogout = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <>
      {mobileMenu && (
        <div
          className="absolute bg-black/0 left-0 top-0 h-screen w-full "
          onClick={() => setMobileMenu(false)}
        ></div>
      )}

      <div>
        <button
          className="cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <X size={24} className="primaryText z-10" />
          ) : (
            <Menu size={24} className="primaryText" />
          )}
        </button>
      </div>

      {/* <div
        className={`absolute top-25 right-0 bg-blue-400 w-[60%] h-full p-10 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        This is the sidebar
      </div> */}

      <div
        className={`absolute flex flex-col bg-container-mode-light dark:bg-container-mode-dark border border-border-mode-light dark:border-border-mode-dark p-3 space-y-3 
           sm:w-[25%] w-[45%] top-18 shadow-xl rounded-xl ${
             mobileMenu ? "translate-x-0 right-5" : "translate-x-full"
           } ease-in duration-500`}
      >
        {isAuthenticated ? (
          <>
            <Link
              to="/"
              className="text-lg text-center border-2 px-4 py-1 rounded-lg cursor-pointer primaryButton"
            >
              Home
            </Link>
            <Link
              to="/category"
              className="text-lg text-center border-2 px-4 py-1 rounded-lg cursor-pointer primaryButton"
            >
              Category
            </Link>
            <Link
              to="/dashboard"
              className="text-lg text-center border-2 px-4 py-1 rounded-lg cursor-pointer primaryButton"
            >
              Dashboard
            </Link>
            <Link
              to="/settings"
              className="text-lg text-center border-2 px-4 py-1 rounded-lg cursor-pointer primaryButton"
            >
              Settings
            </Link>
            <Link
              to="/Profile"
              className="text-lg text-center border-2 px-4 py-1 rounded-lg cursor-pointer primaryButton"
            >
              Profile
            </Link>
          </>
        ) : (
          ""
        )}

        <div
          className="text-lg text-center border-2 px-4 py-1 rounded-lg cursor-pointer  primaryButton"
          onClick={toggleLoginOrLogout}
        >
          {isAuthenticated ? "Logout" : "Login"}
        </div>
        <hr className="primaryText" />
        <button
          className="text-lg text-center border-2 px-4 py-1 rounded-lg cursor-pointer primaryButton"
          onClick={() => toggleMode()}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
};
export default MobileNav;
