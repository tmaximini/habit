import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Head from "next/head";

import React, { useState } from "react";

import { withApollo } from "../../lib/apollo";

import Congrats from "../../components/congrats";
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

const ADD_CLAP = gql`
  mutation CreateUser($username: String!) {
    addClap(username: $username) {
      claps
    }
  }
`;

const UserPage = () => {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_USER_BY_NAME, {
    variables: {
      name: router.query.name
    }
  });

  const [addClap] = useMutation(ADD_CLAP);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  const { user } = data;

  const [nrOfClaps, setNrOfClaps] = useState(user.claps);

  const incrementClaps = () => {
    addClap({
      variables: { username: user.username }
      // optimisticResponse: {
      //   __typename: "Mutation",
      //   addClap: {
      //     __typename: "User",
      //     claps: nrOfClaps + 1
      //   }
      // }
    });
    setNrOfClaps(nrOfClaps + 1);
  };

  return (
    <Layout>
      <Head>
        <title>{user.username} gets Sober!</title>
      </Head>

      <Addiction since={user.since} />

      <UserClaps claps={nrOfClaps} incrementClaps={incrementClaps} />
      <User username={user.username} tagline={user.tagline} />
    </Layout>
  );
};

export default withApollo(UserPage);
