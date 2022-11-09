import styled from "styled-components";
import ModalPortal from "../Common/ModalPortal";
import { useState, ChangeEvent } from "react";
import { CustomSelect } from "../Common/index";
import { apis } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";
import { category_list, shared_list } from "../../types/MyVocaTypes";

type ModalProps = {
  openUpdateWordStorageModal: () => void;
  id: string;
};

const UpdateVocaModal = ({ openUpdateWordStorageModal, id }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { detailWordStorage } = useAppSelector(state => state.wordStorageSlice);

  const [addWordStorageInput, setAddWordStorageInput] = useState(
    id === "add"
      ? {
          title: "",
          description: "",
        }
      : {
          title: detailWordStorage.title,
          description: detailWordStorage.description,
        },
  );

  const [addWordStorageSelect, setAddWordStorageSelect] = useState({
    category: "",
    status: "",
  });

  const { title, description } = addWordStorageInput;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;

    setAddWordStorageInput({
      ...addWordStorageInput,
      [id]: value,
    });
  };

  const addNewWordStorage = async () => {
    let statusBool = false;

    if (addWordStorageSelect.status === "공개") {
      statusBool = true;
    }

    try {
      if (id === "add") {
        await apis.addWordStorage({
          title: addWordStorageInput.title,
          category: addWordStorageSelect.category,
          description: addWordStorageInput.description,
          status: statusBool,
        });
      } else {
        await apis.editWordStorage(detailWordStorage.id, {
          title: addWordStorageInput.title,
          category: addWordStorageSelect.category,
          description: addWordStorageInput.description,
          status: statusBool,
        });
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    dispatch(__getWordStorageList());
    openUpdateWordStorageModal();
  };

  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openUpdateWordStorageModal}>X</CloseButton>
          <Contents>
            <Title>
              <h1>단어장의 기준이 되다</h1>
              <span>일단이와 함께하는 완전 단어 학습</span>
            </Title>
            <Form>
              {id === "add" ? (
                <h1>새 단어장 만들기</h1>
              ) : (
                <h1>단어장 수정하기</h1>
              )}
              <div>
                <VocaName>
                  <p>단어장 제목</p>
                  <input
                    id="title"
                    placeholder="단어장 이름을 입력해주세요"
                    value={title}
                    onChange={onChangeHandler}
                    maxLength={20}
                  />
                </VocaName>
                <VocaInfo>
                  <Div>
                    <p>카테고리</p>
                    <CustomSelect
                      props={category_list}
                      addWordStorageSelect={addWordStorageSelect}
                      setAddWordStorageSelect={setAddWordStorageSelect}
                    />
                  </Div>
                  <Div>
                    <p>공개 범위</p>
                    <CustomSelect
                      props={shared_list}
                      addWordStorageSelect={addWordStorageSelect}
                      setAddWordStorageSelect={setAddWordStorageSelect}
                    />
                  </Div>
                </VocaInfo>
                <VocaInput>
                  <p>단어장 설명</p>
                  <input
                    placeholder="단어장을 소개해주세요"
                    id="description"
                    value={description}
                    maxLength={50}
                    onChange={onChangeHandler}
                  />
                </VocaInput>
                <Button onClick={addNewWordStorage}>
                  <span>
                    {id === "add" ? "새 단어장 추가" : "단어장 수정하기"}
                  </span>
                </Button>
              </div>
            </Form>
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
  z-index: 999;
`;

const ModalWrap = styled.div`
  width: 37.5rem;
  height: 50rem;
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

const Contents = styled.div`
  padding: 3.12rem;
`;

const Title = styled.div`
  width: 30rem;
  padding-bottom: 10px;
  border-bottom: 1px solid;

  h1 {
    font-size: 1.87rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1em;
    text-align: left;
    color: #000;
  }

  span {
    font-size: 1.87rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1em;
    text-align: left;
    color: #000;
  }
`;

const Form = styled.div`
  h1 {
    margin-top: 1.25rem;
    font-size: 1.87rem;
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
    letter-spacing: -0.08rem;
    text-align: left;
    color: #dbdbdb;
  }
`;

const VocaName = styled.div`
  margin-top: 1.25rem;

  input {
    width: 30rem;
    height: 3.75rem;
    margin-right: 1.25rem;

    outline: 0;
    border-width: 0 0 1px;
  }

  button {
    width: 5rem;
    height: 3.6rem;
    background-color: #000;
  }
`;
const VocaInfo = styled.div`
  display: flex;
  margin-top: 1.87rem;
`;

const Div = styled.div`
  margin-right: 1.25rem;

  width: 14.3rem;
  height: 3.75rem;

  &:nth-child(2n) {
    margin-right: 0px;
  }

  p {
    height: 2.2rem;
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
  }

  span {
    width: 9.9rem;
    height: 1.62rem;
    margin-right: 1.37rem;
    font-size: 1.12rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
    color: #dbdbdb;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 0.62rem;
    padding-bottom: 0.62rem;
    border-bottom: 1px solid;
  }

  select {
    width: 14.3rem;
    height: 3.1rem;
    border: none;
  }
`;

const VocaInput = styled.div`
  width: 30rem;
  margin-top: 3.75rem;

  input {
    margin-top: 0.62rem;
    width: 30rem;
    height: 11rem;
  }
`;

const Button = styled.button`
  width: 30rem;
  height: 3.75rem;
  padding: 1rem 12rem;
  margin-top: 1.5rem;
  background-color: #d4d4d4;

  span {
    width: 6rem;
    height: 1.6rem;
    font-size: 1rem;
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

export default UpdateVocaModal;
