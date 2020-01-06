import React, { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";

import gql from "graphql-tag";

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

interface Props {}

export default function userList({}: Props): ReactElement {
  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  const { users } = data;

  return (
    <div className="my-4">
      <table>
        <tr>
          <th>Name</th>
          <th>Sober Since</th>
          <th>Location</th>
        </tr>

        {users.map(user => (
          <tr key={user.username}>
            <td className="py-2">
              <div className="flex items-center">
                <img
                  className="rounded-full mr-4"
                  style={{
                    maxHeight: "30px"
                  }}
                  src="/italia.jpg"
                  alt="Avatar of Jonathan Reinink"
                />
                <div>
                  <h2 className="text-2xl text-gray-900 leading-none">
                    <Link href={`/u/${user.username}`}>{user.username}</Link>
                  </h2>
                  <p className="text-m text-gray-600">
                    {user.tagline || `Booyaka`}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2  px-12">
              {new Intl.DateTimeFormat().format(new Date(user.since))}
            </td>
            <td className="p-2">Berlin</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
