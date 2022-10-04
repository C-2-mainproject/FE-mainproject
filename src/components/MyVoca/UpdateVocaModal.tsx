import styled from "styled-components";
import ModalPortal from "../ModalPortal";
import { useState, ChangeEvent } from "react";
import CustomSelect from "../CustomSelect";
import { apis } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";

type ModalProps = {
  openAddStorageModal: () => void;
  id: string;
};

const category_list = [
  { filterCategory: "카테고리", value: "토익" },
  { filterCategory: "카테고리", value: "토플" },
  { filterCategory: "카테고리", value: "텝스" },
  { filterCategory: "카테고리", value: "초등" },
  { filterCategory: "카테고리", value: "중등" },
  { filterCategory: "카테고리", value: "고등" },
  { filterCategory: "카테고리", value: "회화" },
  { filterCategory: "카테고리", value: "기타" },
];

const shared_list = [
  { filterCategory: "공개", value: "공개" },
  { filterCategory: "공개", value: "비공개" },
];

const UpdateVocaModal = ({ openAddStorageModal, id }: ModalProps) => {
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
    openAddStorageModal();
  };

  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={openAddStorageModal}>X</CloseButton>
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
                    onChange={onChangeHandler}
                  />
                </VocaInput>
                <Button>
                  <span onClick={addNewWordStorage}>
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
  width: 600px;
  height: 800px;
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

const Contents = styled.div`
  padding: 50px;
`;

const Title = styled.div`
  width: 480px;
  padding-bottom: 10px;
  border-bottom: 1px solid;

  h1 {
    font-size: 30px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1em;
    text-align: left;
    color: #000;
  }

  span {
    font-size: 30px;
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
    margin-top: 20px;
    font-size: 30px;
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

const VocaName = styled.div`
  margin-top: 20px;

  input {
    width: 480px;
    height: 60px;
    margin-right: 20px;

    outline: 0;
    border-width: 0 0 1px;
  }

  button {
    width: 80px;
    height: 58px;
    background-color: #000;
  }
`;
const VocaInfo = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Div = styled.div`
  margin-right: 20px;

  width: 230px;
  height: 60px;

  &:nth-child(2n) {
    margin-right: 0px;
  }

  p {
    height: 35px;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
  }

  span {
    width: 158px;
    height: 26px;
    margin-right: 22px;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #dbdbdb;
  }

  div {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid;
  }

  select {
    width: 230px;
    height: 50px;
    border: none;
  }
`;

const VocaInput = styled.div`
  width: 480px;
  margin-top: 60px;

  input {
    margin-top: 10px;
    width: 480px;
    height: 180px;
  }
`;

const Button = styled.button`
  width: 480px;
  height: 60px;
  padding: 17px 192px;
  margin-top: 25px;
  background-color: #d4d4d4;

  span {
    width: 96px;
    height: 26px;
    font-size: 16px;
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

export default UpdateVocaModal;
