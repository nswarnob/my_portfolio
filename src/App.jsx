import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import FloatingSearch from "./components/FloatingSearch";
import ThemeProvider from "./components/ThemeProvider";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <ThemeProvider>
      {({ isDark, setIsDark }) => (
        <BrowserRouter>
          <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-[#09090b] dark:text-white">
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
      )}
    </ThemeProvider>
  );
}

export default App;