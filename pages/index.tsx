import React, { useState } from "react";

import { withApollo } from "../lib/apollo";

import Typed from "react-typed";

import Layout from "../components/layoutComp";
import UserList from "../components/userList";

import { Heading } from "@chakra-ui/core";

const strings = ["High", "Drunk", "Porn", "Hangover", "Cocaine"];

const Home = () => {
  return (
    <Layout>
      <Heading className="my-4" size="2xl">
        Sober is the new{" "}
        <Typed
          strings={strings}
          typeSpeed={40}
          backSpeed={50}
          backDelay={2500}
          loop
        />
      </Heading>
      <h3 className="text-2xl">
        These fine people are getting sober right now:
      </h3>
      <UserList />
    </Layout>
  );
};

export default withApollo(Home);
