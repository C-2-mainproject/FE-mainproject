import styled from "styled-components";
import { ChatBox, GameInput, Quiz } from "../../components";

const PlayGame = () => {
  return (
    <PlayGameLayout>
      <PlayGameWrapper>
        <PlayGameBox>
          <Quiz />
          <ChatBox />
          <GameInput />
        </PlayGameBox>
      </PlayGameWrapper>
    </PlayGameLayout>
  );
};

const PlayGameLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const PlayGameWrapper = styled.div`
  width: 1360px;
  margin: auto;
  background-color: gray;
`;

const PlayGameBox = styled.div`
  width: 1280px;
  margin: auto;
  background-color: white;
`;

export default PlayGame;
