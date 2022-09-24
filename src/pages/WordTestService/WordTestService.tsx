import styled from "styled-components";
import { WordTestList } from "../../components";

const WordTestService = () => {
  return (
    <WordTestServiceLayout>
      <WordTestServiceWrapper>
        <WordTestServiceBox>
          <WordTestList />
        </WordTestServiceBox>
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
`;

const WordTestServiceBox = styled.div`
  width: 1280px;
  margin: auto;
`;

export default WordTestService;
