import styled from "styled-components";
const Header = () => {
  return (
    <HeaderBar>
      <HeaderContent>
        <div>
          <span>
            <A href="/">로고</A>
          </span>
          <p>
            <A href="/myvoca">나의 단어장</A>
          </p>
          <p>
            <A href="/sharedvoca">공유 단어장</A>
          </p>
          <p>
            <A href="/game">게임</A>
          </p>
          <p>
            <A href="/board">자유게시판</A>
          </p>
        </div>
        <div>
          <span>검색</span>
          <span>아이콘</span>
          <span>로그인</span>
        </div>
      </HeaderContent>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div<{ MainHeader?: boolean }>`
  height: 233px;
  display: flex;
  align-items: center;

  /* background-color: ${props => (props.MainHeader ? "#00b4db" : "#fff")}; */
`;
const HeaderContent = styled.section`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    p {
      margin-right: 3rem;
    }
    span {
      margin-right: 1rem;
      &:last-child {
        margin: 0px;
      }
    }
  }
`;

const A = styled.a`
  text-decoration: none;
`;
