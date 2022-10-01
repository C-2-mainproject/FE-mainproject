import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { apis } from "../../shared/api";
import ModalPortal from "../ModalPortal";

type ModalProps = {
  openAddWordModal: () => void;
};

const AddWordModal = ({ openAddWordModal }: ModalProps) => {
  const { id } = useParams();
  const [word, setWord] = useState<string[]>([]);
  const [mean, setMean] = useState<string[][]>([]);

  const [inputWord, setInputWord] = useState({
    words: "",
    meanings: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    setInputWord({
      ...inputWord,
      [id]: value,
    });
  };

  const makeWord = async () => {
    console.log(word, mean);
    const newId = Number(id);
    try {
      await apis
        .editWord(newId, {
          words: word,
          meanings: mean,
        })
        .then(data => console.log(data));
    } catch (error) {
      console.log(error);
    }
    openAddWordModal();
  };

  const addWordList = () => {
    if (inputWord.words && inputWord.meanings) {
      setWord([...word, inputWord.words]);
      setMean([...mean, inputWord.meanings.split(",")]);

      setInputWord({
        meanings: "",
        words: "",
      });
    }
  };

  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openAddWordModal}>X</CloseButton>
          <Contents>
            <Title>
              <h1>단어장의 기준이 되다</h1>
              <span>일단이와 함께하는 완전 단어 학습</span>
            </Title>
            <Form>
              <h1>영어단어 추가하기</h1>
            </Form>
            <AddArea>
              <div>
                <p>영어</p>
                <input
                  id="words"
                  placeholder="영어 단어를 입력해주세요"
                  value={inputWord.words}
                  onChange={onChangeHandler}
                />
              </div>
              <div>
                <p>의미 (뜻)</p>
                <input
                  id="meanings"
                  placeholder="한글로된 뜻을 입력해주세요"
                  value={inputWord.meanings}
                  onChange={onChangeHandler}
                />
              </div>
              <p>
                <span>
                  TIP! 의미(뜻)가(이) 여러개라면 콤마(,)를 사용하여
                  구분해주세요!
                </span>
              </p>
              <p>
                <span>
                  여러개의 단어를 추가하고 싶다면 추가 버튼을 눌러주세요! 👉🏻
                </span>
                <button onClick={addWordList}>추가</button>
              </p>
            </AddArea>

            <Button>
              <span onClick={makeWord}>단어 추가</span>
            </Button>
          </Contents>
        </ModalWrap>
      </Overlay>
    </ModalPortal>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 640px;
  height: fit-content;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
`;

const Title = styled.div`
  width: 480px;
  padding-bottom: 20px;
  border-bottom: 1px solid;

  h1 {
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2px;
    text-align: left;
    color: #000;
  }

  span {
    font-size: 36px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2px;
    text-align: left;
    color: #000;
  }
`;

const Form = styled.div`
  display: flex;
  h1 {
    margin-top: 20px;
    font-size: 36px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2.52px;
    text-align: left;
    color: #000;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.68px;
    text-align: left;
    color: #000;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.26px;
    text-align: left;
    color: #dbdbdb;
  }
`;
const Contents = styled.div`
  margin: 50px 30px;
  padding: 50px;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }
`;

const AddArea = styled.div`
  p {
    margin-top: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
    margin-bottom: 10px;
  }

  input {
    width: 480px;
    height: 60px;
    border: 0px;
    border-bottom: 1px solid;
    background: #ffffff;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #000000;
  }

  button {
    width: 80px;
    height: 40px;
    margin: auto;
    margin-left: 10px;
    background-color: black;
    color: white;

    &:hover {
      font-weight: 700;
    }
  }
`;
const Button = styled.button`
  width: 480px;
  height: 60px;
  padding: 17px 192px;
  margin-top: 60px;
  background-color: #d4d4d4;

  span {
    width: 96px;
    height: 26px;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #fff;
  }

  &:hover {
    background: linear-gradient(to bottom right, #00b4db, #0083b0);
  }
`;
export default AddWordModal;
