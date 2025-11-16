import { useAuth0 } from "@auth0/auth0-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
            <X size={24} className=" primaryText" />
          ) : (
            <Menu size={24} className="primaryText" />
          )}
        </button>
        {mobileMenu && (
          <div className="absolute flex flex-col bg-container-mode-light dark:bg-container-mode-dark border border-border-mode-light dark:border-border-mode-dark p-3 space-y-3 top-18 sm:w-[25%] w-[45%] right-5 shadow-xl rounded-xl text-left md:hidden">
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
        )}
      </div>
    </>
  );
};
export default MobileNav;

// Dark / Light mode needs to be part of navbar and props passed in
