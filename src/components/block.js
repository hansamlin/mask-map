import React from "react";
import styled from "styled-components";
import L from "leaflet";

import Quantity from "./quantity";

export const getBuinessHours = (day, business_hours) => {
  let key, morning, afternoon, night;
  if (business_hours.length !== 21) {
    return "未公布";
  }

  if (day === 0) {
    key = day + 6;
  } else {
    key = day - 1;
  }
  morning = key;
  afternoon = key + 7;
  night = key + 14;

  return [
    business_hours[morning].slice(-4),
    business_hours[afternoon].slice(-4),
    business_hours[night].slice(-4)
  ].join(", ");
};

export default props => {
  const {
    name,
    address,
    adult_count,
    child_count,
    business_hours,
    location
  } = props.item;

  const now = new Date();
  const day = now.getDay();

  const business = getBuinessHours(day, business_hours);

  const focus = () => {
    const { lat, lon } = location;
    window.map.flyTo(new L.LatLng(lat, lon), 18);
  };

  return (
    <Container onClick={focus}>
      <Name>{name}</Name>
      <Address>{address}</Address>
      <BusinessHours>營業時間 | {business}</BusinessHours>
      <Quantity adultCount={adult_count} childCount={child_count} />
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
