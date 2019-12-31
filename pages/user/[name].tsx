import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";

import Head from "next/head";

import React, { useState } from "react";

import { withApollo } from "../../lib/apollo";

import Congrats from "../../components/congrats";
import Addiction from "../../components/addiction";
import Layout from "../../components/layoutComp";
import User from "../../components/user";

import gql from "graphql-tag";

export const GET_USER_BY_NAME = gql`
  query getUser($name: String!) {
    user(name: $name) {
      username
      addictions {
        name
        since
        status
      }
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

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  const { user } = data;

  return (
    <Layout>
      <Head>
        <title>{user.username} gets Sober!</title>
      </Head>

      {user.addictions.map(addiction => {
        const since = parseInt(addiction.since) / 1000;

        return (
          <div
            key={`${user.username}-${addiction.name}`}
            className="rounded bg-gray-500 p-4"
          >
            <Congrats unixTime={since} name={addiction.name} />
            <Addiction unixTime={since} name={addiction.name} />
          </div>
        );
      })}
      <User username={user.username} hookline={user.hookline} />
    </Layout>
  );
};

export default withApollo(UserPage);
