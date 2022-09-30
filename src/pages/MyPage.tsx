import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { MyInfo, MyPageHeader } from "../components";
import { __getUserInfo } from "../redux/modules/userInfoSlice";
import { getSessionId } from "../shared/Cookie";
import { useAppDispatch, useAppSelector } from "../shared/reduxHooks";

const MyPage = () => {
  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(state => state.userInfoSlice);

  useEffect(() => {
    dispatch(__getUserInfo());
  }, []);

  const test1 = async () => {
    console.log("test1");
    try {
      const data = await axios.post("http://newlno.com/api/user/a", {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const test2 = async () => {
    console.log("test2");
    try {
      const data = await axios.get("http://newlno.com/api/user/b", {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const test3 = async () => {
    console.log("test3");
    try {
      const data = await axios.post("http://newlno.com/api/user", {
        withCredentials: true,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const test4 = () => {
    console.log(getSessionId());
  };

  return (
    <MyPageLayout>
      <MyPageWrapper>
        <MyPageBox>
          <MyPageHeader />
          <MyInfo />

          <button onClick={test1}>테스트1</button>
          <button onClick={test2}>테스트2</button>
          <button onClick={test3}>테스트3</button>
          <button onClick={test4}>테스트4</button>
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
`;

const MyPageBox = styled.div`
  width: 1280px;
  margin: auto;

  // div:nth-child(2n) {
  //   display: flex;
  // }
`;

export default MyPage;
