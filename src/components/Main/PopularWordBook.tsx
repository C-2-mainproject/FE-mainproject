import React from "react";
import styled from "styled-components";

const PopularWordBook = () => {
  return (
    <>
      <WordBookBox>
        <span>
          <p>토익</p>
          <h3>보카바이블 3.0</h3>
          <h4>시험에 꼭 나오는 영단어 모음집</h4>
          <button>내 단어장에 담기</button>
        </span>
      </WordBookBox>
    </>
  );
};

export default PopularWordBook;

const WordBookBox = styled.div`
  width: 785px;
  height: 400px;
  background-color: #eff9fc;
  padding: 0 100px;
  span {
    display: flex;
    flex-direction: column;
    p {
      width: 30px;
      position: relative;
      color: #0083b0;
      margin-bottom: 15px;
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #0083b0;
        position: absolute;
        bottom: -3px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
`;
