import React from "react";
import styled from "styled-components";
import L from "leaflet";

import Quantity from "./quantity";
import { popup as content } from "./popup";

export default props => {
  const { name, address, mask_adult, mask_child, note } = props.properties;

  const [lat, lng] = props.coordinates;

  const focus = () => {
    const map = window.map;

    const popup = L.popup()
      .setLatLng([parseFloat(lat) + 0.00015, lng])
      .setContent(content(props.properties))
      .openOn(map);

    map.setView(new L.LatLng(lat, lng), 18).openPopup(popup);
  };

  return (
    <Container onClick={focus}>
      <Name>{name}</Name>
      <Address>{address}</Address>
      <BusinessHours>營業時間 | {note}</BusinessHours>
      <Quantity adultCount={mask_adult} childCount={mask_child} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 12px 20px;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #eaeaea;
  cursor: pointer;
`;

const Name = styled.section`
  height: 21px;
  font-size: 16px;
  color: #333333;
`;

const Address = styled.section`
  margin: 4px auto 0;
  font-size: 14px;
  color: #666666;
`;

const BusinessHours = styled.section`
  margin: 4px auto 0;
  font-size: 12px;
  color: #666666;
`;
