import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { apis } from "../../shared/api";
import { useAppSelector } from "../../shared/reduxHooks";
import { IAnswer } from "../../types/types";
import WordTestResultItem from "./WordTestResultItem";

const WordTestResultList = () => {
  let countnumber = 0;

  const [sort, setSort] = useState<IAnswer[]>();
  const { testWordStorage, answerStorage } = useAppSelector(
    state => state.answerSlice,
  );

  const sortedArray = () => {
    const sortArray = answerStorage
      .slice()
      .sort((a: IAnswer, b: IAnswer): number => {
        return a.index - b.index;
      });

    setSort(sortArray);
  };

  const checkAnswer = (Value: IAnswer): boolean => {
    const result = Value.meanings.map(v =>
      testWordStorage[0].meanings[Value.index].includes(v),
    );

    return result[0];
  };

  // const endTest = async () => {
  //   await apis.endWordTest({
  //     wordStorageId: answerStorage[0].index,
  //     testType: "스펠링",
  //     totalWords: 1,
  //     wrongWords: 1,
  //     time: 1,
  //     collectionWrongWord: {
  //       word: [],
  //       meaning: [],
  //     },
  //   });
  // };

  useEffect(() => {
    sortedArray();
  }, []);

  const result = sort?.map((value, index) => {
    const isCheck = checkAnswer(value);

    if (isCheck) {
      countnumber++;
    }

    return (
      <WordTestResultItem
        key={index}
        submitAnswer={value}
        orginAnswer={testWordStorage[0].meanings[index]}
        totalLength={sort.length}
        success={isCheck}
      />
    );
  });

  return (
    <WordTestResultListLayout>
      <WordTestResultInfo>
        <p>
          정답 : <span>{countnumber}</span>
        </p>
        <p>
          오답 : <span>{answerStorage.length - countnumber}</span>
        </p>
      </WordTestResultInfo>
      <WordTestResultListItem>{result}</WordTestResultListItem>
    </WordTestResultListLayout>
  );
};

const WordTestResultListLayout = styled.div``;

const WordTestResultInfo = styled.div`
  height: 200px;
  border: 2px solid green;
`;
const WordTestResultListItem = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export default WordTestResultList;
