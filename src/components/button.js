import React, { useMemo, useContext, useRef } from "react";
import styled from "styled-components";

import { FilterProvider } from "../store/filterProvider";

const item = new Map([
  ["all", { checked: true, text: "所有口罩" }],
  ["adult", { checked: false, text: "成人口罩" }],
  ["child", { checked: false, text: "兒童口罩" }]
]);

export default () => {
  const { setFilter } = useContext(FilterProvider);

  const handleFilter = e => {
    const target = e.target.previousSibling.getAttribute("id");
    const tmp = { all: false, adult: false, child: false };
    tmp[target] = true;
    setFilter(tmp);
  };

  const button = [];
  item.forEach((item, key) => {
    button.push(
      <label key={key}>
        <Radio
          type="radio"
          name="filter"
          id={key}
          defaultChecked={item.checked}
        />
        <Button onClick={handleFilter}>{item.text}</Button>
      </label>
    );
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => button, []);
};

const Radio = styled.input`
  display: none;

  &:checked + span {
    background-color: #d65600;
    color: #fff;
  }
`;

const Button = styled.span`
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
  outline: none;
  display: block;
`;
