import { useEffect, useState } from "react";
import styled from "styled-components";
import { game_feedback } from "../../images";
import { getGameInfo } from "../../redux/modules/gameInfoSlice";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import GameFinishModal from "./GameFinishModal";

type IClick = {
  clickReady: () => void;
};
const QuizInfoSection = ({ clickReady }: IClick) => {
  const { gameInfo, isReady, gameWordStorage, quizProgress } = useAppSelector(
    state => state.gameInfoSlice,
  );
  const dispatch = useAppDispatch();

  const [quizWord, setQuizWord] = useState<string>("");
  const [isFinishPop, setIsFinishPop] = useState<boolean>(false);

  useEffect(() => {
    nextQuiz();
  }, [quizProgress.quizNumber]);

  useEffect(() => {
    if (quizProgress.finalWinner !== "") {
      finishPopup();
    }
  }, [quizProgress.finalWinner]);

  const nextQuiz = () => {
    setTimeout(() => {
      setQuizWord(gameWordStorage[quizProgress.quizNumber].words);
    }, 4000);
  };

  const finishPopup = () => {
    setIsFinishPop(!isFinishPop);
    dispatch(
      getGameInfo({
        roomId: "",
        cookie: "",
        participant: "",
        profileImg: "",
      }),
    );
  };

  return (
    <QuizInfoSectionLayout>
      <ScoreBoard>
        <div>
          <p>SCORE BOARD</p>
          <UserInfo>
            <div>
              <img src={gameInfo.myProfileImage} alt="profile0" />
              <span>{gameInfo.myNickname}</span>
              <span>
                {quizProgress.correctAnswer.map((v, i) => {
                  if (gameInfo.myNickname === v) {
                    return <span key={i}> 👍🏻 </span>;
                  }
                })}
              </span>
            </div>
            <div>
              <img src={gameInfo.otherProfileImage} alt="profile1" />
              <span>{gameInfo.otherNickname}</span>
              <span>
                {quizProgress.correctAnswer.map((v, i) => {
                  if (gameInfo.otherNickname === v) {
                    return <span key={i}> 👍🏻 </span>;
                  }
                })}
              </span>
            </div>
          </UserInfo>
        </div>
      </ScoreBoard>

      <QuizListSection>
        <Title>일단이의 영어단어 게임</Title>
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
            게임서비스 이용에 도움이 필요한가요?
            <a href="https://talk.naver.com/W4Y0TR" target="_blank">
              <span>고객지원 서비스</span>
            </a>
          </p>
        </div>
        {isFinishPop && (
          <GameFinishModal
            winner={quizProgress.finalWinner}
            disconnectUser={quizProgress.disconnectUser}
          />
        )}
      </QuizListSection>

      <AdsSection>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScCHYnbcZU1l68kQbxbc_43UVBVYIZzy6HUbg241MUo5HJdjQ/viewform"
          target="_blank"
        >
          <img src={game_feedback} alt="game_feedback" />
        </a>
      </AdsSection>
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
    letter-spacing: -0.07em;
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
      margin-right: 20px;
      border-radius: 40px;
      vertical-align: middle;
    }
  }

  div:nth-child(2n) {
    width: 360px;

    img {
      width: 60px;
      margin-right: 20px;
      border-radius: 40px;
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
  letter-spacing: -0.07em;

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
  background: #caf3ff;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;

  div:nth-child(2n + 1) {
    width: 37px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;
    background: #00b4db;
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
    background: #00b4db;
    box-shadow: 10px 10px 60px #baf0ff;
    margin-top: 140px;

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 46px;
      letter-spacing: -0.07em;
      color: #ffffff;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      letter-spacing: -0.07em;

      color: #ffffff;
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
const Title = styled.div`
  width: 184px;
  position: relative;
  top: -10px;
  left: 270px;
  background: #ffffff;
`;
const AdsSection = styled.div`
  width: 720px;
  height: 170px;
  margin-top: 30px;
`;
export default QuizInfoSection;
