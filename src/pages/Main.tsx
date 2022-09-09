import styled from "styled-components";
import { MyWordCard, PopularWordBook, MainSubMenu } from "../components/index";
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
      <MyWordBookList>
        <span>
          <h3>맞춤형</h3>
          <p>나의 단어장</p>
          <p>단어장 전체보기</p>
        </span>
        <MyWordCard />
      </MyWordBookList>
      <div>
        <span>
          <h3>합격률 1위-</h3>
          <p>인기 단어장</p>
          <p>카테고리 별로 인기있는 단어장을 찾아볼 수 있어요.</p>
        </span>
        <PopularWordBook />
      </div>
      <div>
        <div>
          <h3>단어장 통계</h3>
          <span>
            <p>토익</p>
            <p>토익</p>
            <p>토익</p>
          </span>
        </div>
        <span> 더보기 </span>
      </div>
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
`;
