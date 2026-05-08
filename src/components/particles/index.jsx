import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBg() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) {
        return <Box sx={{ position: "absolute", width: "100%", height: "100vh", bgcolor: "#0d47a1", zIndex: -1 }} />;
    }

    return (
        <Particles
        id="tsparticles"
        options={{
            fullScreen: {
                enable: false,
            },
             background: {
                color: {
                  value: "#0d47a1",
                },
              },
              fpsLimit: 120,
              interactivity: {
                
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 250,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                  },
                  value: 100,
                },
                opacity: {
                  value: 0.4,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 2, max: 6 },
                },
              },
              detectRetina: true,
        }}
        />
    )
}

export default ParticleBg