import styled from "styled-components";
import { ChatSection, QuizInfoSection } from "../../components";

const PlayGame = () => {
  return (
    <PlayGameLayout>
      <PlayGameWrapper>
        <PlayGameBox>
          <QuizInfoSection />
          <ChatSection />
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
`;

const PlayGameBox = styled.div`
  width: 1280px;
  margin: auto;
  display: flex;
`;

export default PlayGame;
