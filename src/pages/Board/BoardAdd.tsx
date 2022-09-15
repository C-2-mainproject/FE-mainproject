import styled from "styled-components";

const BoardAdd = () => {
  return (
    <BoardAddLayout>
      <BoardAddWrapper>
        <BoardAddBox>BoardAdd</BoardAddBox>
      </BoardAddWrapper>
    </BoardAddLayout>
  );
};

const BoardAddLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const BoardAddWrapper = styled.div`
  width: 1360px;
  margin: auto;
  background-color: gray;
`;

const BoardAddBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;
`;

export default BoardAdd;
