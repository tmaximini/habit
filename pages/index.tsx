import React, { useState } from "react";

import { withApollo } from "../lib/apollo";

import Layout from "../components/layoutComp";
import UserList from "../components/userList";

const Home = () => {
  return (
    <Layout>
      <h2>Yo</h2>
      <UserList />
    </Layout>
  );
};

export default withApollo(Home);
