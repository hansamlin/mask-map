import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

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
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    setInnerHeight(window.innerHeight);

    const resize = () => {
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ height: innerHeight }}>
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: ${props => props.theme.height}px;

  @media (min-width: 360px) {
    display: block;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 315px auto;
  }
`;
