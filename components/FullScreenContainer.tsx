import React, { ReactElement, ReactNode } from "react";
import { IoMdArrowDown } from "react-icons/io";

interface Props {
  children: ReactNode;
  bgColor?: string;
  grey?: boolean;
  arrow?: boolean;
}

export default function FullScreenContainer({
  children,
  bgColor,
  grey,
  arrow
}: Props): ReactElement {
  const style = {
    width: "100vw",
    height: "100vh",
    backgroundColor: bgColor ? bgColor : grey ? "#FAFBFC" : "white",
    borderBottom: "1px solid #eaeaea"
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
