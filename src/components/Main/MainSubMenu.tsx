import styled from "styled-components";
import {
  mainsub_sharebook,
  mainsub_myVoca,
  mainsub_community,
  mainsub_csceneter,
  mainsub_game,
} from "../../images/index";
const MainSubMenu = () => {
  return (
    <>
      <SubMenu>
        <div>
          <span>
            <img src={mainsub_myVoca} />
          </span>
          <p>나의 단어장</p>
        </div>
        <div>
          <span>
            <img src={mainsub_sharebook} />
          </span>
          <p>공유 단어장</p>
        </div>
        <div>
          <span>
            <img src={mainsub_game} />
          </span>
          <p>게임</p>
        </div>
        <div>
          <span>
            <img src={mainsub_community} />
          </span>
          <p>자유 게시판</p>
        </div>
        <div>
          <span>
            <img src={mainsub_csceneter} />
          </span>
          <p>고객 지원</p>
        </div>
      </SubMenu>
    </>
  );
};

export default MainSubMenu;

const SubMenu = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 232px;
  margin: 0 auto;
  background-color: #eff9fc;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  bottom: 10rem;
  align-items: center;
  span,
  p {
    display: flex;
    justify-content: center;
  }
  p {
    margin-top: 22px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.07em;
    color: #666666;
  }
`;
