import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { apis } from "../../shared/api";
import { WordItem } from "../index";

const WordList = () => {
  const { id } = useParams();
  const [updateWordList, setUpdateWordList] = useState({
    words: [],
    meanings: [],
  });

  const getDetailWord = async () => {
    const newId = Number(id);
    try {
      await apis.getDetailWordStorage(newId).then(data => {
        console.log(data.data);
        setUpdateWordList({
          words: data.data.words,
          meanings: data.data.meanings,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailWord();
  }, [id]);

  const words = updateWordList.words.map((wordValue, index) => {
    return (
      <WordItem
        key={index}
        wordValue={wordValue}
        meaningValue={updateWordList.meanings[index]}
      />
    );
  });

  return updateWordList.words.length === 0 ? (
    <Empty>
      <h1>영어 단어를 추가해주세요! 👀</h1>
      <h2>
        우측 상단 '단어 추가하기'를 클릭하여 간편하게 영어 단어를 추가해보세요!
      </h2>
    </Empty>
  ) : (
    <WordListLayout>{words}</WordListLayout>
  );
};

const WordListLayout = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Empty = styled.div`
  width: 1280px;
  height: 300px;
  background: #e4f5fa;
  margin-top: 75px;
  margin-bottom: 200px;
  padding-top: 110px;
  text-align: center;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;

    color: #000000;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    color: #666666;
  }
`;
export default WordList;
