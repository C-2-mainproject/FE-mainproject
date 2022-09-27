import styled from "styled-components";
import { ildan } from "../../images";

const quiz_list = ["Apple", "Banana", "Tree", "Star", "Fruit", "Bag"];

const QuizInfoSection = () => {
  return (
    <QuizInfoSectionLayout>
      <ScoreBoard>
        <div>
          <p>SCORE BOARD</p>
          <UserInfo>
            <div>
              <img src={ildan} alt="ildan" />
              <span>갓재범</span>
              <span>🐺🐺🐺🐺</span>
            </div>
            <div>
              <img src={ildan} alt="ildan" />
              <span>hanghae99</span>
              <span>🐺🐺🐺🐺</span>
            </div>
          </UserInfo>
        </div>
      </ScoreBoard>

      <QuizListSection>
        <div>일단이의 영어단어 게임</div>
        <QuizList>
          <div>
            <div>Game</div>
          </div>
          <div></div>
        </QuizList>
        <div>
          <p>
            게임서비스 이용에 도움이 필요한가요?<span>고객지원 서비스</span>
          </p>
        </div>
      </QuizListSection>

      <AdsSection>설문조사 바로가기 광고 이미지</AdsSection>
    </QuizInfoSectionLayout>
  );
};

const QuizInfoSectionLayout = styled.div`
  width: 720px;
  height: 800px;
  text-align: center;

  p {
    margin-top: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-transform: uppercase;

    color: #d3d3d3;
  }

  h1 {
    font-size: 80px;
  }
`;

const ScoreBoard = styled.div`
  width: 720px;
  height: 110px;
  border: 1px solid #000000;
`;

const UserInfo = styled.div`
  display: flex;
  text-align: left;
  padding-left: 30px;

  div:nth-child(2n + 1) {
    width: 360px;

    img {
      width: 60px;
      vertical-align: middle;
    }
  }

  div:nth-child(2n) {
    width: 360px;

    img {
      width: 60px;
      vertical-align: middle;
    }
  }
`;

const QuizList = styled.div`
  display: flex;
  width: 680px;
  height: 377px;
  background-color: #f0f0f0;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;

  div:nth-child(2n + 1) {
    width: 37px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.1em;
    background-color: #c7c7c7;
    color: #ffffff;

    div {
      margin-top: 180px;
      transform: rotate(-90deg);
    }
  }

  div:nth-child(2n) {
    width: 640px;
  }
`;

const QuizListSection = styled.div`
  width: 720px;
  height: 460px;
  margin-top: 30px;
  border: 1px solid #000000;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;
    color: #6b6b6b;
  }

  span {
    margin-left: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;
    text-decoration-line: underline;
    color: #6b6b6b;
  }
`;

const AdsSection = styled.div`
  width: 720px;
  height: 170px;
  margin-top: 30px;
  border: 1px solid #000000;
`;
export default QuizInfoSection;
