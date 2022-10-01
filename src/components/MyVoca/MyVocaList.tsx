import styled from "styled-components";
import { MyVocaItem } from "../../components";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";
import { IWordStorage } from "../../types/types";
import { apis } from "../../shared/api";

type TargetIdProps = {
  targetId: string;
};

const MyVocaList = ({ targetId }: TargetIdProps) => {
  const dispatch = useAppDispatch();
  const { wordStorage, isFinish } = useAppSelector(
    state => state.wordStorageSlice,
  );
  console.log(wordStorage);
  const [wrongAnswerWordStorage, setWrongAnswerWordStorage] = useState([]);
  const [likeWordStorage, setLikeWordStorage] = useState([]);

  const getWordStorage = () => {
    dispatch(__getWordStorageList());
  };

  const getWrongAnswerWordStorageList = async () => {
    await apis.getWrongAnswerWordStorages().then(data => {
      setWrongAnswerWordStorage(data.data);
      console.log(data.data);
    });
  };

  const getLike = async () => {
    await apis.getLikeWordStorage().then(data => {
      setLikeWordStorage(data.data);
    });
  };

  useEffect(() => {
    getWordStorage();
  }, [targetId]);

  useEffect(() => {
    getWrongAnswerWordStorageList();
  }, [targetId === "오답노트"]);

  useEffect(() => {
    getLike();
  }, [targetId === "좋아요"]);

  if (isFinish) {
    if (wordStorage.length === 0) {
      return (
        <Empty>
          <div>
            <h1>가이드를 꼭 확인하고 단어장을 만들어주세요! 👉 👉</h1>
            <h2>
              우측상단 ‘단어장 추가하기’를 클릭하여 간편하게 영어 단어장을
              추가해보세요!
            </h2>
          </div>
          <button>
            <span>가이드 바로가기</span>
          </button>
        </Empty>
      );
    }
    if (targetId === "전체보기") {
      return (
        <MyVocaListLayout>
          {wordStorage.map((wordStorage, index) => {
            return <MyVocaItem key={index} wordStorage={wordStorage} />;
          })}
        </MyVocaListLayout>
      );
    }

    if (targetId === "나의 단어장") {
      console.log("나의 단어장");
    }

    if (targetId === "좋아요") {
      return (
        <MyVocaListLayout>
          {likeWordStorage.map((wordStorage, index) => {
            return <MyVocaItem key={index} wordStorage={wordStorage} />;
          })}
        </MyVocaListLayout>
      );
    }

    if (targetId === "인기순") {
      return (
        <MyVocaListLayout>
          {wordStorage
            .slice()
            .sort((a: IWordStorage, b: IWordStorage): number => {
              return b.likeCount - a.likeCount;
            })
            .map((wordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wordStorage} />;
            })}
        </MyVocaListLayout>
      );
    }

    if (targetId === "공개") {
      console.log("공개");

      return (
        <MyVocaListLayout>
          {wordStorage
            .filter(wordStorage => {
              return wordStorage.public === true;
            })
            .map((wordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wordStorage} />;
            })}
        </MyVocaListLayout>
      );
    }

    if (targetId === "비공개") {
      console.log("비공개");
      return (
        <MyVocaListLayout>
          {wordStorage
            .filter(wordStorage => {
              return wordStorage.public === false;
            })
            .map((wordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wordStorage} />;
            })}
        </MyVocaListLayout>
      );
    }

    if (targetId === "오답노트") {
      return (
        <MyVocaListLayout>
          {wrongAnswerWordStorage.map((wrongWordStorage, index) => {
            return <MyVocaItem key={index} wordStorage={wrongWordStorage} />;
          })}
        </MyVocaListLayout>
      );
    }

    return (
      <MyVocaListLayout>
        {wordStorage
          .filter(wordStorage => {
            return wordStorage.category === targetId;
          })
          .map((wordStorage, index) => {
            return <MyVocaItem key={index} wordStorage={wordStorage} />;
          })}
      </MyVocaListLayout>
    );
  } else {
    return <div>로딩중</div>;
  }
};
const MyVocaListLayout = styled.div`
  margin-top: 30px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Empty = styled.div`
  width: 1280px;
  height: 300px;
  display: flex;
  background: #e4f5fa;
  margin-top: 75px;
  margin-bottom: 200px;

  padding-top: 110px;
  text-align: center;

  h1 {
    margin-left: 104px;
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;

    color: #000000;
  }

  h2 {
    margin-left: 35px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    color: #666666;
  }

  button {
    width: 300px;
    height: 83px;
    margin-left: 182px;
    background: #272727;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 35px;

      letter-spacing: -0.07em;

      color: #fff;
    }
  }
`;
export default MyVocaList;
