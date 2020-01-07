import React, { useState } from "react";

import { withApollo } from "../lib/apollo";

import Typed from "react-typed";

import Layout from "../components/layoutComp";
import UserList from "../components/userList";
import FullScreenContainer from "../components/FullScreenContainer";

import { Heading } from "@chakra-ui/core";

const strings = ["High", "Drunk", "Porn", "Hangover", "Cocaine"];

const Home = () => {
  return (
    <>
      <FullScreenContainer>
        <Heading className="headline-landing my-4 text-gray-800">
          Sober
          <br />
          is the new
          <br />
          <Typed
            strings={strings}
            typeSpeed={40}
            backSpeed={50}
            backDelay={2500}
            loop
          />
        </Heading>
      </FullScreenContainer>
      <Layout>
        <h3 className="text-2xl">
          These fine people are getting sober right now:
        </h3>
        <UserList />
      </Layout>
    </>
  );
};

export default withApollo(Home);
