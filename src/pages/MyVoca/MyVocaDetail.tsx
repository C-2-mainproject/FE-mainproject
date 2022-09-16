import { useState } from "react";
import styled from "styled-components";
import { MyVocaItem, WordList } from "../../components";
import AddWordModal from "../../components/MyVoca/AddWordModal";
import EditVocaModal from "../../components/MyVoca/EditVocaModal";
import { expand, ildan } from "../../images";

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
          <div>
            <DivA>
              <p>지금 보고 있는 단어장</p>
              <div>
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
              </div>
            </DivA>
            <DivB>
              <MyVocaItem wordStorage={voca_item} />
              <DetailInfo>
                <div>
                  <p>
                    카테고리<span>{voca_item.category}</span>
                    <img src={expand} alt="expand" />
                    <span>{voca_item.likeCount}</span>
                  </p>
                  <h1>{voca_item.title}</h1>
                  <h2>{voca_item.description}</h2>
                  <h3>{voca_item.public ? "공개" : "비공개"}</h3>
                  <p>
                    마지막 시험<span>{voca_item.lastTestAt}</span>
                    모르는 단어<span>{voca_item.wrongWords} 개</span>
                  </p>
                </div>
                <div>
                  <p>
                    작성<span>{voca_item.writer}</span>
                  </p>
                  <p>
                    제작<span>{voca_item.createAt}</span>
                  </p>
                </div>

                <Balloon>
                  <p>일단이</p>
                  <span>잘하고 있어! 너무 멋진데?</span>
                </Balloon>
                <Ildan src={ildan} alt="ildan" />
              </DetailInfo>
            </DivB>
          </div>

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
    margin-bottom: 20px;
    margin-left: 20px;
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

const DetailInfo = styled.div`
  width: 947px;
  height: 400px;

  h1 {
    width: 167px;
    height: 35px;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #000;
  }

  h2 {
    margin-bottom: 20px;
    width: 454px;
    height: 26px;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #666;
  }

  h3 {
    margin-bottom: 60px;
    border-bottom: 1px solid;
    width: 29px;
    height: 23px;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #000;
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #666;
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #666;
  }

  div:nth-child(1) {
    height: 284px;
    border-top: 1px solid;
    padding: 20px 0 20px;
  }

  div:nth-child(2) {
    height: 115px;
    border-top: 1px solid;
    padding: 30px 0 20px;
  }
`;

const Ildan = styled.img`
  position: relative;
  left: 700px;
  bottom: 400px;
`;

const Balloon = styled.div`
  position: relative;
  left: 450px;
  bottom: 150px;
  margin: 50px;
  padding: 20px;
  width: 220px;
  height: 100px;
  color: #fff;
  background-color: gray;

  &:after {
    content: "";
    position: absolute;
    top: 21px;
    right: -30px;
    border-left: 30px solid gray;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }

  p {
    color: black;
  }

  span {
    color: white;
  }
`;
export default MyVocaDetail;
