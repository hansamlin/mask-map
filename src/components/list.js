import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MaskProvider } from "../store/maskProvider";
import { TextProvider } from "../store/textProvider";

import Block from "./block";

export default () => {
  const { store } = useContext(MaskProvider);
  const { text } = useContext(TextProvider);
  const [num, setNum] = useState(9);
  let list = [];

  const handleLoad = () => {
    if (store.length > 10) setNum(prev => prev + 10);
  };

  const exist = item => {
    const { name, address } = item.properties;

    return name.indexOf(text) === -1 && address.indexOf(text) === -1;
  };

  store.forEach(item => {
    if (exist(item)) {
      return;
    }

    const [lng, lat] = item.geometry.coordinates;

    list.push(
      <Block
        properties={item.properties}
        coordinates={[lat, lng]}
        key={item.properties.id}
      />
    );
  });

  const loadMoreButton =
    num + 1 < list.length ? (
      <Button onClick={handleLoad}>載入更多</Button>
    ) : null;

  return (
    <Container>
      {list.slice(0, num)}
      {loadMoreButton}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 136px - 124px);
  background: #ffffff 0% 0% no-repeat padding-box;
  overflow: auto;

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #cccccc;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #fff;
  }
`;

const Button = styled.div`
  width: 100px;
  height: 50px;
  margin: auto;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
`;
