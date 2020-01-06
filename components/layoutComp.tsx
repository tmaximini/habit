import React, { FunctionComponent } from "react";
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

const Layout: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <main className="container mx-auto px-4">
        <Nav />
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
