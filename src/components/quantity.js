import React from "react";
import styled from "styled-components";

export default props => {
  const { adultCount, childCount } = props;

  return (
    <Container>
      <Adult>成人口罩 {adultCount}個</Adult>
      <Child>兒童口罩 {childCount}個</Child>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 35px;
  margin: 8px auto 0;
  display: flex;
  justify-content: space-between;
`;

const Adult = styled.section`
  border-radius: 10px;
  background: rgba(255, 151, 59, 0.2);
  width: 130px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  color: rgba(255, 151, 59, 1);
  font-size: 14px;
`;

const Child = styled(Adult)`
  background: rgba(255, 219, 77, 0.2);
  color: rgba(248, 190, 0, 1);
`;
