import styled from "styled-components";
import { ValueProps } from "../../types/MyVocaTypes";

const WordItem = ({ wordValue, meaningValue }: ValueProps) => {
  return (
    <WordItemLayout>
      <p>{wordValue}</p>
      <p>{meaningValue.join(", ")}</p>
    </WordItemLayout>
  );
};

const WordItemLayout = styled.div`
  position: relative;
  width: 18rem;
  height: 18.75rem;
  background-color: #eeeeee;
  margin-right: 2.5rem;
  margin-bottom: 2.5rem;

  &:nth-child(4n) {
    margin-right: 0px;
  }

  p:nth-child(1) {
    margin-top: 6.5rem;
    font-family: NotoSansKR;
    font-size: 1.87rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  }

  p:nth-child(2) {
    margin-top: 1.25rem;
    font-family: NotoSansKR;
    font-size: 1.12rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: center;
    color: #666;
  }
`;
export default WordItem;
