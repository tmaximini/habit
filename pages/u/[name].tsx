import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Head from "next/head";

import { withApollo } from "../../lib/apollo";

import Addiction from "../../components/addiction";
import Layout from "../../components/layoutComp";
import User from "../../components/user";
import UserClaps from "../../components/userClaps";

import gql from "graphql-tag";

export const GET_USER_BY_NAME = gql`
  query getUser($name: String!) {
    user(name: $name) {
      username
      claps
      since
      tagline
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
    console.info("mount");

    return function cleanup() {
      console.log("UNMOUNTTT");
      writeClapsToDb();
    };
  }, [false]);

  return (
    <Layout>
      <Head>
        <title>{user.username} gets Sober!</title>
      </Head>

      <Addiction since={user.since} />

      <UserClaps
        claps={user.claps + nrOfClaps}
        incrementClaps={incrementClaps}
      />
      <User username={user.username} tagline={user.tagline} />
    </Layout>
  );
};

export default withApollo(UserPage);
