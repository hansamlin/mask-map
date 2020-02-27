import React, { useMemo, useContext, useRef } from "react";
import styled from "styled-components";

import { FilterProvider } from "../store/filterProvider";

export default ({ children, filter, id }) => {
  const { setFilter } = useContext(FilterProvider);
  const radioRef = useRef();

  const handleFilter = () => {
    const target = radioRef.current.getAttribute("id");
    const check = radioRef.current.checked;

    if (check === false) {
      radioRef.current.checked = true;
      const tmp = { all: false, adult: false, child: false };
      tmp[target] = true;
      setFilter(tmp);
    }
  };

  return useMemo(
    () => (
      <label>
        <Radio
          type="radio"
          name="filter"
          id={id}
          defaultChecked={filter}
          ref={radioRef}
        />
        <Button onClick={handleFilter}>{children}</Button>
      </label>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter]
  );
};

const Radio = styled.input`
  display: none;

  &:checked + button {
    background-color: #d65600;
    color: #fff;
  }
`;

const Button = styled.button`
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
`;
