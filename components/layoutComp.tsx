import React, { ReactElement, ReactNode } from "react";
import { theme } from "@chakra-ui/core";
import { ThemeProvider } from "@chakra-ui/core";

import Nav from "./nav";

// import tailwind
import "./styles.css";

// Let's say you want to add custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac"
    }
  }
};

interface Props {
  children: ReactNode;
  classes?: string;
}

export default function Layout({ children, classes }: Props): ReactElement {
  const defaultClasses = "container mx-auto p-8 my-24 mw-100";

  return (
    <ThemeProvider theme={customTheme}>
      <main className={classes ? classes : defaultClasses}>
        {/* <Nav /> */}
        {children}
      </main>
    </ThemeProvider>
  );
}
