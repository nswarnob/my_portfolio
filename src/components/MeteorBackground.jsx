import { useEffect, useRef } from "react";

const getThemeColors = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");

  return isDarkMode
    ? {
        overlay: "rgba(15, 23, 42, 0.3)",
        meteorRgb: "120, 170, 210",
      }
    : {
        overlay: "rgba(248, 250, 252, 0.4)",
        meteorRgb: "99, 102, 241",
      };
};

const MeteorBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6;
    };
    setCanvasSize();

    const meteors = [];
    const meteorCount = prefersReducedMotion ? 3 : 8;

    const createMeteor = () => ({
      x: Math.random() * canvas.width,
      y: -50,
      length: Math.random() * 40 + 40,
      width: Math.random() * 1.2 + 0.8,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      angle: Math.random() * 0.2 + 0.1,
    });

    for (let i = 0; i < meteorCount; i++) {
      meteors.push(createMeteor());
    }

    let animationId;

    const drawFrame = (updatePosition = true) => {
      const { overlay, meteorRgb } = getThemeColors();

      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((meteor, index) => {
        if (updatePosition) {
          meteor.x += Math.cos(meteor.angle) * meteor.speed * 0.6;
          meteor.y += meteor.speed * 0.6;
        }

        ctx.strokeStyle = `rgba(${meteorRgb}, ${meteor.opacity})`;
        ctx.lineWidth = meteor.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - Math.cos(meteor.angle) * meteor.length,
          meteor.y - meteor.length,
        );
        ctx.stroke();

        if (meteor.y > canvas.height || meteor.x > canvas.width) {
          meteors[index] = createMeteor();
        }
      });
    };

    const animate = () => {
      drawFrame(true);

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
      drawFrame(false);
    };

    const observer = new MutationObserver(() => {
      drawFrame(false);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full"
      style={{ height: "60vh", maxHeight: "calc(100vh - 80px)" }}
    />
  );
};

export default MeteorBackground;
