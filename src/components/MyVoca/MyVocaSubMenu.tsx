import { useState } from "react";
import styled from "styled-components";
import { MyVocaFilter } from "../../components/index";
import { add, search } from "../../images/index";

const MyVocaSubMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const tabClickHandler = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <MyVocaSubMenuLayout>
        <h1>나의 단어장</h1>
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
        <SearchInput placeholder="검색어를 입력해주세요" />
        <AddButton>
          <span>새 단어장 추가</span>
        </AddButton>
      </MyVocaSubMenuLayout>

      {activeIndex === 0 ? (
        <MyVocaFilter />
      ) : (
        <div>
          <h1>오답 노트입니다!!!</h1>
        </div>
      )}
    </div>
  );
};

const MyVocaSubMenuLayout = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 5rem;
    font-family: NotoSansKR;
    font-size: 48px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -2px;
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
  letter-spacing: -1px;
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
  }
`;
export default MyVocaSubMenu;
