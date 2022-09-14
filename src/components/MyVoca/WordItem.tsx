import styled from "styled-components";

const WordItem = () => {
  return (
    <WordItemLayout>
      <p>Capability</p>
      <span>능력,가능성,재능</span>
    </WordItemLayout>
  );
};

const WordItemLayout = styled.div`
  width: 290px;
  height: 300px;
  background-color: #f3f3f3;
  margin-right: 40px;
  margin-bottom: 40px;

  &:nth-child(4n) {
    margin-right: 0px;
  }

  p {
    width: 137px;
    height: 43px;
    font-family: NotoSansKR;
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }

  span {
    width: 187px;
    height: 26px;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #666;
  }
`;
export default WordItem;
