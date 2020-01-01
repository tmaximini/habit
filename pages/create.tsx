import * as React from "react";
import { withApollo } from "../lib/apollo";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!) {
    createUser(username: $username, email: $email) {
      username
      email
    }
  }
`;

export interface ICreateProps {}

const Create = (props: ICreateProps) => {
  const [createUser, { data }] = useMutation(CREATE_USER);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = vals => {
    createUser({ variables: vals });
  };

  return (
    <div>
      <h1>Create a Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          name="username"
          placeholder="Your username"
          ref={register({ required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          name="email"
          placeholder="Your email"
          ref={register({ required: true })}
        />
        <input name="tagline" placeholder="Your tagline" ref={register} />
        <textarea
          name="whyStatement"
          placeholder="Your why Statement"
          ref={register}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default withApollo(Create);
