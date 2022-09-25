// import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
// import LoginModal from "../components/Login/LoginModal";
import SocialLoginModal from "../components/Login/SocialLoginModal";
// import SocialLoginModal from "../components/Login/SocialLoginModal";
// import { apis } from "../shared/api";
// import { setSessionId } from "../shared/Cookie";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  // const login = async () => {
  //   try {
  //     await apis.login().then(data => {
  //       console.log("data is :: ", data.headers.cookie);
  //       setSessionId(data.headers.cookie);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const loginModal = () => {
    setIsOpenModal(!isOpenModal);
  };

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
          {/* <span onClick={login}>검색</span> */}
          <a href="https://jdh3340.shop/logout">로그아웃</a>
          <span>
            <A href="/mypage">아이콘</A>
          </span>
          <span onClick={loginModal}>로그인</span>
          {isOpenModal && <SocialLoginModal openLoginModal={loginModal} />}
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
