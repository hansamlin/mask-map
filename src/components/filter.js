import React, { useContext } from "react";
import styled from "styled-components";

import Button from "./button";
import { FilterProvider } from "../store/filterProvider";

export default () => {
  const { filter } = useContext(FilterProvider);

  return (
    <Container>
      <Button filter={filter.all} id="all">
        所有口罩
      </Button>
      <Button filter={filter.adult} id="adult">
        成人口罩
      </Button>
      <Button filter={filter.child} id="child">
        兒童口罩
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px auto;
`;
