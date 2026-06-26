import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import CliPage from "./pages/CliPage";

function App() {
  return (
    <ThemeProvider>
      {({ isDark, setIsDark }) => (
        <BrowserRouter>
          <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#09090b] dark:text-white">
            <ScrollProgress />
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/cli" element={<CliPage />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;
