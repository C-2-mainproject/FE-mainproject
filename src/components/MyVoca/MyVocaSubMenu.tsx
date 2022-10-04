import { ChangeEvent, useState, KeyboardEvent } from "react";
import styled from "styled-components";
import { MyVocaFilter } from "../../components";
import { add, search } from "../../images";
import { __searchWordStorage } from "../../redux/modules/wordStorageSlice";
import { useAppDispatch } from "../../shared/reduxHooks";
import AddVocaModal from "./UpdateVocaModal";

const MyVocaSubMenu = () => {
  const dispatch = useAppDispatch();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [text, setText] = useState<string>("");

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  const addWordStorage = () => {
    setIsOpenModal(!isOpenModal);
  };

  // const guide = () => {
  //   console.log("guide!!");
  // };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(__searchWordStorage(text));
      setText("");
    }
  };

  return (
    <div>
      <MyVocaSubMenuLayout>
        <h1>{activeIndex === 0 ? "나의 단어장" : "오답 노트"}</h1>
        <Span
          className={activeIndex === 0 ? "active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          내 단어장 관리
        </Span>
        <Span
          className={activeIndex === 1 ? "active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          오답 노트
        </Span>
        {activeIndex === 0 ? (
          <SearchInput
            placeholder="검색어를 입력해주세요"
            value={text}
            onChange={onChangeHandler}
            onKeyPress={onKeyDownHandler}
          />
        ) : (
          <></>
        )}

        {activeIndex === 0 ? (
          <>
            <AddButton onClick={addWordStorage}>
              <span>새 단어장 추가</span>
            </AddButton>
            {isOpenModal && (
              <AddVocaModal id="add" openAddStorageModal={addWordStorage} />
            )}
          </>
        ) : (
          <>
            {/* <GuideButton onClick={guide}>
              <span>오답 노트 가이드</span>
            </GuideButton>
            {isOpenModal && (
              <AddVocaModal
                id="wrongAnswer"
                openAddStorageModal={addWordStorage}
              />
            )} */}
          </>
        )}
      </MyVocaSubMenuLayout>

      {activeIndex === 0 ? (
        <MyVocaFilter index={0} />
      ) : (
        <MyVocaFilter index={1} />
      )}
    </div>
  );
};

const MyVocaSubMenuLayout = styled.div`
  display: flex;
  align-items: center;

  h1 {
    width: 13rem;
    margin-right: 5rem;
    font-family: NotoSansKR;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.1em;
    text-align: left;
    color: #000;
  }
`;

const Span = styled.span`
  margin-right: 4rem;
  font-family: NotoSansKR;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.15em;
  text-align: left;
  cursor: pointer;

  color: ${props => (props.className === "active" ? "#00b4db" : "#999")};
  border-bottom: ${props => (props.className === "active" ? "1px solid" : "")};

  &:hover {
    color: #00b4db;
  }

  &:nth-child(2n + 1) {
    margin-right: 190px;
  }
`;

const SearchInput = styled.input`
  width: 360px;
  height: 40px;
  margin-right: 2rem;
  border: solid 1px #000;

  background-image: url(${search});
  background-position: right;
  background-repeat: no-repeat;
`;

const AddButton = styled.button`
  width: 182px;
  height: 40px;
  background-color: #1f1f1f;

  background-image: url(${add});
  background-position: left;
  background-repeat: no-repeat;

  span {
    flex-grow: 0;
    margin: 0 0 0 14px;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #fff;

    &:hover {
      font-weight: 700;
    }
  }
`;

// const GuideButton = styled.button`
//   width: 182px;
//   height: 40px;
//   background-color: #1f1f1f;

//   span {
//     flex-grow: 0;
//     font-family: NotoSansKR;
//     font-size: 16px;
//     font-weight: 500;
//     font-stretch: normal;
//     font-style: normal;
//     line-height: normal;
//     letter-spacing: -1px;
//     text-align: left;
//     color: #fff;
//   }
// `;
export default MyVocaSubMenu;
