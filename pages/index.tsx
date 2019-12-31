import React, { useState } from "react";

import { withApollo } from "../lib/apollo";

import Layout from "../components/layoutComp";
import User from "../components/user";

const Home = () => {
  return (
    <Layout>
      <h2>Yo</h2>
    </Layout>
  );
};

export default withApollo(Home);
