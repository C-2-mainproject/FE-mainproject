import styled from "styled-components";
import { MyVocaSubMenu } from "../../components";

const MyVoca = () => {
  return (
    <MyVocaLayout>
      <MyVocaWrapper>
        <MyVocaBox>
          <MyVocaSubMenu />
        </MyVocaBox>
      </MyVocaWrapper>
    </MyVocaLayout>
  );
};

const MyVocaLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const MyVocaWrapper = styled.div`
  width: 1360px;
  margin: auto;
`;

const MyVocaBox = styled.div`
  width: 1280px;
  margin: auto;
`;

export default MyVoca;
