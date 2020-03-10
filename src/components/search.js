import React from "react";
import styled from "styled-components";

import Input from "./input";
import Filter from "./filter";

export default () => {
  return (
    <Container>
      <InputBox>
        <Input />
      </InputBox>
      <Filter />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #eaeaea;
  }
`;

const InputBox = styled.div`
  position: relative;
`;
