/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "#f5f5f5",
          100: "#f5f5f5",
          200: "#d4d4d4",
          300: "#d4d4d4",
          400: "#737373",
          500: "#737373",
          600: "#404040",
          700: "#1a1a1a",
          800: "#111111",
          900: "#080808",
          950: "#000000",
        },
        dark: {
          50: "#f5f5f5",
          100: "#f5f5f5",
          200: "#d4d4d4",
          300: "#d4d4d4",
          400: "#737373",
          500: "#737373",
          600: "#404040",
          700: "#1a1a1a",
          800: "#111111",
          900: "#080808",
          950: "#000000",
        },
      },
      animation: {
        "mist-drift": "mistDrift 32s ease-in-out infinite alternate",
        "cloud-layer-far": "cloudFar 60s linear infinite",
        "cloud-layer-mid": "cloudMid 50s linear -18s infinite",
        "cloud-layer-near": "cloudNear 42s linear -12s infinite",
        "airplane-cross": "airplaneCross 26s ease-in-out infinite",
        "reference-streak": "referenceStreak 5s linear infinite",
        "sun-drift": "sunDrift 12s ease-in-out infinite alternate",
        "weather-rain": "weatherRain 1.7s linear infinite",
        "weather-snow": "weatherSnow 6s linear infinite",
        "birds-cross": "birdsCross 24s linear infinite",
      },
      keyframes: {
        mistDrift: {
          from: { transform: "translate3d(-3%, -2%, 0) scale(1)" },
          to: { transform: "translate3d(4%, 3%, 0) scale(1.05)" },
        },
        cloudFar: {
          "0%": { opacity: "0", transform: "translate3d(-48%, 0, 0) scale(0.96)" },
          "8%": { opacity: "var(--cloud-opacity, 0.4)" },
          "88%": { opacity: "var(--cloud-opacity, 0.4)" },
          "100%": { opacity: "0", transform: "translate3d(48%, -2%, 0) scale(1.03)" },
        },
        cloudMid: {
          "0%": { opacity: "0", transform: "translate3d(-52%, 2%, 0) scale(0.97)" },
          "9%": { opacity: "var(--cloud-opacity, 0.4)" },
          "87%": { opacity: "var(--cloud-opacity, 0.4)" },
          "100%": { opacity: "0", transform: "translate3d(52%, -3%, 0) scale(1.04)" },
        },
        cloudNear: {
          "0%": { opacity: "0", transform: "translate3d(-56%, 3%, 0) scale(0.98)" },
          "10%": { opacity: "var(--cloud-opacity, 0.4)" },
          "86%": { opacity: "var(--cloud-opacity, 0.4)" },
          "100%": { opacity: "0", transform: "translate3d(56%, -4%, 0) scale(1.05)" },
        },
        airplaneCross: {
          "0%": {
            opacity: "0",
            transform: "translate3d(112vw, 8vh, 0)",
          },
          "3%": { opacity: "0.68" },
          "28%": {
            transform: "translate3d(82vw, 10vh, 0)",
          },
          "52%": {
            opacity: "0.68",
            transform: "translate3d(48vw, 13vh, 0)",
          },
          "74%": {
            opacity: "0.58",
            transform: "translate3d(18vw, 16vh, 0)",
          },
          "92%, 100%": {
            opacity: "0",
            transform: "translate3d(-12vw, 18vh, 0)",
          },
        },
        referenceStreak: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        sunDrift: {
          from: { transform: "translate3d(0, 0, 0)" },
          to: { transform: "translate3d(-10px, 6px, 0)" },
        },
        weatherRain: {
          from: { transform: "translate3d(0, -12vh, 0)", opacity: "0" },
          "12%": { opacity: "0.75" },
          to: { transform: "translate3d(-7vw, 58vh, 0)", opacity: "0" },
        },
        weatherSnow: {
          from: { transform: "translate3d(0, -10vh, 0)", opacity: "0" },
          "12%": { opacity: "0.7" },
          "55%": { transform: "translate3d(3vw, 24vh, 0)" },
          to: { transform: "translate3d(-2vw, 52vh, 0)", opacity: "0" },
        },
        birdsCross: {
          "0%": {
            transform: "translate3d(-14vw, 0, 0)",
            opacity: "0",
          },
          "8%": { opacity: "0.7" },
          "50%": {
            transform: "translate3d(50vw, 3vh, 0)",
            opacity: "0.65",
          },
          "92%": { opacity: "0.55" },
          "100%": {
            transform: "translate3d(112vw, -1vh, 0)",
            opacity: "0",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
