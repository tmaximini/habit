import React, { ReactElement, ReactNode } from "react";
import { IoMdArrowDown } from "react-icons/io";

interface Props {
  children: ReactNode;
  grey?: boolean;
  arrow?: boolean;
  withBackground?: boolean;
  textColor?: string;
}

export default function FullScreenContainer({
  children,
  grey,
  arrow,
  withBackground,
  textColor
}: Props): ReactElement {
  const style = {
    width: "100vw",
    height: "100vh",
    backgroundColor: withBackground ? "#01223b" : grey ? "#FAFBFC" : "white",
    borderBottom: "1px solid #eaeaea",
    background: withBackground
      ? "#01223b url(./background.png) bottom right no-repeat"
      : "none",
    backgroundSize: "contain",
    color: textColor || "black"
  };

  return (
    <div style={style}>
      {children}
      {arrow && (
        <span
          style={{
            position: "absolute",
            left: "calc(50% - 12px)",
            bottom: "40px"
          }}
        >
          <IoMdArrowDown size="36px" color="#eaeaea" />
        </span>
      )}
    </div>
  );
}
