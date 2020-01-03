import React, { ReactElement, useState } from "react";

import { Button } from "@chakra-ui/core";

import "./SuperButton.css";

interface Props {
  label: String;
  onClick: () => void;
}

export default function SuperButton({ label, onClick }: Props): ReactElement {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    console.log("press");
    setIsActive(true);
    setTimeout(() => setIsActive(false), 500);
    onClick();
  };

  return (
    <button
      className={isActive ? `confetti-button animate` : `confetti-button`}
      onClick={handlePress}
    >
      {label}
    </button>
  );
}
