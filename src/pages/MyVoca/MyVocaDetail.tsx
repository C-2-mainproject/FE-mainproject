import styled from "styled-components";
import { MyVocaItem, WordList } from "../../components/MyVoca/index";
import MyVocaDetailHeader from "../../components/MyVoca/MyVocaDetailHeader";
import MyVocaDetailInfo from "../../components/MyVoca/MyVocaDetailInfo";
import { useAppSelector } from "../../shared/reduxHooks";
import { IWordStorage } from "../../types/MyVocaTypes";

const MyVocaDetail = () => {
  const { detailWordStorage } = useAppSelector(state => state.wordStorageSlice);

  return (
    <MyVocaDetailLayout>
      <MyVocaDetailWrapper>
        <MyVocaDetailBox>
          <div>
            <MyVocaDetailHeader />
            <Contents>
              <MyVocaItem wordStorage={detailWordStorage as IWordStorage} />
              <MyVocaDetailInfo />
            </Contents>
          </div>
          <WordList />
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

const Contents = styled.div`
  display: flex;
`;

const DetailInfo = styled.div`
  width: 947px;
  height: 400px;

  h1 {
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
    width: 40px;
    height: 23px;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: center;
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

  img {
    cursor: pointer;
  }
`;

const Ildan = styled.img`
  position: relative;
  width: 280px;
  height: 280px;
  left: 700px;
  bottom: 400px;
  cursor: pointer;
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
  background-color: #e4f5fa;

  &:after {
    content: "";
    position: absolute;
    top: 21px;
    right: -30px;
    border-left: 30px solid #e4f5fa;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }

  p {
    color: black;
  }

  span {
    color: black;
  }
`;
export default MyVocaDetail;
