import React, { ReactElement } from "react";

import { Flex, Button } from "@chakra-ui/core";

interface Props {
  claps: number;
  incrementClaps: () => void;
}

export default function userClaps({
  claps,
  incrementClaps
}: Props): ReactElement {
  return (
    <Flex align="center" justify="center">
      <Flex>
        <span className="p-4">{claps} Claps!</span>
      </Flex>
      <Button onClick={incrementClaps}>Clap</Button>
    </Flex>
  );
}
