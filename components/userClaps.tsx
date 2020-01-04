import React, { ReactElement } from "react";

import { Flex, Button } from "@chakra-ui/core";

import SuperButton from "./SuperButton";

interface Props {
  claps: number;
  incrementClaps: () => void;
}

export default function userClaps({
  claps,
  incrementClaps
}: Props): ReactElement {
  return (
    <Flex
      className="my-8 max-w-xs"
      align="center"
      direction="column"
      justify="flex-start"
    >
      {/* <Button onClick={incrementClaps}>Clap</Button> */}
      <SuperButton label="Clap" onClick={incrementClaps} />
      <Flex>
        <span className="p-4 font-semibold">{claps} Claps!</span>
      </Flex>
    </Flex>
  );
}
