import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-container-mode-light dark:bg-container-mode-dark">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container mx-auto flex-1 py-10">{children}</div>
    </div>
  );
};
export default Layout;
