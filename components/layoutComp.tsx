import React, { FunctionComponent } from "react";
import Logo from "./logo";
import Nav from "./nav";

import "./styles.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <main className="container mx-auto px-4">
      <Nav />
      <Logo />
      {children}
    </main>
  );
};

export default Layout;
