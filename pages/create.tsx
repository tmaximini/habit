import * as React from "react";
import { withApollo } from "../lib/apollo";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Layout from "../components/layoutComp";
import CreateUserForm from "../components/createUserForm";

import { Heading } from "@chakra-ui/core";

const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $email: String!
    $since: String!
    $tagline: String
  ) {
    createUser(
      username: $username
      email: $email
      tagline: $tagline
      since: $since
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

  console.log({ data, error });

  const onSubmit = vals => {
    createUser({ variables: vals });
  };

  return (
    <Layout>
      <Heading>Create your Page</Heading>
      <CreateUserForm onSubmit={onSubmit} />
    </Layout>
  );
};

export default withApollo(Create);
