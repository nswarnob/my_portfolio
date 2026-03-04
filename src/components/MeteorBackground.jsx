import { useEffect, useRef } from "react";

const MeteorBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6;
    };
    setCanvasSize();

    // Meteor properties
    const meteors = [];
    // fewer meteors on screen for light density
    const meteorCount = prefersReducedMotion ? 3 : 8;

    const createMeteor = () => ({
      x: Math.random() * canvas.width,
      y: -50,
      // shorter tails for calmer sky vibe
      length: Math.random() * 40 + 40,
      width: Math.random() * 1.2 + 0.8,
      // slower speed range for a driftier effect
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
      angle: Math.random() * 0.2 + 0.1,
    });

    // Initialize meteors
    for (let i = 0; i < meteorCount; i++) {
      meteors.push(createMeteor());
    }

    let animationId;
    const animate = () => {
      // increase background opacity for cleaner sky
      ctx.fillStyle = "rgba(15, 23, 42, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((meteor, index) => {
        // Update position slowly
        meteor.x += Math.cos(meteor.angle) * meteor.speed * 0.6;
        meteor.y += meteor.speed * 0.6;

        // Draw meteor
        // matte sky‑blue color
        ctx.strokeStyle = `rgba(120, 170, 210, ${meteor.opacity})`;
        ctx.lineWidth = meteor.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x - Math.cos(meteor.angle) * meteor.length,
          meteor.y - meteor.length,
        );
        ctx.stroke();

        // Reset if out of bounds
        if (meteor.y > canvas.height || meteor.x > canvas.width) {
          meteors[index] = createMeteor();
        }
      });

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(animate);
      }
    };

    if (!prefersReducedMotion) {
      animate();
    }

    const handleResize = () => setCanvasSize();
    window.addEventListener("resize", handleResize);

    return () => {
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
