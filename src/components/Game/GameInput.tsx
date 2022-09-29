import { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";

type GameInputProps = {
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
};

const GameInput = ({ setMessage, sendMessage }: GameInputProps) => {
  const [text, setText] = useState<string>("");
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
    setText(event.target.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
      setText("");
    }
  };

  return (
    <GameInputLayout>
      <input
        value={text}
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
  background: #00b4db;

  input {
    width: 450px;
    border: none;
    outline: none;
    background: #00b4db;
  }
  input::placeholder {
    color: #ffffff;
  }
  button {
    color: #ffffff;
  }
`;
export default GameInput;
