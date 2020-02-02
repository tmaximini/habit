import React, { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import UserPreview from "./UserPreview";

import gql from "graphql-tag";
import SoberSince from "./SoberSince";

export const GET_USERS = gql`
  query getUsers {
    users {
      username
      tagline
      claps
      since
    }
  }
`;

interface Props {
  showDays?: boolean;
}

export default function userList({ showDays }: Props): ReactElement {
  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  const { users } = data;

  return (
    <figure className="my-4 max-w-full overflow-x-auto">
      {users.map(user => (
        <UserPreview key={user.username} user={user} showDays={showDays} />
      ))}
    </figure>
  );
}
