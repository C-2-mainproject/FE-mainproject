import styled from "styled-components";

type ValueProps = {
  wordValue: string;
  meaningValue: string[];
};

const WordItem = ({ wordValue, meaningValue }: ValueProps) => {
  // const deleteWord = () => {
  //   console.log("delete word");
  // };

  return (
    <WordItemLayout>
      <p>{wordValue}</p>
      <p>{meaningValue.join(", ")}</p>
      {/* <WordItemLayoutHover>
        <button onClick={deleteWord}>삭제하기</button>
      </WordItemLayoutHover> */}
    </WordItemLayout>
  );
};

const WordItemLayout = styled.div`
  position: relative;
  width: 290px;
  height: 300px;
  background-color: #e4f5fa;
  margin-right: 40px;
  margin-bottom: 40px;

  &:nth-child(4n) {
    margin-right: 0px;
  }

  p:nth-child(1) {
    margin-top: 105px;
    font-family: NotoSansKR;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
  }

  p:nth-child(2) {
    margin-top: 20px;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: center;
    color: #666;
  }
`;

// const WordItemLayoutHover = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   z-index: 9;
//   width: 290px;
//   height: 300px;
//   display: flex;
//   flex-direction: column-reverse;
//   font-size: 1.5rem;
//   font-weight: bold;
//   background-color: black;
//   opacity: 0;

//   :hover {
//     opacity: 0.5;
//   }

//   button {
//     width: 160px;
//     height: 52px;
//     margin: 0 65px 20px 65px;
//     color: white;
//     background-color: transparent;
//     border: 1px solid;
//   }
// `;
export default WordItem;
