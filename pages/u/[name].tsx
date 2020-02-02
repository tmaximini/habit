import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Head from "next/head";

import { withApollo } from "../../lib/apollo";

import { Heading, Flex } from "@chakra-ui/core";

import Addiction from "../../components/addiction";
import SoberSince from "../../components/SoberSince";
import Layout from "../../components/layoutComp";
import UserPreview from "../../components/UserPreview";
import UserClaps from "../../components/userClaps";
import ClapButton from "../../components/ClapButton";
import Nav from "../../components/nav";

import gql from "graphql-tag";

export const GET_USER_BY_NAME = gql`
  query getUser($name: String!) {
    user(name: $name) {
      username
      claps
      since
      tagline
      avatarUrl
    }
  }
`;

const ADD_CLAPS = gql`
  mutation AddClaps($username: String!, $claps: Int!) {
    addClaps(username: $username, claps: $claps) {
      claps
    }
  }
`;

let clapCounter = 0;

const UserPage = () => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_USER_BY_NAME, {
    variables: {
      name: router.query.name
    }
  });

  const [addClaps] = useMutation(ADD_CLAPS);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  const { user } = data;

  const [nrOfClaps, setNrOfClaps] = useState(0);

  const incrementClaps = () => {
    setNrOfClaps(nrOfClaps + 1);
    clapCounter++;
  };

  const writeClapsToDb = () => {
    addClaps({
      variables: { username: user.username, claps: clapCounter }
    });
  };

  useEffect(() => {
    return function cleanup() {
      writeClapsToDb();
    };
  }, [false]);

  return (
    <Layout>
      <Head>
        <title>{user.username} gets Sober!</title>
      </Head>
      <Nav />

      <Heading size="2xl">{user.username} is sober!</Heading>
      <p className="text-lg">
        Support them by hitting that clap button or leaving a comment!
      </p>

      <canvas
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          pointerEvents: "none"
        }}
        id="confetti"
      />

      <Flex className="flex-wrap sm:flex-wrap md:flex lg:flex">
        <Flex className="md:p-8 lg:p-16">
          <SoberSince date={user.since} />
        </Flex>
        <Flex className="md:p-8 lg:p-16">
          <UserClaps claps={user.claps + nrOfClaps} />
        </Flex>
      </Flex>

      <ClapButton incrementClaps={incrementClaps} />

      <Addiction since={user.since} />

      <UserPreview user={user} showTagline />
    </Layout>
  );
};

export default withApollo(UserPage);
