import React, { FunctionComponent } from "react";
import Logo from "./logo";
import Nav from "./nav";

import "./styles.css";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Nav />

      <main className="container mx-auto px-4">
        <Logo />
        {children}
      </main>
    </div>
  );
};

export default Layout;
