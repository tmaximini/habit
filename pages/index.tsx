import React, { useState } from "react";

import { withApollo } from "../lib/apollo";

import Typed from "react-typed";

import Layout from "../components/layoutComp";
import UserList from "../components/userList";
import FullScreenContainer from "../components/FullScreenContainer";

import { IoMdArrowDown } from "react-icons/io";
import Nav from "../components/nav";

const strings = ["High", "Drunk", "Porn", "Hangover", "Cocaine"];

const Home = () => {
  return (
    <>
      <FullScreenContainer>
        <Nav />
        <div className="h-full w-full flex justify-center content-center border-b border-gray-500">
          <div className="align-middle self-center inline-block text-center">
            <h1 className="headline-landing my-4 text-gray-800 font-bold">
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
            </h1>
          </div>
          <span
            style={{
              position: "absolute",
              left: "calc(50% - 12px)",
              bottom: "40px"
            }}
          >
            <IoMdArrowDown size="48px" color="#718096" />
          </span>
        </div>
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
