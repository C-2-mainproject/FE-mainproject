import { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";

type GameInputProps = {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
};

const GameInput = ({ setMessage, sendMessage }: GameInputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <GameInputLayout>
      <input
        placeholder="답을 입력하세요"
        onChange={onChangeHandler}
        onKeyPress={onKeyDownHandler}
      />
      <button>전송</button>
    </GameInputLayout>
  );
};

const GameInputLayout = styled.div`
  width: 530px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #dedede;

  input {
    width: 450px;
    border: none;
    outline: none;
    background-color: #dedede;
  }
`;
export default GameInput;
