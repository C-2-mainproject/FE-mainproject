import styled from "styled-components";
const Header = () => {
  return (
    <HeaderBar>
      <HeaderContent>
        <div>
          <span> 로고</span>
          <p>나의 단어장</p>
          <p>공유 단어장</p>
          <p>게임</p>
          <p>자유게시판</p>
          <p>고객지원</p>
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
