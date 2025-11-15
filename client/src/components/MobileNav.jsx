import { useAuth0 } from "@auth0/auth0-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const MobileNav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mobileMenu, setMobileMenu] = useState(false);

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

  return (
    <>
      {mobileMenu && (
        <div
          className="absolute bg-black/10 left-0 top-14 h-screen w-full"
          onClick={() => setMobileMenu(false)}
        ></div>
      )}

      <div>
        <button
          className="cursor-pointer"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
        {mobileMenu && (
          <div className="absolute flex flex-col bg-container-mode-light border p-3 space-y-3 top-18 right-5 shadow-xl rounded-xl w-[50%] text-left md:hidden">
            <div
              className="rounded-lg cursor-pointer text-center"
              onClick={toggleLoginOrLogout}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </div>
            <hr />
            <button
              className="md:px-2 md:py-1 cursor-pointer t"
              onClick={() => toggleMode()}
            >
              <span
                className="text-text-mode-light/85 dark:text-text-mode-dark"
                onClick={() => setMobileMenu(false)}
              >
                Toggle Mode
              </span>
            </button>
            <hr />
          </div>
        )}
      </div>
    </>
  );
};
export default MobileNav;

// put in the burget menu and X button

//   return (
//     <div className="flex gap-3">
//       <div
//         className="md:text-lg md:border-2 md:px-4 md:py-1 md:rounded-lg cursor-pointer
//        bg-button-bg-mode-light text-button-text-mode-light hover:bg-button-text-mode-light hover:text-button-bg-mode-light
//        dark:bg-button-bg-mode-dark dark:text-button-text-mode-dark dark:hover:bg-button-text-mode-dark dark:hover:text-button-bg-mode-dark"
//         onClick={toggleLoginOrLogout}
//       >
//         {isAuthenticated ? "Logout" : "Login"}
//       </div>
//       <button
//         className="md:px-2 md:py-1 cursor-pointer"
//         onClick={() => toggleMode()}
//       >
//         {darkMode ? (
//           <Sun
//             size={24}
//             className="text-text-mode-light/85 dark:text-text-mode-dark"
//           />
//         ) : (
//           <Moon
//             size={24}
//             className="text-text-mode-light/85 dark:text-text-mode-dark"
//           />
//         )}
//       </button>
//     </div>
//   );
// };

// export default DesktopMenu;

// const Navbar = () => {

//   const [mobileMenu, setMobileMenu] = useState(false);
// const [theme, setTheme] = useState("light");

//   const toggleMode = () => {
//     setDarkMode(!darkMode);
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//     localStorage.setItem("theme", newTheme);
//   };

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme") || "light";
//     setTheme(storedTheme);
//     document.documentElement.classList.toggle("dark", storedTheme === "dark");
//   }, []);

//   return (
//     <nav className="shadow-xl rounded-xl bg-blue-100 mt-2 relative">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//         <Link
//           to="/"
//           className="text-4xl font-medium cursor-pointer hover:text-blue-600"
//         >
//           my.budget
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 font-medium">
//           <NavLink to="/" className="hover:text-blue-600">
//             Home
//           </NavLink>
//           <NavLink to="/category" className="hover:text-blue-600">
//             Category
//           </NavLink>
//           <NavLink to="/dashboard" className="hover:text-blue-600">
//             Dashboard
//           </NavLink>
//           <button
//             className="cursor-pointer flex items-center space-x-2"
//             onClick={toggleMode}
//           >
//             {darkMode ? (
//               <Sun size={24} className="hover:text-blue-600" />
//             ) : (
//               <Moon size={24} className="hover:text-blue-600" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden pt-1">
//           <button onClick={() => setMobileMenu(!mobileMenu)}>
//             {mobileMenu ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>
//       {mobileMenu && (
//         <>
//           <div
//             className="absolute text-white h-screen w-full"
//             onClick={() => setMobileMenu(false)}
//           ></div>
//           <div className="absolute flex flex-col bg-blue-100 p-3 space-y-5 top-23 right-0 shadow-xl rounded-xl w-[70%] text-left md:hidden">
//             <NavLink
//               to="/"
//               className="hover:text-blue-600"
//               onClick={() => setMobileMenu(false)}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/category"
//               className="hover:text-blue-600"
//               onClick={() => setMobileMenu(false)}
//             >
//               Category
//             </NavLink>
//             <NavLink
//               to="/dashboard"
//               className="hover:text-blue-600"
//               onClick={() => setMobileMenu(false)}
//             >
//               Dashboard
//             </NavLink>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// };
// export default Navbar;
