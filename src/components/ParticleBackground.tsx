import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          color: { value: '#a855f7' },
          shape: { type: 'circle' },
          opacity: { value: 0.3 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            outModes: { default: 'out' },
          },
        },
      }}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ParticleBackground;
