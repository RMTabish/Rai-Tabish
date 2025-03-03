import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Container, ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // ✅ Use the "slim" version for better performance

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // ✅ Initialize the tsParticles engine only once per application
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // ✅ Function to check if particles are loaded
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("✅ Particles Loaded:", container);
  };

  // ✅ Define particle options
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // ✅ Background color (black)
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" }, // ✅ White particles
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 2, // ✅ Slower speed for a cool effect
          straight: false,
        },
        number: { value: 80, density: { enable: true } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  // ✅ Only render particles after initialization is complete
  return init ? (
    <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
  ) : null;
};

export default ParticlesBackground;
