import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { cancel } from "../../images";
import { apis } from "../../shared/api";
import { useAppSelector } from "../../shared/reduxHooks";
import { IAnswer } from "../../types/types";
import WordTestResultItem from "./WordTestResultItem";

const WordTestResultList = () => {
  let countnumber = 0;
  const navigate = useNavigate();

  const [sort, setSort] = useState<IAnswer[]>();

  const { testWordStorage, answerStorage, wrongStorage } = useAppSelector(
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
        return true;
      } else {
        // 오답
        return false;
      }
    });
    return result[0];
  };

  const endTest = async () => {
    if (wrongStorage.words.length !== 0) {
      await apis.endWordTest({
        wordStorageId: testWordStorage[0].wordStorageId,
        testType: "스펠링",
        totalWords: answerStorage[0].words.length,
        wrongWords: wrongStorage.words.length,
        time: 30,
        collectionWrongWord: {
          word: wrongStorage.words,
          meaning: wrongStorage.meanings,
        },
      });
    }
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

  const moveToVoca = () => {
    navigate("/myvoca");
  };
  return (
    <WordTestResultListLayout>
      <WordTestResultInfo>
        <h1>
          단어 시험 결과 📝
          <img src={cancel} onClick={moveToVoca} />
        </h1>

        <div>
          <p>
            😀 정답 <span>{countnumber}</span>
          </p>
          <p>
            😅 오답 <span>{answerStorage.length - countnumber}</span>
          </p>
        </div>
      </WordTestResultInfo>
      <WordTestResultListItem>{result}</WordTestResultListItem>
    </WordTestResultListLayout>
  );
};

const WordTestResultListLayout = styled.div``;

const WordTestResultInfo = styled.div`
  height: 200px;

  div {
    display: flex;
    margin-top: 68px;
    margin-bottom: 80px;
  }

  h1 {
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 70px;

    letter-spacing: -0.07em;

    color: #000000;

    img {
      width: 20px;
      height: 20px;
    }
  }

  p {
    margin-right: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    /* identical to box height */

    letter-spacing: -0.07em;

    color: #000000;
  }

  span {
    margin-left: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    /* identical to box height */

    letter-spacing: -0.07em;

    color: #000000;
  }
`;

const WordTestResultListItem = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export default WordTestResultList;
