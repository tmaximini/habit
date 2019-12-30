import React, { useState } from "react";

import { withApollo } from "../lib/apollo";

import Congrats from "../components/congrats";
import Layout from "../components/layout";
import Circles from "../components/circles";
import User from "../components/user";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
  const [since, setSince] = useState(new Date());
  const [unixTime, setUnixTime] = useState(since.getTime() / 1000);

  const onChange: (date: Date) => void = (date: Date) => {
    date.setHours(20);
    date.setMinutes(0);
    setSince(date);
    setUnixTime(date.getTime() / 1000);
  };

  let differenceInWords = "";

  const now = new Date();
  const difference = (now.getTime() - since.getTime()) / 1000; // seconds

  return (
    <Layout>
      <h3>Since when are you sober?</h3>
      <DatePicker selected={since} onChange={onChange} maxDate={now} />
      <div className="rounded bg-gray-500 p-4">
        <Congrats unixTime={unixTime} />

        <Circles unix={unixTime} />
      </div>
      <User />
    </Layout>
  );
};

export default withApollo(Home);
