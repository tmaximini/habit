import React, { FunctionComponent } from "react";

import "./styles.css";

const Layout: FunctionComponent = ({ children }) => {
  return <main className="container mx-auto px-4">{children}</main>;
};

export default Layout;
