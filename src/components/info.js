import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const weekDay = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];

const getNow = () => {
  const now = new Date(Date.now());
  const year = now.getFullYear();
  const month = add(now.getMonth() + 1);
  const day = add(now.getDate());
  const weekday = now.getDay();

  return {
    date: `${year} - ${month} - ${day}`,
    weekday: getWeekDay(weekday),
    singleOrDouble: weekday
  };
};

const add = num => {
  return num > 10 ? num : `0${num}`;
};

const getWeekDay = day => {
  return weekDay[day];
};

const getOddEven = num => {
  if (num === 0) {
    return "奇數偶數";
  } else {
    if (num % 2 === 0) {
      return "偶數";
    } else {
      return "奇數";
    }
  }
};

export default () => {
  const { file } = useStaticQuery(graphql`
    {
      file(base: { eq: "img_bg_orange.svg" }) {
        name
        publicURL
      }
    }
  `);

  const [now, setNow] = useState(getNow());
  const tick = () => setNow(getNow());

  useEffect(() => {
    const timerId = setInterval(() => {
      tick();
    }, 1000 * 60);

    return clearInterval(timerId);
  });

  return (
    <Container theme={{ publicURL: file.publicURL }}>
      <Today>{now.date}</Today>
      <Week>{now.weekday}</Week>
      <SingleOrDouble>
        身分證末一碼
        <Importent>{getOddEven(now.singleOrDouble)}</Importent>
        字號者可購買口罩
      </SingleOrDouble>
      <Ps>※一週限購一次，每次一人限購兩片</Ps>
    </Container>
  );
};

const Container = styled.div`
  background: transparent url(${props => props.theme.publicURL}) 0% 0% no-repeat
    padding-box;
  width: 100%;
  padding: 8px 20px;
  font-size: 14px;
  color: #ffffff;
`;

const Today = styled.div`
  height: 19px;
  text-align: left;
  letter-spacing: 0;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  position: relative;
`;

const Week = styled.div`
  height: 48px;
  font-weight: bold;
  font-size: 36px;
  letter-spacing: 0;
  color: #ffffff;
  text-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  position: relative;
`;

const SingleOrDouble = styled.div`
  color: #000;
  margin: 8px auto 0;
`;

const Importent = styled.span`
  color: #c80000;
  margin: 0 3px;
`;

const Ps = styled.div`
  margin: 4px auto 0;
  font-size: 12px;
`;
