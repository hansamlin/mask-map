import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Info from "../info";
import Search from "../search";
import List from "./list";
import Button from "../sidebarButton";
import TextProvider from "../../store/textProvider";
import FilterProvider from "../../store/filterProvider";

export default () => {
  const [toggle, setToggle] = useState(true);

  return (
    <ThemeProvider theme={{ toggle }}>
      <Container>
        <Info />
        <TextProvider>
          <FilterProvider>
            <Search />
            <List />
          </FilterProvider>
        </TextProvider>
        <Button setToggle={setToggle} />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  @media (min-width: 360px) {
    height: ${props => props.theme.height}px;
    width: 315px;
    -webkit-box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
    -moz-box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
    box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
    z-index: 1;
    background: #ffffff 0% 0% no-repeat padding-box;
    display: grid;
    grid-template-rows: 136px 124px ${props => props.theme.height - 260}px;
    transform: ${props =>
      props.theme.toggle ? "translateX(-100%)" : "translateX(0)"};
    position: fixed;
    transition: transform 0.5s;
  }

  @media (min-width: 768px) {
    position: relative;
    transform: translateX(0);
  }
`;
