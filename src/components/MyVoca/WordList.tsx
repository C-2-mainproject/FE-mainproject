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
