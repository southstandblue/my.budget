import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Layout = ({ children, showHero }) => {
  return (
    <div className="flex flex-col min-h-screen bg-container-mode-light dark:bg-container-mode-dark">
      {/* Navbar */}
      <Navbar />

      {/* hero image goes here */}
      {showHero && <Hero />}

      {/* Content */}
      <div className="container mx-auto flex-1 py-10">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Layout;
