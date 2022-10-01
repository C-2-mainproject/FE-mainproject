import styled from "styled-components";
import { SharedVocaItem } from "../index";

type TargetIdProps = {
  targetId: string;
};

const wordStorage_list = [
  {
    category: "category",
    createAt: "createAt",
    description: "description",
    id: 1,
    lastTestAt: "lastTestAt",
    likeCount: 1,
    nickname: "일단이",
    modifiedAt: "modifiedAt",
    public: true,
    title: "title",
  },
  {
    category: "category",
    createAt: "createAt",
    description: "description",
    id: 2,
    lastTestAt: "lastTestAt",
    likeCount: 1,
    nickname: "일단이",
    modifiedAt: "modifiedAt",
    public: true,
    title: "title",
  },
  {
    category: "category",
    createAt: "createAt",
    description: "description",
    id: 2,
    lastTestAt: "lastTestAt",
    likeCount: 1,
    nickname: "일단이",
    modifiedAt: "modifiedAt",
    public: true,
    title: "title",
  },
];

const SharedVocaList = ({ targetId }: TargetIdProps) => {
  if (targetId === "전체보기") {
    console.log("전체보기");
  } else if (targetId === "공유 단어장") {
    console.log("공유 단어장!!!");
  } else if (targetId === "공인 단어장") {
    console.log("공인 단어장!!!");
  } else if (targetId === "인기순") {
    console.log("인기순");
  }

  const wordStorages = wordStorage_list.map((wordStorage, index) => {
    return <SharedVocaItem key={index} wordStorage={wordStorage} />;
  });

  return <MyVocaListLayout>{wordStorages}</MyVocaListLayout>;
};

const MyVocaListLayout = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;
export default SharedVocaList;
