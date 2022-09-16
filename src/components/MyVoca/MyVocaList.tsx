import styled from "styled-components";
import { wordStorageList, wrongWordStorageList } from "../../mockData";
import { WordStorage } from "../../types/types";
import { MyVocaItem } from "../../components";

type TargetIdProps = {
  targetId: string;
};

const MyVocaList = ({ targetId }: TargetIdProps) => {
  // api 통신 : 내 단어장 목록 불러오기 -> GET | /api/user/wordstorage/my

  // const [wordStorageLists, setWordStorageLists] = useState();

  // const getWordStorageList = async () => {
  //   try {
  //     const data = await axios.get(
  //       "https://jdh3340.shop/api/user/wordstorage/my",
  //     );
  //     // setWordStorageLists(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getWordStorageList();
  // }, []);

  if (targetId === "전체보기") {
    const wordStorages = wordStorageList.map((wordStorage, index) => {
      return <MyVocaItem key={index} wordStorage={wordStorage} />;
    });

    return <MyVocaListLayout>{wordStorages}</MyVocaListLayout>;
  } else if (targetId === "나의 단어장") {
    console.log("2");
  } else if (targetId === "좋아요") {
    // api 통신 : 좋아요 한 단어장 목록 불러오기 -> GET | /api/user/wordstorage/like
    console.log("3");
  } else if (targetId === "인기순") {
    const wordStorages = wordStorageList.sort(
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
    console.log("오답노트");
    const wrongWordStorages = wrongWordStorageList.map(
      (wrongWordStorage, index) => {
        return <MyVocaItem key={index} wordStorage={wrongWordStorage} />;
      },
    );
    console.log("오답노트", wrongWordStorages);
    return <MyVocaListLayout>{wrongWordStorages}</MyVocaListLayout>;
  }

  const wordStorages = wordStorageList.filter(wordStorage => {
    return wordStorage.category === targetId;
  });

  return (
    <MyVocaListLayout>
      {wordStorages.map((wordStorage, index) => {
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
