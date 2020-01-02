import * as React from "react";
import { withApollo } from "../lib/apollo";

import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "../components/layoutComp";

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
  const [createUser, { data }] = useMutation(CREATE_USER);
  const [since, setSince] = React.useState(new Date());
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = vals => {
    const params = { ...vals, since };
    createUser({ variables: params });
  };

  const onDateChange: (date: Date) => void = (date: Date) => {
    date.setHours(0);
    date.setMinutes(0);
    setSince(date);
  };

  return (
    <Layout>
      <h1>Create a Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          name="username"
          placeholder="Your username"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 my-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
          ref={register({ required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          name="email"
          type="email"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 my-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
          placeholder="Your email"
          ref={register({ required: true })}
        />
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 my-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
          name="tagline"
          placeholder="Your tagline"
          ref={register}
        />
        <DatePicker
          selected={since}
          maxDate={new Date()}
          onChange={onDateChange}
          label="Your sober start date"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-400 my-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
        />
        {/* errors will return when field validation fails  */}
        {errors.usernameRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </Layout>
  );
};

export default withApollo(Create);
