import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;

export default ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
