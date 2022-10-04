import styled from "styled-components";
import { game_guide } from "../../images";

const GameGuide = () => {
  return (
    <GameGuideLayout>
      <img src={game_guide} alt="game_guide" />
    </GameGuideLayout>
  );
};

const GameGuideLayout = styled.div`
  margin-top: -240px;

  img {
    display: block;
    width: 100%;
  }
`;

export default GameGuide;
