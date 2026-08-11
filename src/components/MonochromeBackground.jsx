import { useEffect, useRef } from "react";

const streaks = Array.from({ length: 28 }, (_, index) => ({
  left: `${(index * 41 + 7) % 105}%`,
  delay: `-${((index * 0.61) % 7).toFixed(2)}s`,
  duration: `${(3.2 + ((index * 13) % 42) / 10).toFixed(1)}s`,
  tail: `${44 + ((index * 23) % 62)}px`,
  hiddenOnMobile: index >= 10,
}));

const precipitation = Array.from({ length: 36 }, (_, index) => ({
  left: `${(index * 29 + 3) % 101}%`,
  delay: `-${((index * 0.37) % 3).toFixed(2)}s`,
  duration: `${(1.15 + ((index * 7) % 12) / 10).toFixed(2)}s`,
  hiddenOnMobile: index >= 18,
}));

const getWeatherMode = (code) => {
  if (code === null || code === undefined) return "cloudy";
  if (code <= 1) return "clear";
  if (code === 2) return "partly-cloudy";
  if (code === 3) return "cloudy";
  if (code >= 45 && code <= 48) return "fog";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    return "rain";
  }
  if ((code >= 71 && code <= 77) || (code >= 85 && code <= 86)) {
    return "snow";
  }
  if (code >= 95) return "storm";
  return "cloudy";
};

const Cloud = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 110"
    className={`absolute ${className}`}
    focusable="false"
  >
    <ellipse cx="120" cy="79" rx="112" ry="28" />
    <ellipse cx="43" cy="70" rx="34" ry="29" />
    <ellipse cx="82" cy="53" rx="46" ry="42" />
    <ellipse cx="128" cy="59" rx="45" ry="37" />
    <ellipse cx="171" cy="65" rx="39" ry="32" />
    <ellipse cx="207" cy="73" rx="26" ry="24" />
  </svg>
);

