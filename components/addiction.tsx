import React from "react";

import Pie from "./pie";

interface IAddictionProps {
  since: Date;
}

const Addiction: React.FC<IAddictionProps> = ({ since }) => {
  const requestRef: { current: number } = React.useRef();

  const sinceDate = new Date(since);

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
    time: sinceDate.getTime()
  });

  function update() {
    const now = new Date().getTime();
    const seconds = (now - sinceDate.getTime()) / 1000;

    setData({
      ...data,
      years: seconds / 31556952,
      months: seconds / 2592000,
      weeks: seconds / 604800,
      days: seconds / 86400,
      hours: seconds / 3600,
      minutes: seconds / 60,
      time: sinceDate.getTime(),
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
  }, [since]); // Make sure the effect runs only once

  return (
    <div className="flex flex-wrap space-between max-w-xs">
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
