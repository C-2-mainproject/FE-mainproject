import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import WordTestSereviceModal from "../WordTestService/WordTestServiceModal";
import { Props } from "../../types/MyVocaTypes";
import { like, like_fill } from "../../images";

const MyVocaItem = ({ wordStorage }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const moveToWordStorageDetail = (id: number) => {
    navigate(`/myvoca-detail/${id}`);
  };

  const openWordTestServiceModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <MyVocaItemLayout key={wordStorage.id}>
      <HeaderDiv>
        <p>{wordStorage.public ? "공개" : "비공개"}</p>
        <span>{wordStorage.category}</span>
      </HeaderDiv>
      <BodyDiv>
        <div>
          <h1>{wordStorage.title}</h1>
          <h2>{wordStorage.description}</h2>
          {wordStorage.lastTestAt === null ? (
            <p></p>
          ) : (
            <p>
              마지막 시험
              <span>{wordStorage.lastTestAt.split("T")[0]}</span>
            </p>
          )}
        </div>
        <div>
          <p>
            작성 <span>{wordStorage.nickname}</span>
          </p>
          <p>
            제작
            <span>{wordStorage.createAt.split("T")[0]}</span>
            {wordStorage.likeCount === 0 ? (
              <img src={like} alt="like" />
            ) : (
              <img src={like_fill} alt="like" />
            )}
            {wordStorage.likeCount}
          </p>
        </div>
      </BodyDiv>
      <MyVocaItemLayoutHover key={wordStorage.id}>
        {!id ? (
          <button onClick={() => moveToWordStorageDetail(wordStorage.id)}>
            자세히 보기
          </button>
        ) : (
          ""
        )}
        <button onClick={openWordTestServiceModal}>시험보기</button>
        {isOpenModal && (
          <WordTestSereviceModal
            id={wordStorage.id}
            openWordTestServiceModal={openWordTestServiceModal}
          />
        )}
      </MyVocaItemLayoutHover>
    </MyVocaItemLayout>
  );
};

const MyVocaItemLayout = styled.div`
  position: relative;
  width: 18rem;
  height: 25rem;
  margin-right: 2.5rem;
  margin-bottom: 2.5rem;
  background-color: #e4f5fa;

  &:nth-child(4n) {
    margin-right: 0px;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 2.5rem;
    font-family: NotoSansKR;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
    color: #000;
    border-bottom: 1px solid;
  }

  span {
    width: 5.6rem;
    height: 3.2rem;
    padding: 0.75rem;
    text-align: center;
    background-color: #00b4db;
    font-family: NotoSansKR;
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1rem;
    color: #fff;
  }
`;

const BodyDiv = styled.div`
  width: 13rem;
  margin: auto;
  margin-top: 1.25rem;

  h1 {
    height: 6.5rem;
    font-family: NotoSansKR;
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1rem;
    text-align: left;
    color: #000;
  }

  div:nth-child(2n + 1) {
    height: 13.75rem;
    border-bottom: 1px solid;

    h2 {
      height: 4.37rem;
      font-family: NotoSansKR;
      font-size: 1.12rem;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.08rem;
      text-align: left;
      color: #666;
      word-break: break-all;
    }

    p {
      font-family: NotoSansKR;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.07rem;
      text-align: left;
      color: #333;
    }
    span {
      margin-left: 0.62rem;
    }
  }

  div:nth-child(2n) {
    height: 6.56rem;
    margin-top: 1.25rem;

    p {
      font-family: NotoSansKR;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.07rem;
      text-align: left;
      color: #666;
    }

    span {
      margin-left: 0.625rem;
      font-family: NotoSansKR;
      font-size: 1rem;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.07rem;
      text-align: left;
      color: #666;
    }

    img {
      margin-left: 2.5rem;
    }
  }
`;

const MyVocaItemLayoutHover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  width: 18.1rem;
  height: 25rem;
  display: flex;
  flex-direction: column-reverse;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: black;
  opacity: 0;

  :hover {
    opacity: 0.8;
  }

  button {
    width: 10rem;
    height: 3.25rem;
    margin: 0 4rem 1.25rem 4rem;
    color: white;
    background-color: transparent;
    border: 1px solid;

    &:hover {
      color: #00b4db;
    }
  }
`;

export default MyVocaItem;
