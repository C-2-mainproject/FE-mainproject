import React from "react";
import styled from "styled-components";
import { IBestVoca } from "../../types/types";
type Props = {
  BestVoca: IBestVoca;
};
const PopularWordBook = ({ BestVoca }: Props) => {
  const { title, description } = BestVoca;
  console.log(BestVoca);
  return (
    <>
      <WordBookBox>
        <div>
          <p>토익</p>
          <h3> {title}</h3>
          <h4>{description}</h4>
        </div>
        <span>
          <button>
            내 단어장에 담기<p>&gt;</p>
          </button>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin-top: 61px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.07em;
    color: #ffffff;
    background-color: #2b98be;
    padding: 13px 24px;
    display: flex;
    justify-content: space-between;
    border-radius: 26px;
    p {
      margin-left: 25px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    h3 {
      font-weight: 500;
      font-size: 36px;
      line-height: 52px;
      letter-spacing: -0.07em;
    }
    h4 {
      font-weight: 400;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.07em;
    }
    p {
      width: 30px;
      position: relative;
      color: #0083b0;
      margin-bottom: 20px;
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
