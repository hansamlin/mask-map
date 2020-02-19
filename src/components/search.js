import React from "react";
import styled from "styled-components";

import Input from "./input";
import Filter from "./filter";

export default () => {
  return (
    <Container>
      <Input />
      <Filter />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 124px;
  padding: 16px 20px;
  border: 1px solid #eaeaea;
`;
