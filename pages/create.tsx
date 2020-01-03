import * as React from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import slugify from "slugify";

import { withApollo } from "../lib/apollo";

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

  const router = useRouter();

  console.log({ data, error });

  const onSubmit = vals => {
    createUser({ variables: vals });

    // todo: what if createUser errors?
    router.push(`/u/${slugify(vals.username)}`);
  };

  return (
    <Layout>
      <Heading>Create your Page</Heading>
      <CreateUserForm onSubmit={onSubmit} />
    </Layout>
  );
};

export default withApollo(Create);
