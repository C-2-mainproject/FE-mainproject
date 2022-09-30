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
    const result = Value.meanings.map(value => {
      if (testWordStorage[0].meanings[Value.index].includes(value)) {
        // 정답
        // console.log("correct", value);
        // console.log(testWordStorage[0].meanings[Value.index]);
        // console.log(testWordStorage[0].words[Value.index]);
        return true;
      } else {
        // 오답
        console.log("wrong", value);
        console.log(testWordStorage[0].meanings[Value.index]);
        console.log(testWordStorage[0].words[Value.index]);
        // setCollectionWrongWord({
        //   words: [testWordStorage[0].words[Value.index]],
        //   meanings: [testWordStorage[0].meanings[Value.index]],
        // });
        return false;
      }
    });
    return result[0];
  };
  //  https://tinyurl.com/2p9d3prs
  const endTest = async () => {
    //collectionWrongWord :: 틀린것에 대한 정답을 넘기기
    console.log(testWordStorage, answerStorage);
    console.log(answerStorage[0].index);
    console.log("wordStorageId::", testWordStorage[0].wordStorageId);
    console.log("totalWords::", testWordStorage[0].words.length);
    console.log("wrongWords::", testWordStorage[0].words.length - countnumber);
    await apis.endWordTest({
      wordStorageId: testWordStorage[0].wordStorageId,
      testType: "스펠링",
      totalWords: answerStorage[0].words.length,
      wrongWords: 1,
      time: 30,
      collectionWrongWord: {
        word: ["a", "b"],
        meaning: [["a"], ["b"]],
      },
    });
  };

  useEffect(() => {
    sortedArray();
    endTest();
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
