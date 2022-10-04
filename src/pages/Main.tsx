import styled from "styled-components";
import { MainSubMenu, WordChart } from "../components/index";
import SlickMyBook from "../components/Main/SlickMyBook";
import SlickBestBook from "../components/Main/SlickBestVoca";
import Dlfeksdl from "../images/top_dlfeksdl.png";
import RunDlfeksdl from "../images/run_dlfeksdl.png";
import { useEffect } from "react";
import { apis } from "../shared/api";
import { setCookie } from "../shared/Cookie";
const Main = () => {
  const userTest = async () => {
    await apis.getUserTest().then(data => {
      setCookie(data.headers.cookie);
    });
  };

  // const getLikeShared = async () => {
  //   await apis.getLikeSharedWordStorage().then(data => console.log(data));
  // };
  useEffect(() => {
    userTest();
  }, []);

  return (
    <>
      <MainMenu>
        <section style={{ paddingRight: "0px" }}>
          <WelcomeText>
            <div>
              <p>단어장의 기준이되다</p>
              <p>일단이와 함께하는 완전 단어학습</p>
              <p>수강료 걱정없는 단어 학습의 시작</p>
            </div>

            <TopDlfeksd src={Dlfeksdl} />
          </WelcomeText>
        </section>
      </MainMenu>
      <MainSubMenu />
      {/* 내단어장 리스트 */}
      <MyWordBookList>
        <div>
          <MyBookTitle>
            <h3>맞춤형</h3>
            <p>나의 단어장</p>
          </MyBookTitle>
          <SlickMyBook />
        </div>
      </MyWordBookList>
      <PopularList>
        <section>
          <PopularText>
            <h3>합격률 1위-</h3>
            <h3>인기 단어장</h3>
            <p>
              카테고리 별로 인기있는 <br />
              단어장을 찾아볼 수 있어요.
            </p>
          </PopularText>
          {/* <PopularWordBook /> */}
          <SlickBestBook />
        </section>
      </PopularList>
      <BookChart>
        <BookChartItems>
          <ChartTitle>
            <h3>수강료 걱정없이-</h3>
            <h3>일단이와 함께하는 학습</h3>
            <p>
              학습한 만큼 받아가고, <br />
              일단이와 함께해서 더 즐거운
            </p>
            <RunDlfeksd src={RunDlfeksdl} />
          </ChartTitle>
          <ChartText>
            <ChartSubText>
              <h4> 일단이의 총 단어장 </h4>
              <h5> 카테고리별 총 단어장 갯수 실시간 통계 </h5>
            </ChartSubText>

            <WordChart />
          </ChartText>
        </BookChartItems>
      </BookChart>
    </>
  );
};
export default Main;

const MainMenu = styled.div`
  background-image: linear-gradient(140deg, #00b4db 21%, #0083b0 83%),
    linear-gradient(to bottom, #bdbdbd, #bdbdbd);
  height: 900px;
  color: #fff;
`;

const WelcomeText = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 230px;
  margin-top: -235px;

  p {
    font-size: 48px;
    color: #fff;
    &:nth-child(1) {
      margin-top: 109px;

      font-weight: 500;
    }
    &:nth-child(2) {
      font-weight: 300;
    }
    &:nth-child(3) {
      margin-top: 50px;
      font-size: 24px;
      font-weight: 500;
    }
  }
`;

const MyWordBookList = styled.section`
  background-color: #fff;
  display: flex;
  height: 908px;
  align-items: center;
  // justify-content: center;
  margin-top: -10rem;
  div {
    display: flex;
  }
`;
const MyBookTitle = styled.span`
  width: 13rem;
  font-size: 36px;
  p {
    font-size: 36px;
    font-weight: 300;
  }
`;

const PopularList = styled.div`
  height: 334px;
  background-color: #00b4db;
  section {
    display: flex;
    position: relative;
    top: 71px;
  }
`;
const PopularText = styled.span`
  font-size: 36px;
  letter-spacing: -2.5px;
  color: #fff;
  margin-right: 8rem;
  h3 {
    &:nth-child(2) {
      font-weight: 300;
    }
  }
  p {
    letter-spacing: -1.6px;
    margin-top: 21px;
  }
`;

const BookChart = styled.div`
  height: 1271px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookChartItems = styled.section`
  display: flex;
`;

const TopDlfeksd = styled.img`
  width: 698px;
  position: relative;
  top: 2.5rem;
`;
const RunDlfeksd = styled.img`
  position: relative;
  width: 304px;
  top: 5.3rem;
  left: 9.1rem;
`;

const ChartTitle = styled.div`
  background-color: #00b4db;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 51px;
  width: 463px;
  height: 581px;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: -0.07em;
  margin-right: 5.5rem;
  h3 {
    &:nth-child(1) {
      margin-top: 76px;
    }
    &:nth-child(2) {
      font-weight: 300;
    }
  }
  p {
    font-size: 18px;
    line-height: 26px;
    margin-top: 21px;
    letter-spacing: -0.07em;
  }
`;

const ChartText = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-left: 60px;
  flex-direction: column;
`;
const ChartSubText = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  justify-content: space-between;
  align-items: center;
  &:first-child:after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #000;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  h4 {
    font-weight: 500;
    font-size: 36px;
    line-height: 52px;
    letter-spacing: -0.07em;

    color: #000000;
  }
  h5 {
    position: relative;
    top: 12px;
    color: #999;
  }
`;
