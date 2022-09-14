import styled from "styled-components";

const MyPage = () => {
  return (
    <MyPageLayout>
      <MyPageWrapper>
        <MyPageBox>my page</MyPageBox>
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
`;

export default MyPage;
