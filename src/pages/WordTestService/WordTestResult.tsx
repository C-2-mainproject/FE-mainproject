import styled from "styled-components";
import { WordTestResultList } from "../../components";

const WordTestResult = () => {
  return (
    <WordTestResultLayout>
      <WordTestResultWrapper>
        <WordTestResultBox>
          <WordTestResultList />
        </WordTestResultBox>
      </WordTestResultWrapper>
    </WordTestResultLayout>
  );
};

const WordTestResultLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const WordTestResultWrapper = styled.div`
  width: 1360px;
  margin: auto;
`;

const WordTestResultBox = styled.div`
  width: 1280px;
  margin: auto;
`;

export default WordTestResult;
