import { useEffect, useState } from "react";
import styled from "styled-components";
import { ildan } from "../../images";
import { useAppSelector } from "../../shared/reduxHooks";

type IClick = {
  clickReady: () => void;
};
const QuizInfoSection = ({ clickReady }: IClick) => {
  const { gameInfo, quiz, isReady, gameWordStorage } = useAppSelector(
    state => state.gameInfoSlice,
  );
  const [quizWord, setQuizWord] = useState<string>("");
  console.log(
    "QuizInfoSection is ::",
    gameInfo.participant[0],
    gameInfo.sessionId[0],
    quiz,
    gameWordStorage,
  );

  useEffect(() => {
    nextQuiz();
  }, [quiz]);

  const nextQuiz = () => {
    setTimeout(() => {
      setQuizWord(gameWordStorage[quiz].word);
    }, 4000);
  };

  return (
    <QuizInfoSectionLayout>
      <ScoreBoard>
        <div>
          <p>SCORE BOARD</p>
          <UserInfo>
            <div>
              <img src={ildan} alt="ildan" />
              <span>{gameInfo.participant[0]}</span>
              <span>🐺 🐺 🐺 🐺</span>
            </div>
            <div>
              <img src={ildan} alt="ildan" />
              <span>{gameInfo.participant[1]}</span>
              <span>🐺 🐺 🐺 🐺</span>
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
          {isReady ? (
            <QuizWords>
              {quizWord}
              <p>알맞은 정답을 채팅창에 입력해주세요</p>
              <p>정답을 맞추시면 3초후에 다음 단어로 넘어갑니다</p>
            </QuizWords>
          ) : (
            <div>
              <button
                onClick={() => {
                  setTimeout(() => {
                    clickReady();
                  }, 3000);
                }}
              >
                <h1>READY</h1>
                <p>모두 준비가 되면 게임이 시작됩니다!</p>
              </button>
            </div>
          )}
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
const QuizWords = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 46px;
  margin-top: 150px;
  color: #000000;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;

    color: #999999;
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

  button {
    width: 319px;
    height: 100px;
    background: #5e5e5e;
    margin-top: 140px;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 46px;

      color: #ffffff;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.07em;

      color: #a4a4a4;
    }
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
