import styled from "styled-components";
import { PopularWordBook, MainSubMenu } from "../components/index";
import SlickMyBook from "../components/Main/SlickMyBook";
import Header from "../Layout/Header";
const Main = () => {
  return (
    <>
      <MainHeader>
        <Header />
        <section>
          <WelcomeText>
            <p>단어장의 기준이되다</p>
            <p>일단이와 함께하는 완전 단어학습</p>
          </WelcomeText>
        </section>
      </MainHeader>
      <MainSubMenu />
      {/* 내단어장 리스트 */}
      <MyWordBookList>
        <div>
          <span>
            <h3>맞춤형</h3>
            <p>나의 단어장</p>
          </span>
          <SlickMyBook />
        </div>
      </MyWordBookList>
      {/* 인기 단어장 리스트 */}
      <PopWordBook>
        <section>
          <span>
            <h3>합격률 1위-</h3>
            <p>인기 단어장</p>
            <p>
              카테고리 별로 인기있는 <br />
              단어장을 찾아볼 수 있어요
            </p>
          </span>
          <PopularWordBook />
        </section>
      </PopWordBook>
      <ChartWord>
        <div>
          <span>
            <h3>수강료 걱정없이-</h3>
            <p>일단이와 함께하는 학습</p>
            <p>
              학습한 만큼 쌓아가고.
              <br /> 일단이와 함께해서 더 즐거운.
            </p>
          </span>
        </div>
        <span>
          <p>일단이의 총 단어장</p>
          <p>카테고리별 총 단어장 갯수 실시간 통계</p>
          <div>차트</div>
        </span>
      </ChartWord>
    </>
  );
};
export default Main;

const MainHeader = styled.div`
  background-image: linear-gradient(140deg, #00b4db 21%, #0083b0 83%),
    linear-gradient(to bottom, #bdbdbd, #bdbdbd);
  height: 900px;
`;

const WelcomeText = styled.div`
  margin-top: 103px;
`;

const MyWordBookList = styled.section`
  background-color: #fff;
  display: flex;
  height: 970px;
  align-items: center;
  div {
    display: flex;
  }
`;

const PopWordBook = styled.div`
  background-color: #00b4db;
  section {
    display: flex;
  }
`;

const ChartWord = styled.section`
  height: 1271px;
  display: flex;
  align-items: center;
`;
