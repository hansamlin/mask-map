import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MaskProvider } from "../../store/realtime/maskProvider";
import { TextProvider } from "../../store/textProvider";
import { FilterProvider } from "../../store/filterProvider";

import Block from "../block";

export default () => {
  const { store } = useContext(MaskProvider);
  const { text } = useContext(TextProvider);
  const { filter } = useContext(FilterProvider);
  const [num, setNum] = useState(9);
  let list = [];
  let data = store;

  const handleLoad = () => {
    if (data.length > 10) setNum(prev => prev + 10);
  };

  if (!filter.all && store.length > 0) {
    if (filter.adult) {
      data = store.filter(item => item.properties.mask_adult > 0);
    } else {
      data = store.filter(item => item.properties.mask_child > 0);
    }
  }

  data.forEach(item => {
    if (item.properties.name.indexOf(text) === -1) {
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
