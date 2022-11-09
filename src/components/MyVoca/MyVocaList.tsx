import { useEffect, useState } from "react";
import styled from "styled-components";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { MyVocaItem } from "../MyVoca/index";
import { apis } from "../../shared/api";
import { TargetIdProps } from "../../types/MyVocaTypes";

const MyVocaList = ({ targetId }: TargetIdProps) => {
  const dispatch = useAppDispatch();
  const { wordStorage, isFinish } = useAppSelector(
    state => state.wordStorageSlice,
  );

  const [likeWordStorage, setLikeWordStorage] = useState([]);

  const getWordStorage = () => {
    dispatch(__getWordStorageList());
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
    getLike();
  }, [targetId === "좋아요"]);

  if (isFinish) {
    if (wordStorage.length === 0) {
      return (
        <Empty>
          <div>
            <h1>영어 단어장을 추가해주세요! 👀</h1>
            <h2>
              우측상단 ‘새 단어장 추가’를 클릭하여 간편하게 영어 단어장을
              추가해보세요!
            </h2>
          </div>
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
      return (
        <MyVocaListLayout>
          {wordStorage
            .filter(wordStorage => {
              return !wordStorage.title.includes("오답노트");
            })
            .map((wordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wordStorage} />;
            })}
        </MyVocaListLayout>
      );
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
            .sort((a, b): number => {
              return b.likeCount - a.likeCount;
            })
            .map((wordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wordStorage} />;
            })}
        </MyVocaListLayout>
      );
    }

    if (targetId === "공개") {
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
          {wordStorage
            .filter(wordStorage => {
              return wordStorage.title.includes("오답노트");
            })
            .map((wordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wordStorage} />;
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
  margin-top: 1.87rem;
  margin-bottom: 12.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Empty = styled.div`
  width: 80rem;
  height: 18.75rem;
  display: flex;
  background: #e4f5fa;
  margin-top: 4.6rem;
  margin-bottom: 12.5rem;

  text-align: center;

  div {
    margin: auto;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.87rem;
    line-height: 2.6rem;
    letter-spacing: -0.07em;
    color: #00b4db;
  }

  h2 {
    margin-left: 2.1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.12rem;
    line-height: 1.62rem;

    color: #666666;
  }
`;
export default MyVocaList;
