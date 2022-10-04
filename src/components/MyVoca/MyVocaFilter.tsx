import { useState, MouseEvent } from "react";
import styled from "styled-components";
import { MyVocaList } from "../../components";
import { filter } from "../../images";
import CustomFilter from "../CustomFilter";
import WrongAnswer from "./WrongAnswer";

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

type IndexProps = {
  index: number;
};
const MyVocaFilter = ({ index }: IndexProps) => {
  const [targetId, setTargetId] = useState<string>("전체보기");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onFilterHandler = (event: MouseEvent<HTMLSpanElement>) => {
    const eventTarget = event.target as HTMLSpanElement;

    if (eventTarget.id === "전체보기") {
      setActiveIndex(0);
    } else if (eventTarget.id === "나의 단어장") {
      setActiveIndex(1);
    } else if (eventTarget.id === "좋아요") {
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
      {index === 0 ? (
        <>
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
                id="나의 단어장"
              >
                나의 단어장
              </MenuSpan>
              <MenuSpan
                className={activeIndex === 2 ? "active" : ""}
                onClick={onFilterHandler}
                id="좋아요"
              >
                좋아요
              </MenuSpan>
            </div>
            <div>
              <FilterSpan>
                필터
                <img src={filter} alt="filter" />
              </FilterSpan>

              <DropDownButton>
                <CustomFilter
                  id="카테고리"
                  props={category_list}
                  setTargetId={setTargetId}
                />
              </DropDownButton>
              <DropDownButton>
                <CustomFilter
                  id="공개"
                  props={shared_list}
                  setTargetId={setTargetId}
                />
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
          <MyVocaList targetId={targetId} />
        </>
      ) : (
        <>
          <WrongAnswerLayout>
            <div>
              <MenuSpan
                className={activeIndex === 0 ? "active" : ""}
                onClick={onFilterHandler}
                id="전체보기"
              >
                전체보기
              </MenuSpan>
            </div>
            <WrongAnswer targetId="오답노트" />
          </WrongAnswerLayout>
        </>
      )}
    </div>
  );
};

const MyVocaFilterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  align-items: center;
`;

const WrongAnswerLayout = styled.div`
  margin-top: 7rem;
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
  margin-left: 2rem;
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
export default MyVocaFilter;