const MonochromeBackground = ({ weather }) => {
  const backgroundRef = useRef(null);
  const weatherMode = getWeatherMode(weather?.code);
  const showClouds = weatherMode !== "clear";
  const showSun = weatherMode === "clear" || weatherMode === "partly-cloudy";
  const showRain = weatherMode === "rain" || weatherMode === "storm";
  const showSnow = weatherMode === "snow";
  const showBirds = weatherMode === "clear" && weather?.isDay !== false;
  const showStreaks = !showRain && !showSnow && weatherMode !== "fog";
  const showAirplane = !showRain && !showSnow && weatherMode !== "storm";

  useEffect(() => {
    const syncVisibility = () => {
      backgroundRef.current?.style.setProperty(
        "--atmosphere-play-state",
        document.hidden ? "paused" : "running",
      );
    };

    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full select-none overflow-hidden bg-[#f5f5f5] dark:bg-black"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#ffffff_0%,#f5f5f5_48%,#d4d4d4_100%)] dark:bg-[linear-gradient(160deg,#000000_0%,#080808_52%,#000000_100%)]" />

      <div className="absolute inset-0 animate-mist-drift bg-[radial-gradient(ellipse_at_24%_68%,rgba(115,115,115,0.13),transparent_44%),radial-gradient(ellipse_at_78%_18%,rgba(212,212,212,0.2),transparent_38%)] will-change-transform [animation-play-state:var(--atmosphere-play-state)] dark:bg-[radial-gradient(ellipse_at_24%_68%,rgba(115,115,115,0.14),transparent_44%),radial-gradient(ellipse_at_78%_18%,rgba(212,212,212,0.08),transparent_38%)]" />

      {showSun && (
        <div
          className={`absolute left-[7%] top-[9%] size-16 animate-sun-drift rounded-full will-change-transform [animation-play-state:var(--atmosphere-play-state)] sm:size-20 lg:size-24 ${
            weather?.isDay === false
              ? "bg-[#d4d4d4]/75 shadow-[0_0_45px_rgba(212,212,212,0.2)] dark:bg-[#d4d4d4]/60"
              : "bg-white/90 shadow-[0_0_60px_rgba(255,255,255,0.5)] dark:bg-[#f5f5f5]/75 dark:shadow-[0_0_65px_rgba(255,255,255,0.18)]"
          }`}
        />
      )}

      {showBirds && (
        <div className="absolute left-0 top-[8%] h-12 w-28 animate-birds-cross opacity-0 will-change-transform [animation-play-state:var(--atmosphere-play-state)] max-md:h-9 max-md:w-20">
          <svg
            viewBox="0 0 112 48"
            className="h-full w-full fill-none stroke-[#737373]/65 stroke-[1.5] dark:stroke-[#d4d4d4]/55"
            focusable="false"
          >
            <path d="M4 28q7-8 14 0 7-8 14 0" />
            <path d="M43 12q6-7 12 0 6-7 12 0" />
            <path d="M75 34q5-6 10 0 5-6 10 0" />
          </svg>
        </div>
      )}

      {showClouds && <>
      <div className="absolute inset-x-0 top-0 h-[40vh] overflow-hidden animate-cloud-layer-far [--cloud-opacity:0.55] will-change-transform [animation-play-state:var(--atmosphere-play-state)] dark:[--cloud-opacity:0.45]">
        <Cloud className="left-[5%] top-[12%] w-[16vw] min-w-[130px] max-w-[220px] fill-[#b8b8b8] blur-[2.5px] dark:fill-[#606060]" />
        <Cloud className="right-[10%] top-[48%] w-[12vw] min-w-[105px] max-w-[170px] fill-[#d4d4d4] blur-[2px] dark:fill-[#858585]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[40vh] overflow-hidden animate-cloud-layer-mid [--cloud-opacity:0.5] will-change-transform [animation-play-state:var(--atmosphere-play-state)] dark:[--cloud-opacity:0.35]">
        <Cloud className="left-[25%] top-[45%] w-[16vw] min-w-[130px] max-w-[220px] fill-white blur-[2.5px] dark:fill-[#8b8b8b]" />
        <Cloud className="right-[5%] top-[12%] w-[16vw] min-w-[130px] max-w-[220px] fill-[#d4d4d4] blur-[2.5px] dark:fill-[#696969] max-md:hidden" />
      </div>

      <div className="absolute inset-x-0 top-0 h-[40vh] overflow-hidden animate-cloud-layer-near [--cloud-opacity:0.4] will-change-transform [animation-play-state:var(--atmosphere-play-state)] dark:[--cloud-opacity:0.25] max-md:hidden">
        <Cloud className="left-[8%] top-[48%] w-[16vw] min-w-[130px] max-w-[220px] fill-white blur-[2.5px] dark:fill-[#b0b0b0]" />
      </div>
      </>}

      {showStreaks && <div className="absolute inset-0 overflow-hidden opacity-45 dark:opacity-65">
        {streaks.map((streak, index) => (
          <span
            key={index}
            className={`absolute top-[-6px] size-0.5 animate-reference-streak rotate-[215deg] rounded-full bg-[#d4d4d4] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] [animation-play-state:var(--atmosphere-play-state)] ${streak.hiddenOnMobile ? "max-md:hidden" : ""}`}
            style={{
              left: streak.left,
              animationDelay: streak.delay,
              animationDuration: streak.duration,
            }}
          >
            <i
              className="absolute top-1/2 -z-10 h-px -translate-y-1/2 bg-gradient-to-r from-[#a3a3a3] to-transparent"
              style={{ width: streak.tail }}
            />
          </span>
        ))}
      </div>}

      {showAirplane && <div className="absolute left-0 top-0 h-6 w-[clamp(30px,3vw,44px)] animate-airplane-cross opacity-0 will-change-transform [animation-delay:-4.7s] [animation-play-state:var(--atmosphere-play-state)] max-md:h-5 max-md:w-8">
        <div className="absolute left-[72%] top-[10px] h-px w-[clamp(44px,7vw,88px)] bg-gradient-to-r from-[#d4d4d4]/45 via-[#d4d4d4]/15 to-transparent blur-[0.5px] max-md:top-[8px]" />
        <div className="absolute left-[70%] top-[14px] h-px w-[clamp(40px,6vw,80px)] bg-gradient-to-r from-white/25 via-[#d4d4d4]/10 to-transparent blur-[0.75px] max-md:top-[12px]" />
        <svg
          viewBox="0 0 120 64"
          className="h-full w-full -scale-x-100 fill-[#737373] drop-shadow-[0_0_4px_rgba(255,255,255,0.25)] dark:fill-[#f5f5f5]"
          focusable="false"
        >
          <path d="M114 29.7c-1.4-2.6-5.2-4.3-9.2-4.3H78.5L52.8 4.8c-2-1.6-4.6-2.5-7.2-2.5h-7.3l14.2 23.1H25.1L13.8 15.2H6.9l5.3 16.7-5.3 16.7h6.9l11.3-10.2h27.4L38.3 61.5h7.3c2.6 0 5.2-.9 7.2-2.5l25.7-20.6h26.3c4 0 7.8-1.7 9.2-4.3l1.2-2.2-1.2-2.2Z" />
        </svg>
      </div>}

      {(showRain || showSnow) && (
        <div className="absolute inset-x-0 top-0 h-[48vh] overflow-hidden">
          {precipitation.map((drop, index) => (
            <span
              key={index}
              className={`absolute top-[-8%] will-change-transform [animation-play-state:var(--atmosphere-play-state)] ${drop.hiddenOnMobile ? "max-md:hidden" : ""} ${
                showSnow
                  ? "size-1 animate-weather-snow rounded-full bg-white/60 blur-[0.3px]"
                  : "h-8 w-px animate-weather-rain bg-gradient-to-b from-transparent via-[#a3a3a3]/55 to-[#d4d4d4]/15"
              }`}
              style={{
                left: drop.left,
                animationDelay: drop.delay,
                animationDuration: showSnow
                  ? `${Number.parseFloat(drop.duration) * 3}s`
                  : drop.duration,
              }}
            />
          ))}
        </div>
      )}

      {weatherMode === "fog" && (
        <div className="absolute inset-x-0 top-[8%] h-[34vh] animate-mist-drift bg-[linear-gradient(to_bottom,transparent,rgba(212,212,212,0.2),transparent)] blur-2xl [animation-play-state:var(--atmosphere-play-state)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(163,163,163,0.12),transparent)]" />
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(115,115,115,0.1)_76%,rgba(26,26,26,0.18)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.22)_72%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};

export default MonochromeBackground;
