import React from "react";
import styled from "styled-components";

import Button from "./button";

export default () => {
  return (
    <Container>
      <Button />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px auto;
`;
