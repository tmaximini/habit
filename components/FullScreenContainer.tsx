import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function FullScreenContainer({ children }: Props): ReactElement {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {children}
    </div>
  );
}
