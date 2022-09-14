import styled from "styled-components";

const WrongAnswer = () => {
  return (
    <WrongAnswerLayout>
      <MyVocaWrapper>
        <MyVocaBox>
          <span>전체보기</span>
        </MyVocaBox>
      </MyVocaWrapper>
    </WrongAnswerLayout>
  );
};

const WrongAnswerLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const MyVocaWrapper = styled.div`
  width: 1360px;
  margin: auto;
  background-color: gray;
`;

const MyVocaBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;
`;

// const WrongAnswerLayout = styled.div`
//   div {
//     width: 63px;
//     height: 26px;
//     margin-top: 7rem;
//     font-family: NotoSansKR;
//     font-size: 18px;
//     font-weight: 500;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: normal;
//     letter-spacing: -1.26px;
//     text-align: left;
//     color: #000;
//   }
// `;
export default WrongAnswer;
