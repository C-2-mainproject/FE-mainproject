import styled from "styled-components";

const GameInput = () => {
  return (
    <GameInputLayout>
      <input placeholder="답을 입력하세요" />
      <button>입력</button>
    </GameInputLayout>
  );
};

const GameInputLayout = styled.div`
  height: 100px;
  border: 10px solid yellow;

  input {
    width: 900px;
    height: 70px;
    border: 10px solid;
    margin-right: 50px;
  }

  button {
    width: 300px;
    height: 70px;
    color: white;
    background-color: black;
  }
`;
export default GameInput;
