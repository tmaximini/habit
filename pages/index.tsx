import React, { useState } from "react";

import { withApollo } from "../lib/apollo";

import Layout from "../components/layoutComp";
import UserList from "../components/userList";

const Home = () => {
  return (
    <Layout>
      <UserList />
    </Layout>
  );
};

export default withApollo(Home);
