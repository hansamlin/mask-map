import React from "react";
import styled from "styled-components";

import Info from "./info";
import Search from "./search";
import List from "./list";
import TextProvider from "../store/textProvider";

export default () => {
  return (
    <Container>
      <Info />
      <TextProvider>
        <Search />
        <List />
      </TextProvider>
    </Container>
  );
};

const Container = styled.div`
  width: 315px;
  height: 100vh;
  -webkit-box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
  box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
  z-index: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  overflow: hidden;
  display: grid;
  grid-template-rows: 136px 124px auto;
`;
