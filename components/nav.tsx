import React from "react";
import Link from "next/link";

import { Flex, Box } from "@chakra-ui/core";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a
        href={href}
        className="text-white font-semibold text-lg p-4 sm:p-4 md:p-6 md:text-xl lg:p-8"
      >
        {children}
      </a>
    </Link>
  );
};

const Nav = () => (
  <nav
    style={{
      margin: "20px 0",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%"
    }}
  >
    <Flex w="100%" justifyContent="space-between" alignItems="center">
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Box>
          <NavLink href="/">Sober Count</NavLink>
          <NavLink href="/about">about</NavLink>
        </Box>
      </Flex>
      {/* <Box>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/create">Make yours!</NavLink>
      </Box> */}
    </Flex>
  </nav>
);

export default Nav;
