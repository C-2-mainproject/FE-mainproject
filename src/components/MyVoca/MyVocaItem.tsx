import styled from "styled-components";
import { WordStorage } from "../../types";
import { expand } from "../../images/index";

type Props = {
  wordStorage: WordStorage;
};

const MyVocaItem = ({ wordStorage }: Props) => {
  const moveToDetail = (id: number) => {
    console.log("moveToDetail", id);
  };

  const moveToTestService = (id: number) => {
    console.log("moveToTestService", id);
  };

  return (
    <MyVocaItemLayout key={wordStorage.id}>
      <InfoHeaderDiv>
        <CategoryDiv>
          <span>{wordStorage.category}</span>
        </CategoryDiv>
      </InfoHeaderDiv>
      <InfoBodyDiv>
        <DivTop>
          <Title>{wordStorage.title}</Title>
          <Description>{wordStorage.description}</Description>
          <LastTest>
            마지막 시험
            <span>{wordStorage.lastTestAt}</span>
          </LastTest>
        </DivTop>
        <DivBottom>
          <Writer>
            작성<span>{wordStorage.writer}</span>
          </Writer>
          <CreateAt>
            제작<span>{wordStorage.createAt}</span>
            <span>
              <img src={expand} alt="like" />
              {wordStorage.likeCount}
            </span>
          </CreateAt>
        </DivBottom>
      </InfoBodyDiv>

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

const InfoHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoBodyDiv = styled.div`
  width: 210px;
  height: 350px;
  margin: auto;
`;

const DivTop = styled.div`
  height: 200px;
`;

const DivBottom = styled.div`
  height: 150px;
  border-top: 1px solid;
`;

const CategoryDiv = styled.div`
  width: 90px;
  height: 52px;
  margin: 0 0 0 200px;
  text-align: center;
  background-color: #949494;
  opacity: 0.5;

  span {
    font-family: NotoSansKR;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #fff;
  }
`;

const Title = styled.p`
  font-family: NotoSansKR;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #000;
`;

const Description = styled.p`
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #666;
`;

const LastTest = styled.p`
  margin-bottom: 14px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #333;

  span {
    margin-left: 10px;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #333;
  }
`;

const Writer = styled.p`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #666;

  span {
    margin-left: 10px;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #666;
  }
`;

const CreateAt = styled.p`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #666;

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
    margin-left: 45px;
    vertical-align: middle;
  }
`;
export default MyVocaItem;
