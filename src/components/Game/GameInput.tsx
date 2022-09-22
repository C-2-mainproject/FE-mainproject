import { ChangeEvent } from "react";
import styled from "styled-components";

type GameInputProps = {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: React.MouseEventHandler<HTMLButtonElement>;
};

const GameInput = ({ setMessage, sendMessage }: GameInputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <GameInputLayout>
      <input placeholder="답을 입력하세요" onChange={onChangeHandler} />
      <button onClick={sendMessage}>입력</button>
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
