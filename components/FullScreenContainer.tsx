import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function FullScreenContainer({ children }: Props): ReactElement {
  return (
    <div
      className="flex justify-center content-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="align-middle self-center inline-block text-center">
        {children}
      </div>
    </div>
  );
}
