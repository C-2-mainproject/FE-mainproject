import { useState } from "react";
import styled from "styled-components";
import { MyVocaItem, WordList } from "../../components";
import AddWordModal from "../../components/MyVoca/AddWordModal";

const voca_item = {
  id: 6,
  title: "테스트 단어장6",
  wrongWords: 2,
  description: "테스트 단어장입니다.",
  category: "텝스",
  likeCount: 11,
  bookmarked: true,
  public: true,
  writer: "일단이",
  createAt: "2022.09.05",
  modifiedAt: "2022.09.05",
  lastTestAt: "2022.09.05",
};

const MyVocaDetail = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const todoEdit = () => {
    setIsEdit(!isEdit);
  };

  const addWord = () => {
    console.log("addword!!!");
    setIsOpenModal(!isOpenModal);
  };

  return (
    <MyVocaDetailLayout>
      <MyVocaDetailWrapper>
        <MyVocaDetailBox>
          <InfoHeader>
            <DivA>
              <p>지금 보고 있는 단어장</p>
              <button onClick={todoEdit}>
                <span>단어장 편집하기</span>
              </button>
            </DivA>
            <DivB>
              <div>
                <MyVocaItem wordStorage={voca_item} />
              </div>
              <div>C</div>
            </DivB>
          </InfoHeader>
          <WordList />
          {isEdit ? (
            <div>
              <AddButton onClick={addWord}>단어 추가하기</AddButton>
              {isOpenModal && <AddWordModal openAddWordModal={addWord} />}
            </div>
          ) : (
            <div></div>
          )}
        </MyVocaDetailBox>
      </MyVocaDetailWrapper>
    </MyVocaDetailLayout>
  );
};

const MyVocaDetailLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const MyVocaDetailWrapper = styled.div`
  width: 1360px;
  margin: auto;
`;

const MyVocaDetailBox = styled.div`
  width: 1280px;
  margin: auto;
`;

const InfoHeader = styled.div``;

const DivA = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  align-items: center;

  p {
    width: 148px;
    height: 26px;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.26px;
    text-align: left;
    color: #000;
  }

  button {
    width: 182px;
    height: 40px;
    background-color: #1f1f1f;
  }

  span {
    width: 99px;
    height: 23px;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.12px;
    text-align: left;
    color: #fff;
  }
`;

const DivB = styled.div`
  display: flex;
`;

const AddButton = styled.button`
  width: 290px;
  height: 300px;
  background-color: #f3f3f3;
`;

export default MyVocaDetail;
