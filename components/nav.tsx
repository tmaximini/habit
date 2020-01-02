import React from "react";
import Link from "next/link";

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/create">
          <a>Create your own</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
