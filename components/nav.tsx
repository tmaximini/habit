import React from "react";
import Link from "next/link";

import { Flex, Image, Box, Text } from "@chakra-ui/core";

import Logo from "./logo";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a href={href} className="text-white p-2">
        {children}
      </a>
    </Link>
  );
};

const Nav = () => (
  <nav style={{ marginBottom: "20px" }}>
    <Flex
      bg="#38a169"
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
          size={30}
        />
        <Text pl={3} color="white">
          <NavLink href="/">Sober Sount</NavLink>
        </Text>
      </Flex>
      <Box>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/create">Make yours!</NavLink>
      </Box>
    </Flex>
  </nav>
);

export default Nav;
