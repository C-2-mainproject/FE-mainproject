import styled from "styled-components";
import { main_word_guide } from "../images";

const MainGuide = () => {
  return (
    <MainGuideLayout>
      <img src={main_word_guide} alt="main_word_guide" />
    </MainGuideLayout>
  );
};

const MainGuideLayout = styled.div`
  margin-top: -240px;

  img {
    display: block;
    width: 100%;
  }
`;

export default MainGuide;
