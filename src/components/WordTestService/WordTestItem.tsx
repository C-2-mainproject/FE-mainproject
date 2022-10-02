import { useState, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import { answerStorage, wrongStorage } from "../../redux/modules/answerSlice";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { IAnswer } from "../../types/types";

type Props = {
  id: number;
  word: string;
  length: number;
  meaing: string[];
};

const WordTestItem = ({ id, word, length, meaing }: Props) => {
  const dispatch = useAppDispatch();
  const { testWordStorage } = useAppSelector(state => state.answerSlice);

  const [isInputStatus, setIsInputStatus] = useState<boolean>(false);
  const [answer, setAnswer] = useState<IAnswer>();

  // const checkInputStatus = () => {
  //   if (answer) {
  //     setIsInputStatus(true);
  //     dispatch(answerStorage(answer));
  //   }
  // };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAnswer({
      index: id,
      words: word,
      meanings: event.target.value.split(","),
    });
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (answer && event.key === "Enter") {
      const res = testWordStorage[0].meanings[id].map(val => {
        if (!answer.meanings.includes(val)) {
          return true;
        } else {
          return false;
        }
      });

      if (res.includes(true)) {
        dispatch(
          wrongStorage({
            word: testWordStorage[0].words[id],
            mean: testWordStorage[0].meanings[id],
          }),
        );
      }
      dispatch(answerStorage(answer));
      setIsInputStatus(true);
    }
  };

  if (word !== undefined) {
    return (
      <WordTestItemLayout>
        <WordTestItemHeader>
          <p>단어</p>
          <span>
            {id + 1} / {length}
          </span>
        </WordTestItemHeader>
        <WordTestItemQuiz>
          {word}
          <p>
            HINT : 해당 단어에 <span>{meaing.length}</span> 개 뜻 입력 필요
          </p>
        </WordTestItemQuiz>

        <WordTestItemInput className={isInputStatus ? "ok" : "not_yet"}>
          <input
            placeholder="정답을 입력하세요"
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
          <button>확인</button>
        </WordTestItemInput>
      </WordTestItemLayout>
    );
  } else {
    return <div>로딩중</div>;
  }
};

const WordTestItemLayout = styled.div`
  width: 619px;
  height: 400px;

  background: #ffffff;
  border: 1px solid #000000;
  margin-bottom: 48px;

  &:nth-child(2n + 1) {
    margin-right: 42px;
  }
  &:nth-child(2n) {
    margin-right: 0px;
  }
`;

const WordTestItemHeader = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const WordTestItemQuiz = styled.div`
  height: 286px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #000000;

  p {
    margin-top: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 23px;
    color: #7d7d7d;

    span {
      font-weight: 600;
    }
  }
`;

const WordTestItemInput = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${props =>
    props.className === "ok" ? "#E4F5FA" : "#e1e1e1"};
  border-bottom: 1px solid;

  input {
    width: 500px;
    border: none;
    outline: none;
    background-color: ${props =>
      props.className === "ok" ? "#E4F5FA" : "#e1e1e1"};
  }
`;

export default WordTestItem;
