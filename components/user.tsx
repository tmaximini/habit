import * as React from "react";

import { Avatar } from "@chakra-ui/core";

export interface IUserProps {
  username: string;
  tagline: string;
  avatar: string;
}

export default function User({ username, tagline, avatar }: IUserProps) {
  console.info({ avatar });

  return (
    <div className="rounded-lg p-4 my-4 w-auto border border-gray-500 inline-block">
      <div className="flex items-center">
        <Avatar name={username} src={avatar} />

        <div className="pl-3">
          <span className="text-lg text-gray-800 leading-none">{username}</span>
          <p className="text-sm text-gray-600">{tagline || `Booyaka`}</p>
        </div>
      </div>
    </div>
  );
}
