"use client";

import { useEffect } from "react";
import Confetti from "react-canvas-confetti";

interface Props {
  children: React.ReactNode;
}
export function ConfettiContainer({ children }: Props) {
  useEffect(() => {
    // Adicione a lógica para disparar os confetes ao carregar a página
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createConfettiParticle() {
      const angle = randomInRange(0, 360);
      const velocity = randomInRange(10, 20);
      const confettiProps = {
        ...defaults,
        particleCount: 1,
        angle,
        spread: randomInRange(20, 80),
        startVelocity: randomInRange(5, 10),
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
      };

      return (
        <Confetti
          {...confettiProps}
          key={Date.now() + randomInRange(0, 10000)}
        />
      );
    }

    function createConfettiBurst() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return;
      }

      const burstCount = Math.floor((timeLeft / 1000) * 50);
      for (let i = 0; i < burstCount; i++) {
        setTimeout(createConfettiParticle, i * 500);
      }

      setTimeout(createConfettiBurst, 500);
    }

    createConfettiBurst();
  }, []);

  return <div> {children}</div>;
}
