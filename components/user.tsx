import * as React from "react";

export interface IUserProps {}

export default function User(props: IUserProps) {
  return (
    <div className="md:flex py-4 my-4">
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
          <h2 className="text-2xl text-gray-900 leading-none">
            Jonathan Reinink
          </h2>
          <p className="text-xl text-gray-600">Booyaka</p>
        </div>
      </div>
    </div>
  );
}
