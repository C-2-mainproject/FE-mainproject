import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { apis } from "../../shared/api";
import { removeCookie } from "../../shared/Cookie";
import { useAppSelector } from "../../shared/reduxHooks";

const MyInfo = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  const deleteUser = async () => {
    await apis.deleteUserInfo().then(data => console.log(data));
    alert("회원 탈퇴합니다!");
    removeCookie();
    window.location.href = process.env.REACT_APP_OAUTH2_LOGOUT as string;
    navigate("/");
  };

  return (
    <MyInfoLayout>
      <MyInfoHeader>
        <p>회원정보</p>
        <span>
          <a href="https://talk.naver.com/W4Y0TR" target="_blank">
            고객 센터
          </a>
        </span>
      </MyInfoHeader>

      <Info>
        <ID>
          <p>아이디</p>
          <span>{userInfo.nickname}</span>
        </ID>
        <Email>
          <p>이메일</p>
          <span>{userInfo.username}</span>
        </Email>
      </Info>
      <DeleteUser onClick={deleteUser}>회원 탈퇴</DeleteUser>
    </MyInfoLayout>
  );
};

const MyInfoLayout = styled.div`
  margin-bottom: 200px;
`;

const MyInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 98px;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.07em;
    color: #000000;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.07em;
    color: #000000;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const Info = styled.div`
  width: 1280px;
  height: 294px;
  border-top: 2px solid;
  border-bottom: 1px solid;
  margin-bottom: 20px;

  p {
    width: 50px;
    margin-right: 100px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;

    color: #000000;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;
    color: #000000;
  }
`;

const ID = styled.div`
  display: flex;
  align-items: center;
  margin-top: 45px;

  span {
    width: 500px;
    height: 70px;
    background: #eeeeee;
    padding-top: 25px;
    padding-left: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;

    color: #999999;
  }
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;

  span {
    width: 500px;
    height: 70px;
    background: #eeeeee;
    padding-top: 25px;
    padding-left: 10px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.07em;

    color: #999999;
  }
`;

const DeleteUser = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.07em;
  color: #999999;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;
export default MyInfo;
