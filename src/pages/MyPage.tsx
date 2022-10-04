import styled from "styled-components";
import { MyInfo, MyPageHeader } from "../components";

const MyPage = () => {
  return (
    <MyPageLayout>
      <MyPageWrapper>
        <MyPageBox>
          <MyPageHeader />
          <MyInfo />
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
`;

export default MyPage;
