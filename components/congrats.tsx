import * as React from "react";

import differenceInDays from "date-fns/differenceInDays";
import differenceInMinutes from "date-fns/differenceInMinutes";
import differenceInHours from "date-fns/differenceInHours";

export interface ICongratsProps {
  unixTime: number;
}

export default function Congrats(props: ICongratsProps) {
  let differenceInWords = "";

  const now = new Date();
  const difference = (now.getTime() - props.unixTime) / 1000; // seconds
  if (difference < 60 * 60 * 2) {
    differenceInWords = `${differenceInMinutes(now, props.unixTime)} Minutes`;
  } else if (difference < 60 * 60 * 24 * 2) {
    // 2 days
    differenceInWords = `${differenceInHours(now, props.unixTime)} Hours`;
  } else {
    differenceInWords = `${differenceInDays(now, props.unixTime)} Days`;
  }

  return (
    <>
      <h1 className="font-bold text-gray-800 text-5xl">Congrats!</h1>
      <h2 className="font-semibold  text-gray-800  text-2xl">
        Sober since {differenceInWords}
      </h2>
    </>
  );
}
