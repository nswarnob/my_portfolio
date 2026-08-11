import { useEffect, useState } from "react";
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
import { fetchLocation, fetchWeather } from "./services/locationService";

function App() {
  const [weatherTarget, setWeatherTarget] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadFallbackLocation = async () => {
      const location = await fetchLocation();
      if (isMounted) setWeatherTarget((current) => current || location);
    };

    loadFallbackLocation();

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          if (!isMounted) return;
          setWeatherTarget({
            latitude: coords.latitude,
            longitude: coords.longitude,
          });
        },
        () => {},
        { enableHighAccuracy: false, timeout: 8000, maximumAge: 30 * 60 * 1000 },
      );
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!weatherTarget) return undefined;

    let isMounted = true;

    const loadWeather = async () => {
      const weather = await fetchWeather(weatherTarget);
      if (isMounted) setCurrentWeather(weather);
    };

    loadWeather();
    const intervalId = window.setInterval(loadWeather, 15 * 60 * 1000);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, [weatherTarget]);

  return (
    <ThemeProvider>
      {({ isDark, setIsDark }) => (
        <BrowserRouter>
          <div className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-slate-900 transition-colors duration-300 dark:text-white">
            <MonochromeBackground weather={currentWeather} />
            <ScrollProgress />
            <Navbar
              isDark={isDark}
              setIsDark={setIsDark}
              currentWeather={currentWeather}
            />
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
