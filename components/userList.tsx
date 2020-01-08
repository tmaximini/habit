import React, { ReactElement } from "react";
import { useQuery } from "@apollo/react-hooks";
import Link from "next/link";

import gql from "graphql-tag";

import { formatDate, daysSince } from "../helpers";

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
    <div className="my-4 max-w-full overflow-x-auto">
      <table>
        <tr>
          <th>Name</th>
          <th>Sober Date</th>
          <th>Days Sober</th>
          <th>Claps received</th>
          <th>Location</th>
        </tr>

        {users.map(user => (
          <tr key={user.username}>
            <td className="py-2">
              <div className="flex items-center">
                <div>
                  <Link href={`/u/${user.username}`}>{user.username}</Link>

                  <p className="text-m text-gray-600">
                    {user.tagline || `Booyaka`}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-2  px-12">{formatDate(new Date(user.since))}</td>
            <td className="p-2  px-12">
              {daysSince(new Date(user.since)).toFixed(0)}
            </td>
            <td className="p-2  px-12">{user.claps}</td>
            <td className="p-2">Berlin</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
