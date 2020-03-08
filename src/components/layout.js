import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans TC', sans-serif;
  font-style: normal;
  font-weight: 400;
}
`;

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

  @media (min-width: 360px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 315px auto;
  }
`;
