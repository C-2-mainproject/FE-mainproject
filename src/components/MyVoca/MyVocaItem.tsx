import styled from "styled-components";
import { WordStorage } from "../../types/types";
import { expand } from "../../images";
import { useNavigate } from "react-router-dom";

type Props = {
  wordStorage: WordStorage;
};

const MyVocaItem = ({ wordStorage }: Props) => {
  const navigate = useNavigate();

  const moveToDetail = (id: number) => {
    navigate(`/myvoca-detail/${id}`);
  };

  const moveToTestService = (id: number) => {
    navigate(`/wordtest/${id}`);
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
          <p>
            마지막 시험 <span>{wordStorage.lastTestAt}</span>
          </p>
        </div>
        <div>
          <p>
            작성 <span>{wordStorage.writer}</span>
          </p>
          <p>
            제작
            <span>{wordStorage.createAt}</span>
            <img src={expand} alt="like" />
            {wordStorage.likeCount}
          </p>
        </div>
      </BodyDiv>
      <MyVocaItemLayoutHover key={wordStorage.id}>
        <button onClick={() => moveToDetail(wordStorage.id)}>
          자세히 보기
        </button>
        <button onClick={() => moveToTestService(wordStorage.id)}>
          시험보기
        </button>
      </MyVocaItemLayoutHover>
    </MyVocaItemLayout>
  );
};

const MyVocaItemLayout = styled.div`
  position: relative;
  width: 290px;
  height: 400px;
  margin-right: 40px;
  margin-bottom: 40px;
  background-color: #e7e7e7;

  &:nth-child(4n) {
    margin-right: 0px;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-left: 40px;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.12px;
    text-align: left;
    color: #000;
    border-bottom: 1px solid;
  }

  span {
    width: 90px;
    height: 52px;
    padding: 12px;
    text-align: center;
    background-color: #949494;
    font-family: NotoSansKR;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.68px;
    color: #fff;
  }
`;

const BodyDiv = styled.div`
  width: 210px;
  margin: auto;
  margin-top: 20px;

  h1 {
    height: 105px;
    font-family: NotoSansKR;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.68px;
    text-align: left;
    color: #000;
  }

  div:nth-child(2n + 1) {
    height: 220px;
    border-bottom: 1px solid;

    h2 {
      height: 80px;
      font-family: NotoSansKR;
      font-size: 18px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -1.26px;
      text-align: left;
      color: #666;
    }

    p {
      font-family: NotoSansKR;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -1.12px;
      text-align: left;
      color: #333;
    }
    span {
      margin-left: 10px;
    }
  }

  div:nth-child(2n) {
    height: 105px;
    margin-top: 20px;

    p {
      font-family: NotoSansKR;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -1.12px;
      text-align: left;
      color: #666;
    }

    span {
      margin-left: 10px;
      font-family: NotoSansKR;
      font-size: 16px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -1.12px;
      text-align: left;
      color: #666;
    }

    img {
      margin-left: 40px;
    }
  }
`;

const MyVocaItemLayoutHover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  width: 290px;
  height: 400px;
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
    width: 160px;
    height: 52px;
    margin: 0 65px 20px 65px;
    color: white;
    background-color: transparent;
    border: 1px solid;
  }
`;

export default MyVocaItem;
