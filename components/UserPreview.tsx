import React, { ReactElement } from "react";
import Link from "next/link";
import { daysSince } from "../helpers";

import { User } from "./types";

interface Props {
  user: User;
}

export default function UserPreview({ user }: Props): ReactElement {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <Link href={`/u/${user.username}`}>
            <a href={`/u/${user.username}`}>{user.username}</a>
          </Link>
          <span className="text-m text-gray-600">
            {user.tagline || `Booyaka`}
          </span>
        </div>
      </div>
    </div>
  );
}
