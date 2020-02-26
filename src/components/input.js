import React from "react";
import styled from "styled-components";

import Search from "../images/search.svg";

export default () => {
  return (
    <Container>
      <Input type="text" placeholder="搜尋..." />
      <Submit width="20" height="20" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 10px;
  width: 275px;
  height: 40px;
  border: 0;
  display: block;
  margin: auto;
  padding: 10px 16px;
  font-size: 16px;
  position: relative;
`;

const Submit = styled(Search)`
  position: absolute;
  top: 10px;
  right: 16px;
  cursor: pointer;

  & > path {
    stroke: #cccccc;
  }
`;
