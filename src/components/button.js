import React, { useMemo } from "react";
import styled from "styled-components";

export default ({ children, check, setCheck, id }) => {
  const handleCheck = e => {
    const target = e.target.previousElementSibling.getAttribute("id");
    const check = e.target.previousElementSibling.checked;
    if (check === false) {
      e.target.previousElementSibling.checked = true;
      const tmp = { all: false, adult: false, child: false };
      tmp[target] = true;
      setCheck(tmp);
    }
  };

  return useMemo(
    () => (
      <>
        <Radio type="radio" name="filter" id={id} defaultChecked={check} />
        <Button onClick={handleCheck}>{children}</Button>
      </>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [check]
  );
};

const Radio = styled.input`
  display: none;

  &:checked + div {
    background-color: #d65600;
    color: #fff;
  }
`;

const Button = styled.div`
  width: 84px;
  height: 36px;
  line-height: 36px;
  background: #fff;
  color: #ccc;
  border: 1px solid #eaeaea;
  border-radius: 7px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;
