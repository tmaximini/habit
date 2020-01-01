import React, { ReactElement } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_CLAP = gql`
  mutation CreateUser($username: String!) {
    addClap(username: $username) {
      claps
    }
  }
`;

interface Props {
  claps: number;
  username: String;
}

export default function userClaps({ claps, username }: Props): ReactElement {
  const [addClap, { data }] = useMutation(ADD_CLAP);

  console.info({ data });

  return (
    <div>
      {claps} Claps!
      <button
        onClick={() =>
          addClap({
            variables: { username },
            optimisticResponse: {
              __typename: "Mutation",
              addClap: {
                __typename: "User",
                claps: claps + 1
              }
            }
          })
        }
      >
        Clap
      </button>
    </div>
  );
}
