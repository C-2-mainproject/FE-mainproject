import styled from "styled-components";
import WorkVideo from "../images/video/works.mp4";
const Footer = () => {
  return (
    <FooterMenu>
      <FooterVideo muted autoPlay loop>
        <source src={WorkVideo} type="video/mp4" />
      </FooterVideo>
      <section>
        <FooterTextBox>
          <FooterText>
            <h3>단어장의 기준이 된다</h3>
            <p>일단이와 함께하는 완전 단어 학습</p>
          </FooterText>
          <FooterLogo>
            <div>로고</div>
            <div>
              <p>소개</p>
              <p>개인정보처리방침</p>
              <p>이메일무단수집거부</p>
              <p>운영방침</p>
            </div>
          </FooterLogo>
          <FooterLogo>
            <MadeBy>
              <span>FE</span> 소재범 <span>BE</span>이태민 장동하 유은정 이윤종
              <span>FE-SUPPOTER</span>이태훈
            </MadeBy>
            <div>
              <h5>© 2022 일단이의 단어장. ALL RIGHTS RESERVED</h5>
            </div>
          </FooterLogo>
        </FooterTextBox>
      </section>
    </FooterMenu>
  );
};

export default Footer;

const FooterMenu = styled.div`
  height: 900px;
  display: flex;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to right,
    rgba(1, 181, 220, 0.7),
    rgba(1, 131, 177, 0.7)
  );
  section {
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
`;

const FooterVideo = styled.video`
  padding: 0px;
  width: 100vw;
  margin: 0px auto;
  position: relative;
  z-index: -3;
  object-fit: cover;
`;

const FooterTextBox = styled.div`
  height: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FooterText = styled.div`
  font-weight: 500;
  font-size: 48px !important;
  line-height: 70px;
  letter-spacing: -0.07em;
  margin-bottom: 12rem;
  p {
    font-size: 48px;
    font-weight: 300;
  }
`;
const FooterLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    &:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 60px;
      p {
        font-size: 24px;
      }
      h5 {
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;

const MadeBy = styled.div`
  font-size: 16px;
  font-weight: 300;
  span {
    font-weight: 500;
    margin: 0px 15px;
    &:first-child {
      margin-left: 0px;
    }
  }
`;
