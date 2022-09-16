import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Board = () => {
  const navigate = useNavigate();

  const moveToDetail = () => {
    navigate(`/board-detail/${1}`);
  };

  const addBoard = () => {
    navigate("/board-add");
  };

  return (
    <BoardLayout>
      <BoardWrapper>
        <BoardBox>
          <button onClick={moveToDetail}>게시글 상세보기</button>
          <button onClick={addBoard}>게시글 추가하기</button>
        </BoardBox>
      </BoardWrapper>
    </BoardLayout>
  );
};

const BoardLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const BoardWrapper = styled.div`
  width: 1360px;
  margin: auto;
  background-color: gray;
`;

const BoardBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;
`;

export default Board;
