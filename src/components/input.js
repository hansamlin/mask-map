import React, { useContext } from "react";
import styled, { css, ThemeProvider } from "styled-components";

import Search from "../images/search.svg";
import { TextProvider } from "../store/textProvider";
import { close } from "./services";

export default () => {
  const { text, setText } = useContext(TextProvider);
  const handleChange = e => setText(e.target.value);
  const handleReset = () => setText("");

  return (
    <Container>
      <Input
        type="text"
        placeholder="搜尋店名或地址"
        onChange={handleChange}
        value={text}
      />
      <ThemeProvider theme={{ show: text.length > 0 }}>
        <Delete onClick={handleReset} />
        <Submit width="20" height="20" />
      </ThemeProvider>
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
  outline: none;
`;

const Position = css`
  position: absolute;
  top: 10px;
  right: 16px;
  cursor: pointer;
`;

const Submit = styled(Search)`
  ${Position};
  display: ${props => (props.theme.show ? "none" : "block")};

  & > path {
    stroke: #cccccc;
  }
`;

const Delete = styled.button`
  ${Position};
  display: ${props => (props.theme.show ? "block" : "none")};
  background: transparent ${close("%23cccccc")};
  width: 20px;
  height: 20px;
  outline: none;
  border: 0;
`;
