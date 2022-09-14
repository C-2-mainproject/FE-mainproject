import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardDetail = () => {
  const navigate = useNavigate();

  const editBoard = () => {
    navigate(`/board-edit/${1}`);
  };

  return (
    <BoardDetailLayout>
      <BoardDetailWrapper>
        <BoardDetailBox>
          <button onClick={editBoard}>수정하기</button>
        </BoardDetailBox>
      </BoardDetailWrapper>
    </BoardDetailLayout>
  );
};

const BoardDetailLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const BoardDetailWrapper = styled.div`
  width: 1360px;
  margin: auto;
  background-color: gray;
`;

const BoardDetailBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;
`;

export default BoardDetail;
