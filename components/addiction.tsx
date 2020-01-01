import React from "react";

import Pie from "./pie";

interface IAddictionProps {
  unixTime: number;
  name: string;
}

const Addiction: React.FC<IAddictionProps> = ({ unixTime, name }) => {
  const requestRef: { current: number } = React.useRef();

  const [data, setData] = React.useState({
    years: null,
    months: null,
    weeks: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    savings: null,
    cents: null,
    dailyCost: 630, // cents
    time: unixTime * 1000
  });

  function update() {
    const now = new Date().getTime();
    const seconds = (now - unixTime * 1000) / 1000;

    setData({
      ...data,
      years: seconds / 31556952,
      months: seconds / 2592000,
      weeks: seconds / 604800,
      days: seconds / 86400,
      hours: seconds / 3600,
      minutes: seconds / 60,
      time: unixTime * 1000,
      seconds: seconds,
      cents: (seconds / 86400) * data.dailyCost
    });
  }

  const animate: () => void = () => {
    update();
    // The 'state' will always be the initial value here
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [unixTime]); // Make sure the effect runs only once

  return (
    <div className="flex flex-wrap space-between">
      {data["seconds"] < 9999999 && (
        <Pie value={data["seconds"]} name="seconds" />
      )}
      <Pie value={data["minutes"]} name="minutes" />
      <Pie value={data["hours"]} name="hours" />
      <Pie value={data["days"]} name="days" />
      <Pie value={data["weeks"]} name="weeks" />
      <Pie value={data["months"]} name="months" />
      <Pie value={data["years"]} name="years" />
    </div>
  );
};

export default Addiction;