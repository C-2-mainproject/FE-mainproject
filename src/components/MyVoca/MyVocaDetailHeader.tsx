import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { __getDetailWordStorage } from "../../redux/modules/wordStorageSlice";
import { useAppDispatch } from "../../shared/reduxHooks";
import { AddWordModal, UpdateVocaModal } from "../MyVoca/index";

const MyVocaDetailHeader = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [isAddOpenModal, setIsAddOpenModal] = useState(false);
  const [isEditOpenModal, setIsEditOpenModal] = useState(false);

  const addWord = () => {
    setIsAddOpenModal(!isAddOpenModal);
  };

  const openUpdateWordStorageModal = () => {
    setIsEditable(!isEditable);
    setIsEditOpenModal(!isEditOpenModal);

    getDetailWordStorage();
  };

  const getDetailWordStorage = () => {
    dispatch(__getDetailWordStorage(String(id)));
  };

  useEffect(() => {
    getDetailWordStorage();
  }, []);

  return (
    <MyVocaDetailHeaderLayout>
      <p>지금 보고 있는 단어장</p>
      <div>
        <Button onClick={addWord}>
          <span>단어 추가하기</span>
        </Button>
        {isAddOpenModal && <AddWordModal openAddWordModal={addWord} />}
        <Button onClick={openUpdateWordStorageModal}>
          <span>단어장 편집하기</span>
        </Button>
        {isEditOpenModal && (
          <UpdateVocaModal
            id="edit"
            openUpdateWordStorageModal={openUpdateWordStorageModal}
          />
        )}
      </div>
    </MyVocaDetailHeaderLayout>
  );
};

const MyVocaDetailHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    width: 9.2rem;
    height: 1.6rem;
    font-family: NotoSansKR;
    font-size: 1.12rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15rem;
    text-align: left;
    color: #000;
  }

  button {
    width: 11rem;
    height: 2.5rem;
    margin-bottom: 1.25rem;
    margin-left: 1.25rem;
    background-color: #1f1f1f;
  }

  span {
    width: 6.2rem;
    height: 1.4rem;
    font-family: NotoSansKR;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
    color: #fff;
  }
`;

const Button = styled.button`
  width: 18rem;
  height: 18.75rem;
  background-color: #f3f3f3;

  span {
    &:hover {
      font-weight: 700;
    }
  }
`;
export default MyVocaDetailHeader;
