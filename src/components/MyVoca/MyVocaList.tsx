import styled from "styled-components";
import { MyVocaItem } from "../../components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";
import { IWordStorage } from "../../types/types";

type TargetIdProps = {
  targetId: string;
};

const MyVocaList = ({ targetId }: TargetIdProps) => {
  const dispatch = useAppDispatch();
  const { wordStorage, isFinish } = useAppSelector(
    state => state.wordStorageSlice,
  );

  useEffect(() => {
    dispatch(__getWordStorageList());
  }, []);

  if (isFinish) {
    if (targetId === "전체보기") {
      const wordStorages = wordStorage.map((wordStorage, index) => {
        return <MyVocaItem key={index} wordStorage={wordStorage} />;
      });

      return <MyVocaListLayout>{wordStorages}</MyVocaListLayout>;
    } else if (targetId === "나의 단어장") {
      console.log("나의 단어장!!!");
    } else if (targetId === "좋아요") {
      // api 통신 : 좋아요 한 단어장 목록 불러오기 -> GET | /api/user/wordstorage/like
    } else if (targetId === "인기순") {
      const wordStorages = wordStorage
        .slice()
        .sort((a: IWordStorage, b: IWordStorage): number => {
          return b.likeCount - a.likeCount;
        });
      return (
        <MyVocaListLayout>
          {wordStorages.map((wordStorage, index) => {
            return <MyVocaItem key={index} wordStorage={wordStorage} />;
          })}
        </MyVocaListLayout>
      );
    } else if (targetId === "오답노트") {
      const wrongWordStorages = wordStorage.map((wrongWordStorage, index) => {
        return <MyVocaItem key={index} wordStorage={wrongWordStorage} />;
      });
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
