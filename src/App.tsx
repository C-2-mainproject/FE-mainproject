import React from "react";
import styled from "styled-components";
import "./App.css";
import { support } from "./images";
import Router from "./router/router";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <FloatingBtn>
        <img src={support} alt="support" />
        <p>고객 지원</p>
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

  background: #ffffff;
  border: 1px solid #00b4db;
  text-align: center;

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
`;
export default App;
