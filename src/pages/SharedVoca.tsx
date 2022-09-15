import styled from "styled-components";

const SharedVoca = () => {
  return (
    <SharedVocaLayout>
      <SharedVocaWrapper>
        <SharedVocaBox>SharedVoca 페이지</SharedVocaBox>
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
  background-color: gray;
`;

const SharedVocaBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;
`;

export default SharedVoca;
