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

  const observerRef = useRef<IntersectionObserver>();
  const boxRef = useRef<HTMLDivElement>(null);
  const [wrongAnswerWordStorage, setWrongAnswerWordStorage] = useState([]);
  const [likeWordStorage, setLikeWordStorage] = useState([]);

  const getWrongAnswerWordStorageList = async () => {
    await apis.getWrongAnswerWordStorages().then(data => {
      setWrongAnswerWordStorage(data.data);
    });
  };

  const getLike = async () => {
    await apis.getLikeWordStorage().then(data => {
      setLikeWordStorage(data.data.content);
    });
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver);
    boxRef.current && observerRef.current.observe(boxRef.current);
  }, [pageNum]);

  useEffect(() => {
    dispatch(__getWordStorageList(pageNum));
  }, [targetId]);

  const intersectionObserver = (
    entries: IntersectionObserverEntry[],
    io: IntersectionObserver,
  ) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        dispatch(__getWordStorageList(pageNum));
      }
    });
  };

  useEffect(() => {
    getWrongAnswerWordStorageList();
  }, [targetId === "오답노트"]);

  useEffect(() => {
    getLike();
  }, [targetId === "좋아요"]);

  if (isFinish) {
    if (targetId === "전체보기") {
      console.log("전체보기!!!");
      const wordStorages = wordStorage.map((wordStorage, index) => {
        return <MyVocaItem key={index} wordStorage={wordStorage} />;
      });

      return (
        <>
          <MyVocaListLayout>{wordStorages}</MyVocaListLayout>
          <div ref={boxRef}></div>
        </>
      );
    }

    if (targetId === "나의 단어장") {
      console.log("나의 단어장");
    }

    if (targetId === "좋아요") {
      const wordStorages = likeWordStorage.map((wordStorage, index) => {
        return <MyVocaItem key={index} wordStorage={wordStorage} />;
      });

      return (
        <>
          <MyVocaListLayout>{wordStorages}</MyVocaListLayout>
          <div ref={boxRef}></div>
        </>
      );
    }

    if (targetId === "인기순") {
      const wordStorages = wordStorage
        .slice()
        .sort((a: IWordStorage, b: IWordStorage): number => {
          return b.likeCount - a.likeCount;
        });
      return (
        <>
          <MyVocaListLayout>
            {wordStorages.map((wordStorage, index) => {
              return <MyVocaItem key={index} wordStorage={wordStorage} />;
            })}
          </MyVocaListLayout>
          <div ref={boxRef}></div>
        </>
      );
    }

    if (targetId === "공개") {
      console.log("공개");
      const wordStorages = wordStorage.filter(wordStorage => {
        return wordStorage.public === true;
      });

      return (
        <MyVocaListLayout>
          {wordStorages.map((wordStorage, index) => {
            return <MyVocaItem key={index} wordStorage={wordStorage} />;
          })}
        </MyVocaListLayout>
      );
    }

    if (targetId === "비공개") {
      console.log("비공개");
      const wordStorages = wordStorage.filter(wordStorage => {
        return wordStorage.public === false;
      });

      return (
        <MyVocaListLayout>
          {wordStorages.map((wordStorage, index) => {
            return <MyVocaItem key={index} wordStorage={wordStorage} />;
          })}
        </MyVocaListLayout>
      );
    }

    if (targetId === "오답노트") {
      const wrongWordStorages = wrongAnswerWordStorage.map(
        (wrongWordStorage, index) => {
          return <MyVocaItem key={index} wordStorage={wrongWordStorage} />;
        },
      );
      return <MyVocaListLayout>{wrongWordStorages}</MyVocaListLayout>;
    }

    const wordStorages = wordStorage.filter(wordStorage => {
      return wordStorage.category === targetId;
    });

    return (
      <MyVocaListLayout>
        {wordStorages.map((wordStorage, index) => {
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export default MyVocaList;
