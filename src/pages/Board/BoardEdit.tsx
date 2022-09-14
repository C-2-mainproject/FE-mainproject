import styled from "styled-components";

const BoardEdit = () => {
  return (
    <BoardEditLayout>
      <BoardEditaWrapper>
        <BoardEditBox>BoardEdit</BoardEditBox>
      </BoardEditaWrapper>
    </BoardEditLayout>
  );
};

const BoardEditLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const BoardEditaWrapper = styled.div`
  width: 1360px;
  margin: auto;
  background-color: gray;
`;

const BoardEditBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;
`;

export default BoardEdit;
