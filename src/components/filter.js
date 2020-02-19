import React, { useState } from "react";
import styled from "styled-components";

import Button from "./button";

export default () => {
  const [check, setCheck] = useState({ all: true, adult: false, child: false });

  return (
    <Container>
      <Button check={check.all} id="all" setCheck={setCheck}>
        所有口罩
      </Button>
      <Button check={check.adult} id="adult" setCheck={setCheck}>
        成人口罩
      </Button>
      <Button check={check.child} id="child" setCheck={setCheck}>
        兒童口罩
      </Button>
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
