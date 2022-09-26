import { useEffect } from "react";
import styled from "styled-components";
import { __getUserInfo } from "../redux/modules/userInfoSlice";
import { useAppDispatch, useAppSelector } from "../shared/reduxHooks";

const MyPage = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  useEffect(() => {
    dispatch(__getUserInfo());
  }, []);

  return (
    <MyPageLayout>
      <MyPageWrapper>
        <MyPageBox>
          <div>
            <p>마이페이지</p>
          </div>

          <div>
            <img src={userInfo.profileImage} />
            <p>{userInfo.nickname}</p>
          </div>
        </MyPageBox>
      </MyPageWrapper>
    </MyPageLayout>
  );
};

const MyPageLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const MyPageWrapper = styled.div`
  width: 1360px;
  margin: auto;
  background-color: gray;
`;

const MyPageBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;

  div:nth-child(2n) {
    display: flex;
  }
`;

export default MyPage;
