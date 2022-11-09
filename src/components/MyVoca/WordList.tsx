import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getDetailWord } from "../../redux/modules/wordStorageSlice";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { WordItem } from "../MyVoca/index";

const WordList = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { addWords } = useAppSelector(state => state.wordStorageSlice);

  useEffect(() => {
    dispatch(__getDetailWord(Number(id)));
  }, [id]);

  if (addWords.length !== 0) {
    const words = addWords[0].words.map((wordValue, index) => {
      return (
        <WordItem
          key={index}
          wordValue={wordValue}
          meaningValue={addWords[0].meanings[index]}
        />
      );
    });

    return addWords[0].words.length === 0 ? (
      <Empty>
        <h1>영어 단어를 추가해주세요! 👀</h1>
        <h2>
          우측 상단 '단어 추가하기'를 클릭하여 간편하게 영어 단어를
          추가해보세요!
        </h2>
      </Empty>
    ) : (
      <WordListLayout>{words}</WordListLayout>
    );
  } else {
    return <div>로딩중</div>;
  }
};

const WordListLayout = styled.div`
  margin-top: 5.6rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 12.5rem;
`;

const Empty = styled.div`
  width: 80rem;
  height: 18.75rem;
  background: #e4f5fa;
  margin-top: 4.6rem;
  margin-bottom: 12.5rem;
  padding-top: 6.9rem;
  text-align: center;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.87rem;
    line-height: 2.69rem;

    color: #000000;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.12rem;
    line-height: 1.6rem;

    color: #666666;
  }
`;
export default WordList;
