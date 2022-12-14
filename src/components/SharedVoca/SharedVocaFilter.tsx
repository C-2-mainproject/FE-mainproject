import { useState, MouseEvent } from "react";
import styled from "styled-components";
import { filter, expand_more } from "../../images";
import { SharedVocaList } from "../index";

const category_list = [
  "토익",
  "토플",
  "텝스",
  "초등",
  "중등",
  "고등",
  "회화",
  "기타",
];

const shared_list = ["공개", "비공개"];

const SharedVocaFilter = () => {
  const [targetId, setTargetId] = useState<string>("전체보기");

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onFilterHandler = (event: MouseEvent<HTMLSpanElement>) => {
    const eventTarget = event.target as HTMLSpanElement;

    if (eventTarget.id === "전체보기") {
      setActiveIndex(0);
    } else if (eventTarget.id === "공유 단어장") {
      setActiveIndex(1);
    } else if (eventTarget.id === "공인 단어장") {
      setActiveIndex(2);
    } else if (eventTarget.id === "카테고리") {
      setActiveIndex(3);
    } else if (eventTarget.id === "공개") {
      setActiveIndex(4);
    } else if (eventTarget.id === "인기순") {
      setActiveIndex(5);
    }

    setTargetId(eventTarget.id);
  };

  return (
    <div>
      <MyVocaFilterLayout>
        <div>
          <MenuSpan
            className={activeIndex === 0 ? "active" : ""}
            onClick={onFilterHandler}
            id="전체보기"
          >
            전체보기
          </MenuSpan>
          <MenuSpan
            className={activeIndex === 1 ? "active" : ""}
            onClick={onFilterHandler}
            id="공유 단어장"
          >
            공유 단어장
          </MenuSpan>
          <MenuSpan
            className={activeIndex === 2 ? "active" : ""}
            onClick={onFilterHandler}
            id="공인 단어장"
          >
            공인 단어장
          </MenuSpan>
        </div>
        <div>
          <FilterSpan>
            필터
            <img src={filter} alt="filter" />
          </FilterSpan>

          <DropDownButton>
            <CategorySpan
              className={activeIndex === 3 ? "active" : ""}
              id="카테고리"
            >
              카테고리
              <img src={expand_more} alt="expand" />
            </CategorySpan>
            <ListContainer>
              <Ul>
                {category_list.map((value, index) => (
                  <Li key={index} onClick={onFilterHandler} id={value}>
                    {value}
                  </Li>
                ))}
              </Ul>
            </ListContainer>
          </DropDownButton>
          <DropDownButton>
            <CategorySpan
              className={activeIndex === 4 ? "active" : ""}
              id="공개"
            >
              공개
              <img src={expand_more} alt="expand" />
            </CategorySpan>
            <ListContainer>
              <Ul>
                {shared_list.map((value, index) => (
                  <Li key={index} onClick={onFilterHandler} id={value}>
                    {value}
                  </Li>
                ))}
              </Ul>
            </ListContainer>
          </DropDownButton>
          <DropDownButton>
            <CategorySpan
              className={activeIndex === 5 ? "active" : ""}
              onClick={onFilterHandler}
              id="인기순"
            >
              인기순
            </CategorySpan>
          </DropDownButton>
        </div>
      </MyVocaFilterLayout>
      <SharedVocaList targetId={targetId} />
    </div>
  );
};

const MyVocaFilterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  align-items: center;
`;

const MenuSpan = styled.span`
  margin-right: 2.5rem;
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

  &:hover {
    color: #00b4db;
  }
`;

const FilterSpan = styled.span`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #666;

  img {
    vertical-align: middle;
  }
`;

const CategorySpan = styled.span`
  margin-left: 3rem;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: left;
  color: #000;
  cursor: pointer;

  color: ${props => (props.className === "active" ? "#00b4db" : "#999")};

  img {
    vertical-align: middle;
  }
`;

const DropDownButton = styled.button`
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  position: relative;

  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  text-align: center;
  color: #000;
`;

const Li = styled.li`
  list-style: none;
  height: 2.5rem;
  background-color: white;
  padding: 10px;
  border-top: 1px solid;

  &:first-child {
    border-top: 0px;
  }

  &:hover {
    background-color: #d7d7d7;
  }
`;

const Ul = styled.ul`
  width: 8rem;
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: black;
  line-height: 22px;
`;

const ListContainer = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.bgColor};
  margin-top: 7px;
  position: absolute;
  display: none;

  ${DropDownButton}:hover & {
    display: block;
    z-index: 999;
  }

  ${DropDownButton}:active & {
    display: block;
    z-index: 999;
  }

  ${DropDownButton}:focus & {
    display: block;
    z-index: 999;
  }
`;

export default SharedVocaFilter;
