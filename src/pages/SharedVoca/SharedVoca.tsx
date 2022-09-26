import styled from "styled-components";
import { SharedVocaSubMenu } from "../../components";

const SharedVoca = () => {
  return (
    <SharedVocaLayout>
      <SharedVocaWrapper>
        <SharedVocaBox>
          <SharedVocaSubMenu />
        </SharedVocaBox>
      </SharedVocaWrapper>
    </SharedVocaLayout>
  );
};

const SharedVocaLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const SharedVocaWrapper = styled.div`
  width: 1360px;
  margin: auto;
`;

const SharedVocaBox = styled.div`
  width: 1280px;
  margin: auto;
`;

export default SharedVoca;
