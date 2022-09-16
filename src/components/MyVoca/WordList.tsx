import styled from "styled-components";
import { WordItem } from "../index";

const word_list = [1, 2, 3, 4, 5];
const WordList = () => {
  const words = word_list.map((v, i) => {
    return <WordItem key={i} />;
  });

  return <WordListLayout>{words}</WordListLayout>;
};

const WordListLayout = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export default WordList;
