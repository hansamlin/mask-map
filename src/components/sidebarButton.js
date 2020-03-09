import React from "react";
import styled from "styled-components";

export default ({ setToggle }) => {
  const handleToggle = () => setToggle(prev => !prev);
  return <Button onClick={handleToggle} />;
};

const Button = styled.button`
  position: absolute;
  width: 30px;
  height: 50px;
  right: -30px;
  top: 10vh;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9)
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAQAAAAXDMSnAAAAi0lEQVR4AX3JQcqBURQG4O/+9WNG30D3vOfSDTuQsgcZyBakZANSzMVMBme3zsBI5/VMn4ZKLP5ki1E4tYejWpilxVUtzOEUD68odYmXR5BJNp/4zllXD2phllYvamHmirsayUkfJ5ruHzueTldC08kcT5YOY9xYujqQM03XKXuaLmEtNF1e1Nz89gbL+0do6OEwRwAAAABJRU5ErkJggg==)
    no-repeat;
  background-position: center;
  background-size: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  z-index: -1;
  transform: ${props => props.theme.toggle && "scaleX(-1)"};
  outline: none;
  border: 0;
  border-left: 1px solid #d4d4d4;

  @media (min-width: 768px) {
    display: none;
  }
`;
