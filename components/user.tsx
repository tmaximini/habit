import * as React from "react";

export interface IUserProps {
  username: String;
  tagline: String;
}

export default function User(props: IUserProps) {
  return (
    <div className="rounded-lg p-4 my-4 bg-gray-800 w-auto inline-block">
      <div className="flex items-center">
        <img
          className="rounded-full mr-4"
          style={{
            maxHeight: "100px"
          }}
          src="/italia.jpg"
          alt="Avatar of Jonathan Reinink"
        />
        <div>
          <h2 className="text-2xl text-white uppercase leading-none">
            {props.username}
          </h2>
          <p className="text-xl text-gray-400">{props.tagline || `Booyaka`}</p>
        </div>
      </div>
    </div>
  );
}
