import * as React from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import slugify from "slugify";

import { withApollo } from "../lib/apollo";

import Layout from "../components/layoutComp";
import CreateUserForm from "../components/createUserForm";

import { Heading, Flex } from "@chakra-ui/core";

const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $email: String!
    $since: String!
    $tagline: String
    $avatarUrl: String
  ) {
    createUser(
      username: $username
      email: $email
      tagline: $tagline
      since: $since
      avatarUrl: $avatarUrl
    ) {
      username
      email
      since
    }
  }
`;

export interface ICreateProps {}

const Create = (props: ICreateProps) => {
  const [createUser, { data, error }] = useMutation(CREATE_USER);

  const router = useRouter();

  const onSubmit = vals => {
    createUser({ variables: vals });

    // todo: what if createUser errors?
    router.push(`/u/${slugify(vals.username)}`);
  };

  return (
    <Layout>
      <Heading>Create your Page</Heading>
      <div className="flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-col">
        <CreateUserForm onSubmit={onSubmit} />

        <img className="px-4 py-2" src="/motivation.jpg" />
      </div>
    </Layout>
  );
};

export default withApollo(Create);
