import styled from "styled-components";

const quiz_list = ["Apple", "Banana", "Tree", "Star", "Fruit", "Bag"];

const Quiz = () => {
  return (
    <QuizLayout>
      <div>
        <h1>{quiz_list[0]}</h1>
      </div>
    </QuizLayout>
  );
};

const QuizLayout = styled.div`
  height: 200px;
  border: 10px solid green;
  text-align: center;

  h1 {
    font-size: 80px;
  }
`;
export default Quiz;
