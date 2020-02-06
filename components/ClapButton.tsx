import React, { ReactElement, useEffect } from "react";

import confetti from "canvas-confetti";

import SuperButton from "./SuperButton";

interface Props {
  incrementClaps: () => void;
}

export default function userClaps({ incrementClaps }: Props): ReactElement {
  let myConfetti: (options: {
    particleCount: number;
    startVelocity: number;
    spread: number;
    origin: { x: number; y: number };
  }) => void;

  useEffect(() => {
    myConfetti = confetti.create(document.getElementById("confetti"), {
      resize: true,
      useWorker: true
    });
  });

  const hanndleClick = () => {
    myConfetti({
      particleCount: Math.random() * 120,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0.42 + Math.random() / 6,
        // since they fall down, start a bit higher than random
        y: 0.5 - Math.random() / 10
      }
    });
    incrementClaps();
  };

  return (
    <div className="text-center my-8">
      <SuperButton label="Clap" onClick={hanndleClick} />
    </div>
  );
}
