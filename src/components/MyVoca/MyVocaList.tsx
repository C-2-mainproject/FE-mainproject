import styled from "styled-components";
import { MyVocaItem } from "../../components";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";
import { IWordStorage } from "../../types/types";
import { apis } from "../../shared/api";

type TargetIdProps = {
  targetId: string;
};

const MyVocaList = ({ targetId }: TargetIdProps) => {
  const dispatch = useAppDispatch();
  const { wordStorage, isFinish, pageNum } = useAppSelector(
    state => state.wordStorageSlice,
  );

  const boxRef = useRef<HTMLDivElement>(null);
  const [wrongAnswerWordStorage, setWrongAnswerWordStorage] = useState([]);
  const [likeWordStorage, setLikeWordStorage] = useState([]);
  const [page, setPage] = useState<number>(pageNum);

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
      setLikeWordStorage(data.data.content);
    });
  };

  const onIntersect = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setPage(page => page + 1);
        observer.observe(entry.target);
      }
    });
  };

  useEffect(() => {
    getWordStorage();
  }, [targetId, page]);

  useEffect(() => {
    getWrongAnswerWordStorageList();
  }, [targetId === "오답노트"]);

  useEffect(() => {
    getLike();
  }, [targetId === "좋아요"]);

  useEffect(() => {
    let observer: IntersectionObserver;

    if (boxRef.current !== null) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(boxRef.current);
    }
    return () => observer && observer.disconnect();
  }, [boxRef]);

  if (isFinish) {
    if (targetId === "전체보기") {
      return (
        <>
          <MyVocaListLayout>
            {wordStorage.map((wordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wordStorage} />;
            })}
          </MyVocaListLayout>
          <div className="box" ref={boxRef}></div>
        </>
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
        <>
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
        </>
      );
    }

    if (targetId === "공개") {
      console.log("공개");

      return (
        <>
          <MyVocaListLayout>
            {wordStorage
              .filter(wordStorage => {
                return wordStorage.public === true;
              })
              .map((wordStorage, index) => {
                return <MyVocaItem key={index} wordStorage={wordStorage} />;
              })}
          </MyVocaListLayout>
        </>
      );
    }

    if (targetId === "비공개") {
      console.log("비공개");
      return (
        <>
          <MyVocaListLayout>
            {wordStorage
              .filter(wordStorage => {
                return wordStorage.public === false;
              })
              .map((wordStorage, index) => {
                return <MyVocaItem key={index} wordStorage={wordStorage} />;
              })}
          </MyVocaListLayout>
        </>
      );
    }

    if (targetId === "오답노트") {
      return (
        <>
          <MyVocaListLayout>
            {wrongAnswerWordStorage.map((wrongWordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wrongWordStorage} />;
            })}
          </MyVocaListLayout>
        </>
      );
    }

    return (
      <>
        <MyVocaListLayout>
          {wordStorage
            .filter(wordStorage => {
              return wordStorage.category === targetId;
            })
            .map((wordStorage, index) => {
              return (
                <>
                  <MyVocaItem key={index} wordStorage={wordStorage} />
                </>
              );
            })}
        </MyVocaListLayout>
      </>
    );
  } else {
    return (
      <>
        <div>로딩중</div>
        <div className="box" ref={boxRef}></div>
      </>
    );
  }
};
const MyVocaListLayout = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export default MyVocaList;
