import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GameGuideModal from "../../components/Game/GameGuideModal";
import GameWaitting from "../../components/Game/GameWaitting";
import { game_logo } from "../../images";
import { finishGame } from "../../redux/modules/gameInfoSlice";
import { apis } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";

type IRank = {
  nickname: string;
  profileImage: string;
  winCount: number;
};
const Game = () => {
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isWaittingModal, setIsWaittingModal] = useState(false);
  const [myRecord, setMyRecord] = useState<number>(0);
  const [ranking, setRanking] = useState<IRank[]>([]);
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  const gameGuide = () => {
    setIsOpenModal(!isOpenModal);
  };

  const gameWaitting = () => {
    setIsWaittingModal(!isWaittingModal);
  };

  const getRank = async () => {
    await apis.getRank().then(data => setRanking(data.data));
  };
  const getMyRecord = async () => {
    await apis.getRecord().then(data => setMyRecord(data.data.winCount));
  };

  useEffect(() => {
    getMyRecord();
    getRank();
  }, []);

  useEffect(() => {
    dispatch(finishGame());
  }, []);

  return (
    <GameLayout>
      <GameWrapper>
        <GameBox>
          <TopSection>
            <div>
              <MyInfo>
                <ImgSection>
                  <img src={userInfo.profileImage} alt="profileImage" />
                </ImgSection>
                <InfoSection>
                  <h1>나의 점수</h1>
                  <p>
                    아이디<span>{userInfo.nickname}</span>
                  </p>
                  <p>
                    승리수<span>{myRecord}</span>
                  </p>
                </InfoSection>
              </MyInfo>
              <GameImg>
                <div>
                  <img src={game_logo} alt="game_logo" />
                  <button onClick={gameWaitting}>
                    <span>게임 시작</span>
                  </button>
                  {isWaittingModal && (
                    <GameWaitting openWattingModal={gameWaitting} />
                  )}
                </div>
              </GameImg>
            </div>
            <RightSection>
              <div>
                <h1>일단이의 게임</h1>
                <p>영단어 랜덤매칭 1:1 대결 랭킹</p>
                <HeaderDiv>
                  <span>순위</span>
                  <span>아이디</span>
                  <span>승리수</span>
                </HeaderDiv>
                {ranking
                  .slice()
                  .sort((a: IRank, b: IRank): number => {
                    return b.winCount - a.winCount;
                  })
                  .map((rank, index) => {
                    return (
                      <ContentDiv key={index}>
                        <span>{index + 1}</span>
                        <span>
                          <img src={rank.profileImage} alt="rank" />
                          {rank.nickname}
                        </span>
                        <span>{rank.winCount}</span>
                      </ContentDiv>
                    );
                  })}
              </div>
            </RightSection>
          </TopSection>
          <BottomSection>
            <div>
              <h1>게임 방법 안내</h1>
              <p>일단이의 영단어 대결 게임 방법 가이드</p>
            </div>
            <button onClick={gameGuide}>
              <span>바로 가기</span>
            </button>
            {isOpenModal && <GameGuideModal openGameGuideModal={gameGuide} />}
          </BottomSection>
        </GameBox>
      </GameWrapper>
    </GameLayout>
  );
};

const GameLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const GameWrapper = styled.div`
  width: 1360px;
  margin: auto;
`;

const GameBox = styled.div`
  width: 1280px;
  margin: auto;
`;
const TopSection = styled.div`
  display: flex;
`;

const RightSection = styled.div`
  width: 604px;

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 52px;
    letter-spacing: -0.07em;
    color: #000000;
  }

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 52px;
    letter-spacing: -0.07em;
    color: #000000;
  }
`;

const BottomSection = styled.div`
  width: 1276px;
  height: 334px;
  display: flex;
  justify-content: space-between;

  margin-bottom: 232px;
  border: 1px solid #00b4db;
  background-color: #f4fcfd;

  h1 {
    margin-top: 80px;
    margin-left: 80px;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 70px;
    letter-spacing: -0.07em;
    color: #000000;
  }

  p {
    margin-left: 80px;
    margin-top: 60px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.07em;

    color: #999999;
  }

  button {
    width: 300px;
    height: 83px;
    margin-top: 125px;
    margin-right: 100px;
    background: #00b4db;
    border: none;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.07em;
    color: #ffffff;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  border-top: 1px solid;
  border-bottom: 1px solid;
  margin-top: 43px;
  text-align: center;

  span {
    margin: 27px 0 27px 0;

    flex: 1;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;

    color: #000000;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  border-bottom: 1px solid;

  span:nth-child(2n + 1) {
    text-align: center;
  }

  span {
    flex: 1;
    margin: 27px 0 27px 0;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;
    color: #000000;
  }

  img {
    border-radius: 50px;
    vertical-align: middle;
    margin-right: 20px;
    width: 44px;
    height: 44px;
  }
`;
const MyInfo = styled.div`
  box-sizing: border-box;
  margin-right: 100px;
  margin-bottom: 65px;
  width: 573px;
  height: 264px;
  display: flex;
  border: 1px solid #00b4db;
`;

const GameImg = styled.div`
  box-sizing: border-box;
  margin-bottom: 137px;
  width: 573px;
  height: 644px;
  border: 1px solid #00b4db;
  text-align: center;
  background: linear-gradient(360deg, rgba(0, 180, 219, 0.2) -1.83%, rgba(0, 180, 219, 0) 92.32%), #FFFFFF;
  
  div {
    margin-top: 55px;
  }

  img {
    width: 348px;
    height: 448px;
    margin-bottom: 20px;
  }

  button {
    width: 300px;
    height: 83px;
    background-color: #00B4DB;
  }
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.07em;
    color: #FFFFFF;
  }
}
`;

const ImgSection = styled.div`
  width: 237px;
  height: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    width: 140px;
    height: 140px;
    border-radius: 70px;
  }
`;

const InfoSection = styled.div`
  height: 100%;
  text-align: left;

  h1 {
    margin-top: 52px;
    margin-bottom: 20px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;

    letter-spacing: -0.07em;
    color: #000000;
  }

  p {
    margin-bottom: 10px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;

    letter-spacing: -0.07em;
    color: #999999;
  }

  span {
    margin-left: 62px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;

    letter-spacing: -0.07em;

    color: #404040;
  }
`;

export default Game;
