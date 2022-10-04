import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { mainsub_myVoca } from "../../images";
import { __makeWordTest } from "../../redux/modules/answerSlice";
import { __getDetailWord } from "../../redux/modules/wordStorageSlice";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { WordTestItem } from "../index";

const WordTestList = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const newId = Number(id);
  console.log(newId);
  const dispatch = useAppDispatch();
  const { testWordStorage } = useAppSelector(state => state.answerSlice);
  const { addWords } = useAppSelector(state => state.wordStorageSlice);
  console.log(addWords);
  useEffect(() => {
    dispatch(__getDetailWord(newId));
    dispatch(__makeWordTest(newId));
  }, []);

  const testListResult = testWordStorage[0]?.words.map((word, index) => {
    return (
      <WordTestItem
        key={index}
        id={index}
        length={testWordStorage[0].words.length}
        word={word}
        meaing={testWordStorage[0].meanings[index]}
      />
    );
  });

  const submit = () => {
    navigate("/wordtest-result");
  };
  const add = () => {
    navigate(`/myvoca-detail/${id}`);
  };
  if (addWords[0].words.length === 0) {
    return (
      <WordTestListLayout>
        <WordTestSubmit>
          <img src={mainsub_myVoca} alt="mainsub_myVoca" />
          <p>단어 추가 후, 시험을 진행해주세요!</p>
          <button>
            <span onClick={add}>추가하러 가기</span>
          </button>
        </WordTestSubmit>
      </WordTestListLayout>
    );
  } else {
    return (
      <WordTestListLayout>
        <WordTestListHeader>
          <p>{testWordStorage[0]?.wordStorageId}번 단어장 시험</p>
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
  }
};

const WordTestListLayout = styled.div`
  margin-bottom: 200px;
`;

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
