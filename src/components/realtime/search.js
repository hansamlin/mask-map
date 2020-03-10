import React from "react";
import styled from "styled-components";

import Input from "../input";

export default () => {
  return (
    <Box>
      <Input />
    </Box>
  );
};

const Box = styled.div`
  @media (min-width: 360px) {
    border-radius: 30px;
    position: fixed;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.4);
    z-index: 1;
    top: 3vh;
    left: calc((100vw - 300px) / 2);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
