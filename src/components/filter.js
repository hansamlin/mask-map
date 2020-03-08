import React from "react";
import styled from "styled-components";

import Button from "./button";

export default () => {
  return (
    <Container>
      <Button />
      {/* <Button id="all" checked={true}>
        所有口罩
      </Button>
      <Button id="adult" checked={false}>
        成人口罩
      </Button>
      <Button id="child" checked={false}>
        兒童口罩
      </Button> */}
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
