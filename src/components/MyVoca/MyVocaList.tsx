import styled from "styled-components";
import { WordStorage } from "../../types/types";
import { MyVocaItem } from "../../components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";

type TargetIdProps = {
  targetId: string;
};

const MyVocaList = ({ targetId }: TargetIdProps) => {
  // api 통신 : 내 단어장 목록 불러오기 -> GET | /api/user/wordstorage/my
  const dispatch = useAppDispatch();
  const wordStorageResult = useAppSelector(
    state => state.wordStorageSlice.wordStorage,
  );

  useEffect(() => {
    dispatch(__getWordStorageList());
  }, []);

  if (targetId === "전체보기") {
    const wordStorages = wordStorageResult.map((wordStorage, index) => {
      return <MyVocaItem key={index} wordStorage={wordStorage} />;
    });

    return <MyVocaListLayout>{wordStorages}</MyVocaListLayout>;
  } else if (targetId === "나의 단어장") {
    console.log("2");
  } else if (targetId === "좋아요") {
    // api 통신 : 좋아요 한 단어장 목록 불러오기 -> GET | /api/user/wordstorage/like
  } else if (targetId === "인기순") {
    const wordStorages = wordStorageResult.sort(
      (a: WordStorage, b: WordStorage): number => {
        return b.likeCount - a.likeCount;
      },
    );
    return (
      <MyVocaListLayout>
        {wordStorages.map((wordStorage, index) => {
          return <MyVocaItem key={index} wordStorage={wordStorage} />;
        })}
      </MyVocaListLayout>
    );
  } else if (targetId === "오답노트") {
    // api 통신 : 오답노트 리스트 받아오기 -> GET | /api/user/wordstorage/test/history
    const wrongWordStorages = wordStorageResult.map(
      (wrongWordStorage, index) => {
        return <MyVocaItem key={index} wordStorage={wrongWordStorage} />;
      },
    );
    return <MyVocaListLayout>{wrongWordStorages}</MyVocaListLayout>;
  }

  // const wordStorages = wordStorageResult.filter(wordStorage => {
  //   return wordStorage.category === targetId;
  // });

  return (
    <MyVocaListLayout>
      {wordStorageResult.map((wordStorage, index) => {
        return <MyVocaItem key={index} wordStorage={wordStorage} />;
      })}
    </MyVocaListLayout>
  );
};
const MyVocaListLayout = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export default MyVocaList;
