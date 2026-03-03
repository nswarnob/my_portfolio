import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import FloatingSearch from "./components/FloatingSearch";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <BrowserRouter>
      <div className={isDark ? "dark" : "light"}>
        <ScrollProgress />
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <FloatingSearch />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
