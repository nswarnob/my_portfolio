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
    const meteorCount = prefersReducedMotion ? 5 : 15;

    const createMeteor = () => ({
      x: Math.random() * canvas.width,
      y: -50,
      length: Math.random() * 80 + 50,
      width: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 6 + 4,
      opacity: Math.random() * 0.5 + 0.3,
      angle: Math.random() * 0.3 + 0.2,
    });

    // Initialize meteors
    for (let i = 0; i < meteorCount; i++) {
      meteors.push(createMeteor());
    }

    let animationId;
    const animate = () => {
      ctx.fillStyle = "rgba(15, 23, 42, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      meteors.forEach((meteor, index) => {
        // Update position
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += meteor.speed;

        // Draw meteor
        ctx.strokeStyle = `rgba(148, 163, 184, ${meteor.opacity})`;
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
