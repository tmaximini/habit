import React, { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";

import gql from "graphql-tag";

export const GET_USERS = gql`
  query getUsers {
    users {
      username
      claps
      addictions {
        name
        since
        status
      }
    }
  }
`;

interface Props {}

export default function userList({}: Props): ReactElement {
  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  const { users } = data;

  return (
    <div>
      {users.map(user => (
        <div key={user.username}>
          <Link href={`/u/${user.username}`}>{user.username}</Link>
        </div>
      ))}
    </div>
  );
}
