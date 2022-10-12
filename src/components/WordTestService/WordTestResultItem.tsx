import styled from "styled-components";
import { cancel, check, circle } from "../../images";
import { ResultProps } from "../../types/TestServiceTypes";

const WordTestResultItem = ({
  orginAnswer,
  submitAnswer,
  totalLength,
  success,
}: ResultProps) => {
  return (
    <WordTestResultItemLayout>
      <WordTestResultItemHeader>
        <p>단어</p>
        <span>
          {submitAnswer.index + 1} / {totalLength}
        </span>
      </WordTestResultItemHeader>
      <WordTestResultItemQuiz>
        <p>{submitAnswer.words}</p>
      </WordTestResultItemQuiz>
      <SubmitAnswer className={success ? "yes" : "no"}>
        <span>{submitAnswer.meanings}</span>
        <img src={success ? check : cancel} alt="circle" />
      </SubmitAnswer>
      <OriginAnswer>
        <span>{orginAnswer}</span>
        <img src={circle} alt="circle" />
      </OriginAnswer>
    </WordTestResultItemLayout>
  );
};

const WordTestResultItemLayout = styled.div`
  width: 619px;
  height: 500px;

  margin-bottom: 48px;

  &:nth-child(2n + 1) {
    margin-right: 42px;
  }
  &:nth-child(2n) {
    margin-right: 0px;
  }
`;

const WordTestResultItemHeader = styled.div`
  height: 54px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f7f7f7;
`;

const WordTestResultItemQuiz = styled.div`
  height: 288px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
  background-color: #f7f7f7;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
  }
`;

const SubmitAnswer = styled.div`
  height: 60px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 15px;
    height: 15px;
  }
  background-color: ${props =>
    props.className === "yes" ? "#D6F8FF" : "#FFE8E8"};
`;

const OriginAnswer = styled.div`
  height: 60px;
  margin-top: 20px;
  background-color: #d6f8ff;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 15px;
    height: 15px;
  }
`;
export default WordTestResultItem;
