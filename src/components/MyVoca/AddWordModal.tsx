import { ChangeEvent, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../../shared/reduxHooks";
import { addWord } from "../../redux/modules/wordStorageSlice";
import { ModalPortal } from "../Common/index";
import { apis } from "../../shared/api";
import { ModalProps } from "../../types/MyVocaTypes";

const AddWordModal = ({ openAddWordModal }: ModalProps) => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const [word, setWord] = useState<string[]>([]);
  const [mean, setMean] = useState<string[][]>([]);
  const [number, setNumber] = useState<number>(0);
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
    const newId = Number(id);
    try {
      await apis
        .editWord(newId, {
          words: word,
          meanings: mean,
        })
        .then(data => {
          console.log(data);

          dispatch(
            addWord({
              words: word,
              meanings: mean,
            }),
          );
          openAddWordModal();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addWordList = () => {
    setNumber(number => number + 1);

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
              <span>추가된 단어는 {number} 개 입니다.</span>
            </AddArea>

            <Button onClick={makeWord}>
              <span>단어 추가 완료</span>
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
  width: 37.5rem;
  height: 46.8rem;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem;
  cursor: pointer;
`;

const Title = styled.div`
  width: 30rem;
  padding-bottom: 10px;
  border-bottom: 1px solid;

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1em;
    text-align: left;
    color: #000;
  }

  span {
    font-size: 1.8rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1rem;
    text-align: left;
    color: #000;
  }
`;

const Form = styled.div`
  display: flex;
  h1 {
    margin-top: 1.25rem;
    font-size: 1.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15rem;
    text-align: left;
    color: #000;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1rem;
    text-align: left;
    color: #000;
  }

  span {
    font-size: 1.12rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.01rem;
    text-align: left;
    color: #dbdbdb;
  }
`;

const Contents = styled.div`
  padding: 3.12rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

const AddArea = styled.div`
  p {
    margin-top: 1.25rem;
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #000000;
  }

  input {
    width: 30rem;
    height: 3.75rem;
    border: 0px;
    border-bottom: 1px solid;
    background: #ffffff;
  }

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.4rem;
    color: #000000;
  }

  button {
    width: 5.25rem;
    height: 2.5rem;
    margin: auto;
    margin-left: 0.6rem;
    background-color: black;
    color: white;

    &:hover {
      font-weight: 700;
    }
  }
`;

const Button = styled.button`
  width: 30rem;
  height: 3.75rem;
  padding: 1rem 12rem;
  margin-top: 3.75rem;
  background-color: #d4d4d4;

  span {
    width: 6rem;
    height: 1.6rem;
    font-family: NotoSansKR;
    font-size: 1.1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
    color: #fff;
  }

  &:hover {
    background: linear-gradient(to bottom right, #00b4db, #0083b0);
  }
`;
export default AddWordModal;
