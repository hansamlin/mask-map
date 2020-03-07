import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

const color = "RGB(101, 218, 252)";

const open = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='svg-icon' viewBox='0 0 20 20'%3E%3Cpath fill='${color}' d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z'%3E%3C/path%3E%3C/svg%3E")`;

const close = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='svg-icon' viewBox='0 0 20 20'%3E%3Cpath fill='${color}' d='M9.394,4.925L5.743,6.953H2.575c-0.24,0-0.435,0.195-0.435,0.435v5.06c0,0.24,0.194,0.436,0.435,0.436h3.168l3.651,2.027c0.066,0.037,0.138,0.055,0.211,0.055c0.077,0,0.152-0.02,0.221-0.061c0.132-0.078,0.214-0.221,0.214-0.373V5.305c0-0.154-0.082-0.296-0.214-0.375C9.694,4.853,9.528,4.85,9.394,4.925z M9.171,13.791l-3.104-1.725c-0.064-0.035-0.138-0.055-0.212-0.055H3.01V7.822h2.845c0.074,0,0.147-0.019,0.212-0.055l3.104-1.723V13.791z'%3E%3C/path%3E%3Cpath fill='${color}' d='M15.332,4.923c-0.166,0.174-0.16,0.449,0.014,0.615c0.037,0.036,3.707,3.648-0.057,8.988c-0.137,0.197-0.09,0.467,0.107,0.605c0.074,0.055,0.162,0.08,0.25,0.08c0.135,0,0.27-0.064,0.355-0.186c4.188-5.943-0.014-10.075-0.055-10.116C15.773,4.744,15.496,4.75,15.332,4.923z'%3E%3C/path%3E%3Cpath fill='${color}' d='M12.479,6.811c-0.166,0.174-0.158,0.449,0.014,0.614c0.088,0.084,2.137,2.102-0.055,5.211c-0.139,0.197-0.09,0.469,0.105,0.607c0.076,0.053,0.164,0.078,0.25,0.078c0.135,0,0.271-0.064,0.355-0.184c2.617-3.716-0.027-6.316-0.055-6.341C12.922,6.631,12.643,6.639,12.479,6.811z'%3E%3C/path%3E%3C/svg%3E")`;

export default () => {
  const [toggle, setToggle] = useState(false);

  const data = useStaticQuery(graphql`
    {
      file(base: { eq: "rule.jpg" }) {
        publicURL
        childImageSharp {
          fixed(width: 1302) {
            src
          }
        }
      }
    }
  `);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  return (
    <ThemeProvider theme={{ toggle }}>
      <Toggle onClick={handleToggle} />
      <Container>
        <Img src={data.file.childImageSharp.fixed.src} alt="3/5起調整實名制" />
        <Origin>※圖取自「衛生福利部」臉書專頁</Origin>
      </Container>
    </ThemeProvider>
  );
};

const Toggle = styled.button`
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 2;
  background: ${props => (props.theme.toggle ? open : close)};
  background-color: ${props => (props.theme.toggle ? "" : "RGB(24, 69, 72)")};
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  border: 0;

  @media (min-width: 360px) {
    width: 32px;
    height: 32px;
  }

  @media (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1;
  display: ${props => (props.theme.toggle ? "block" : "none")};
  border-radius: 10px;
  background: RGB(24, 69, 72);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  text-align: right;
  color: RGB(101, 218, 252);
  overflow: hidden;

  @media (min-width: 360px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 600px;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  border-radius: 10px;
`;

const Origin = styled.span`
  margin: 0 0.5rem;
`;
