import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Info from "./info";
import Search from "./search";
import List from "./list";
import TextProvider from "../store/textProvider";

export default () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle(prev => !prev);

  return (
    <ThemeProvider theme={{ toggle }}>
      <Container>
        <Info />
        <TextProvider>
          <Search />
          <List />
        </TextProvider>
        <Toggle onClick={handleToggle}></Toggle>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  @media (min-width: 360px) {
    height: 100vh;
    width: 315px;
    -webkit-box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
    -moz-box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
    box-shadow: 5px 0px 15px -8px rgba(0, 0, 0, 0.77);
    z-index: 1;
    background: #ffffff 0% 0% no-repeat padding-box;
    display: grid;
    grid-template-rows: 136px 124px auto;
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

const Toggle = styled.button`
  position: absolute;
  width: 30px;
  height: 50px;
  right: -30px;
  top: 10vh;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9)
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAQAAAAXDMSnAAAAi0lEQVR4AX3JQcqBURQG4O/+9WNG30D3vOfSDTuQsgcZyBakZANSzMVMBme3zsBI5/VMn4ZKLP5ki1E4tYejWpilxVUtzOEUD68odYmXR5BJNp/4zllXD2phllYvamHmirsayUkfJ5ruHzueTldC08kcT5YOY9xYujqQM03XKXuaLmEtNF1e1Nz89gbL+0do6OEwRwAAAABJRU5ErkJggg==)
    no-repeat;
    background-position: center;
    background-size: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  z-index: -1;
  transform: ${props => props.theme.toggle && "scaleX(-1)"};
  outline: none;
  border: 0;
  border-left: 1px solid #d4d4d4;

  @media (min-width: 768px) {
    display: none;
  }
`;
