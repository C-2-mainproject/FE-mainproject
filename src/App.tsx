import React from "react";
import styled from "styled-components";
import "./App.css";
import { support } from "./images";
import Router from "./router/router";
import { GlobalStyle } from "./styles/GlobalStyle";

// const NAVER_SUPPORT = process.env.REACT_APP_NAVER_SUPPORT;

function App() {
  return (
    <>
      <GlobalStyle />
      <FloatingBtn>
        <a href="https://talk.naver.com/W4Y0TR" target="_blank">
          <img src={support} alt="support" />
          <p>고객 지원</p>
        </a>
      </FloatingBtn>
      <Router />
    </>
  );
}

const FloatingBtn = styled.div`
  position: fixed;
  width: 80px;
  height: 80px;
  left: 90%;
  top: 80%;
  cursor: pointer;

  background: #ffffff;
  border: 1px solid #00b4db;
  text-align: center;
  z-index: 999;

  img {
    width: 55px;
    height: 50px;
  }
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.07em;
    color: #00b4db;
  }
  a {
    text-decoration: none;
    color: #00b4db;
  }

  &:hover {
    border: 2px solid #00b4db;
  }
`;
export default App;
