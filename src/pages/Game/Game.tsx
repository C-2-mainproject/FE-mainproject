import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GameGuideModal from "../../components/Game/GameGuideModal";
import { logo } from "../../images";

const Game = () => {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const playGame = () => {
    navigate("/playgame");
  };

  const gameGuide = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <GameLayout>
      <GameWrapper>
        <GameBox>
          <TopSection>
            <div>
              <MyInfo>
                <ImgSection>
                  <img src={logo} alt="항해" />
                </ImgSection>
                <InfoSection>
                  <h1>나의 점수</h1>
                  <p>
                    아이디<span>hang9999</span>
                  </p>
                  <p>
                    승리수<span>99</span>
                  </p>
                </InfoSection>
              </MyInfo>
              <GameImg>
                <div>
                  <img src={logo} alt="항해" />
                  <button onClick={playGame}>게임 시작</button>
                </div>
              </GameImg>
            </div>
            <RightSection>
              <div>
                <h1>일단이의 게임</h1>
                <p>영단어 대결 랭킹</p>
                <HeaderDiv>
                  <span>순위</span>
                  <span>아이디</span>
                  <span>승리수</span>
                </HeaderDiv>

                <ContentDiv>
                  <span>1</span>
                  <span>
                    <img src={logo} alt="항해" /> 일단이
                  </span>
                  <span>1</span>
                </ContentDiv>
              </div>
            </RightSection>
          </TopSection>
          <BottomSection>
            <div>
              <h1>게임 방법 안내</h1>
              <p>일단이의 영단어 대결 게임 방법 가이드</p>
            </div>
            <button onClick={gameGuide}>바로 가기</button>
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
  margin-bottom: 232px;
  border: 1px solid;

  h1 {
    margin: 80px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 70px;
    /* identical to box height */

    letter-spacing: -0.07em;

    color: #000000;
  }

  p {
    margin-left: 80px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    /* identical to box height */

    letter-spacing: -0.07em;

    color: #999999;
  }

  button {
    width: 300px;
    height: 83px;
    margin: 125px;
    background: #00b4db;
    border: none;
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

    font-family: "Noto Sans KR";
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
  text-align: center;
  border-bottom: 1px solid;

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
    vertical-align: middle;
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
  border: 1px solid #999999;
`;

const GameImg = styled.div`
  box-sizing: border-box;
  margin-bottom: 137px;
  width: 573px;
  height: 644px;
  border: 1px solid #00b4db;
  text-align: center;
  
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
  }
`;

const InfoSection = styled.div`
  height: 100%;

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
