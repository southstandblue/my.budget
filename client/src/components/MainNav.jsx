// import { Link, NavLink } from "react-router-dom";
// import { Menu, Moon, Sun, X } from "lucide-react";
// import { useState } from "react";

const MainNav = () => {
  return <div>MainNav</div>;
};
export default MainNav;

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [theme, setTheme] = useState("light");

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
