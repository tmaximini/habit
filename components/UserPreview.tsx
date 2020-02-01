import React, { ReactElement } from "react";
import Link from "next/link";
import { daysSince } from "../helpers";

import { User } from "./types";
import { Avatar } from "@chakra-ui/core";

interface Props {
  user: User;
}

export default function UserPreview({ user }: Props): ReactElement {
  return (
    <div className="flex items-center p-4">
      <div>
        <Link href={`/u/${user.username}`}>
          <a href={`/u/${user.username}`}>{user.username}</a>
        </Link>
        <Avatar size="lg" name={user.username} src={user.avatarUrl} />
        <span className="text-m text-gray-600">
          {user.tagline || `Booyaka`}
        </span>
      </div>
    </div>
  );
}
