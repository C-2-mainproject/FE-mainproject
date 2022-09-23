import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { cancel, mainsub_myVoca } from "../../images";
import { apis } from "../../shared/api";
import { useAppSelector } from "../../shared/reduxHooks";
import { ITestWordStorage } from "../../types/types";
import { WordTestItem } from "../index";

const WordTestList = () => {
  const { id } = useParams();
  const [testList, setTestList] = useState<ITestWordStorage>();

  const { answerStorage } = useAppSelector(state => state.answerSlice);

  const makeWordTest = async () => {
    const newId = Number(id);

    try {
      await apis.makeWordTest(newId).then(data => {
        setTestList(data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    makeWordTest();
  }, []);

  const testListResult = testList?.words.map((word, index) => {
    return (
      <WordTestItem
        key={index}
        id={index}
        length={testList.words.length}
        word={word}
        meaing={testList.meanings[index]}
      />
    );
  });

  const submit = () => {
    console.log(answerStorage);
  };

  return (
    <WordTestListLayout>
      <WordTestListHeader>
        <p>{testList?.wordStorageId}번 단어장 시험</p>
        <img src={cancel} alt="cancel" />
      </WordTestListHeader>
      <WordTestListItem>{testListResult}</WordTestListItem>
      <WordTestSubmit>
        <img src={mainsub_myVoca} alt="mainsub_myVoca" />
        <p>모두 완료되었습니다! 단어 시험을 제출할 준비가 되셨나요?</p>
        <button>
          <span onClick={submit}>제출하기</span>
        </button>
      </WordTestSubmit>
    </WordTestListLayout>
  );
};

const WordTestListLayout = styled.div``;

const WordTestListHeader = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  background: #e4f5fa;
  padding: 30px;

  img {
    width: 15px;
    height: 15px;
  }
`;

const WordTestListItem = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const WordTestSubmit = styled.div`
  text-align: center;

  img {
    width: 100px;
  }

  p {
    margin-top: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;

    letter-spacing: -0.07em;

    color: #000000;
  }

  button {
    width: 400px;
    height: 60px;
    margin-top: 80px;
    background: #000000;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 35px;

      letter-spacing: -0.07em;

      color: #ffffff;
    }
  }
`;
export default WordTestList;
