import styled from "styled-components";

const WordTestService = () => {
  return (
    <WordTestServiceLayout>
      <WordTestServiceWrapper>
        <WordTestServiceBox>WordTestService 페이지!!</WordTestServiceBox>
      </WordTestServiceWrapper>
    </WordTestServiceLayout>
  );
};

const WordTestServiceLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const WordTestServiceWrapper = styled.div`
  width: 1360px;
  margin: auto;
  background-color: gray;
`;

const WordTestServiceBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;
`;

export default WordTestService;
