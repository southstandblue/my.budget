import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="font-appFont container mx-auto px-2">
      <Navbar />
      <div className="flex justify-center items-center pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
