import { useState } from "react";
import styled from "styled-components";
import { MyVocaItem, WordList } from "../../components";
import AddWordModal from "../../components/MyVoca/AddWordModal";
import EditVocaModal from "../../components/MyVoca/EditVocaModal";
import { expand } from "../../images";

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
  // api 통신: 특정 단어장 조회 -> GET | /api/user/wordstorage/id/{id}
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isAddOpenModal, setIsAddOpenModal] = useState(false);
  const [isEditOpenModal, setIsEditOpenModal] = useState(false);

  const todoEdit = () => {
    setIsEdit(!isEdit);
    setIsEditOpenModal(!isEditOpenModal);
    console.log("dodjoj", isEdit);
  };

  const addWord = () => {
    console.log("addword!!!");
    setIsAddOpenModal(!isAddOpenModal);
  };

  return (
    <MyVocaDetailLayout>
      <MyVocaDetailWrapper>
        <MyVocaDetailBox>
          <InfoHeader>
            <DivA>
              <p>지금 보고 있는 단어장</p>
              <Button onClick={addWord}>
                <span>단어 추가하기</span>
              </Button>
              {isAddOpenModal && <AddWordModal openAddWordModal={addWord} />}
              <Button onClick={todoEdit}>
                <span>단어장 편집하기</span>
              </Button>
              {isEditOpenModal && (
                <EditVocaModal openEditVocaModal={todoEdit} />
              )}
            </DivA>
            <DivB>
              <div>
                <MyVocaItem wordStorage={voca_item} />
              </div>
              <div>
                <div>
                  <p>
                    카테고리<span>토익</span>
                    <img src={expand} alt="expand" />
                    <span>330</span>
                  </p>
                  <h1>보카바이블30</h1>
                  <h2>
                    시험에꼭 나오는 영단어
                    보카바이블보카바이블보카바이블보카바이블
                  </h2>
                  <p>공개</p>
                  <p>
                    마지막 시험<span>2022.09.10.12:33</span>
                  </p>
                  <p>
                    모르는 단어<span>3 객</span>
                  </p>
                </div>
                <div>
                  <p>
                    작성<span>보카 바이블</span>
                  </p>
                  <p>
                    제작<span>2022.09.10</span>
                  </p>
                </div>
              </div>
            </DivB>
          </InfoHeader>

          <WordList />
          {isEdit ? <div></div> : <div></div>}
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

const Button = styled.button`
  width: 290px;
  height: 300px;
  background-color: #f3f3f3;
`;

export default MyVocaDetail;
