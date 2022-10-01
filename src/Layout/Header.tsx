// import axios from "axios";
import { useState, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SocialLoginModal from "../components/Login/SocialLoginModal";
import { logo, logo_w, mypage_b, mypage_w } from "../images";
import { getCookie, removeCookie } from "../shared/Cookie";
// import { apis } from "../shared/api";
// import SocialLoginModal from "../components/Login/SocialLoginModal";
// import { apis } from "../shared/api";
// import { setSessionId } from "../shared/Cookie";

const Header = () => {
  const location = window.location.pathname;
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const cookie = getCookie();

  useEffect(() => {
    getCookie();
  }, [cookie]);

  const moveToPage = (event: MouseEvent<HTMLSpanElement>) => {
    const newTarget = event.target as HTMLSpanElement;
    switch (newTarget.id) {
      case "home":
        navigate("/");
        break;

      case "myvoca":
        navigate("/myvoca");
        break;

      case "sharedvoca":
        alert("서비스 준비 중입니다.");
        // navigate("/sharedvoca");
        break;

      case "game":
        navigate("/game");
        break;

      case "board":
        alert("서비스 준비 중입니다.");
        // navigate("/board");
        break;

      case "mypage":
        navigate("/mypage");
        break;

      case "logout":
        alert("로그아웃 하시겠습니까?");
        removeCookie();
        navigate("/");
        break;

      default:
        navigate("/");
        break;
    }
  };

  const loginModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <HeaderBar>
      <HeaderContent className={location === "/" ? "main" : "else"}>
        <div>
          <p id="home" onClick={moveToPage}>
            <img src={location === "/" ? logo_w : logo} alt="logo" />
          </p>
          <p>
            <span id="myvoca" onClick={moveToPage}>
              나의 단어장
            </span>
          </p>
          <p>
            <span id="sharedvoca" onClick={moveToPage}>
              공유 단어장
            </span>
          </p>
          <p>
            <span id="game" onClick={moveToPage}>
              게임
            </span>
          </p>
          <p>
            <span id="board" onClick={moveToPage}>
              자유 게시판
            </span>
          </p>
        </div>
        <div>
          {/* <a href="https://jdh3340.shop/logout">로그아웃</a> */}
          <p>
            <span id="mypage" onClick={moveToPage}>
              <img src={location === "/" ? mypage_w : mypage_b} alt="mypage" />
              My PAGE
            </span>
          </p>
          {cookie ? (
            <>
              <span id="logout" onClick={moveToPage}>
                LOGOUT
              </span>
            </>
          ) : (
            <>
              <span id="login" onClick={loginModal}>
                LOGIN
              </span>
              {isOpenModal && <SocialLoginModal openLoginModal={loginModal} />}
            </>
          )}
        </div>
      </HeaderContent>
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.div`
  height: 233px;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.section`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${props => (props.className === "main" ? "#ffffff" : "#000000")};

  img {
    cursor: pointer;
  }

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
      cursor: pointer;
    }

    a {
      text-decoration: none;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;

      letter-spacing: -0.07em;
    }
  }
`;
