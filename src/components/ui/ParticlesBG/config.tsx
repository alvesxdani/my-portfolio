import { MoveDirection, OutMode } from "@tsparticles/engine";

export const configParticles = {
  key: 'basic',
  name: 'Basic',
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
      },
    },
    color: {
      value: '#444',
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.5,
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: '#555',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      onClick: {
        enable: false,
        mode: 'push',
      },
    },
    modes: {
      repulse: {
        distance: 200,
      },
      push: {
        quantity: 4,
      },
    },
  },
  background: {
    color: 'transparent',
  },
}