import React from "react";
import styled from "styled-components";

const PopularWordBook = () => {
  return (
    <>
      <WordBookBox>
        <span>
          <p>토익</p>
          <p>내신단어</p>
        </span>
        <button>내 단어장에 담기</button>
      </WordBookBox>
    </>
  );
};

export default PopularWordBook;

const WordBookBox = styled.div`
  width: 785px;
  height: 400px;
  background-color: #949494;
`;
