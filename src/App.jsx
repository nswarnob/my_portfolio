import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import CliPage from "./pages/CliPage";
import MonochromeBackground from "./components/MonochromeBackground";

function App() {
  return (
    <ThemeProvider>
      {({ isDark, setIsDark }) => (
        <BrowserRouter>
          <div className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-slate-900 transition-colors duration-300 dark:text-white">
            <MonochromeBackground />
            <ScrollProgress />
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <div className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/cli" element={<CliPage />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;
