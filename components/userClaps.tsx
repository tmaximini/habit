import React, { ReactElement, useEffect } from "react";

import confetti from "canvas-confetti";

import { Flex, Button } from "@chakra-ui/core";

import SuperButton from "./SuperButton";

interface Props {
  claps: number;
  incrementClaps: () => void;
}

export default function userClaps({
  claps,
  incrementClaps
}: Props): ReactElement {
  let myConfetti;

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
    <Flex align="center" direction="row">
      <h2>
        <span className="font-bold" style={{ fontSize: "6rem" }}>
          {claps}
        </span>
        <span>Claps</span>
      </h2>

      <SuperButton label="Clap" onClick={hanndleClick} />
    </Flex>
  );
}
