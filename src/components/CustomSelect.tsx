import { useState, MouseEvent } from "react";
import styled from "styled-components";
import { IFilterList, IAddWordStorageSelect } from "../types/types";

type SelectProps = {
  props: IFilterList[];
  addWordStorageSelect: IAddWordStorageSelect;
  setAddWordStorageSelect: React.Dispatch<
    React.SetStateAction<IAddWordStorageSelect>
  >;
};

const CustomSelect = ({
  props,
  addWordStorageSelect,
  setAddWordStorageSelect,
}: SelectProps) => {
  let initValue = "";
  if (props[0].filterCategory === "카테고리") {
    initValue = "카테고리를 선택하세요";
  } else if (props[0].filterCategory === "공개") {
    initValue = "공개 여부를 선택하세요";
  } else if (props[0].filterCategory === "나이") {
    initValue = "나이를 선택하세요";
  } else if (props[0].filterCategory === "성별") {
    initValue = "성별을 선택하세요";
  }

  const [currentValue, setCurrentValue] = useState(initValue);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (event: MouseEvent<HTMLLIElement>) => {
    const newTarget = event.target as HTMLLIElement;

    if (newTarget.id === "카테고리") {
      setAddWordStorageSelect({
        ...addWordStorageSelect,
        category: newTarget.innerText,
      });
    } else if (newTarget.id === "공개") {
      setAddWordStorageSelect({
        ...addWordStorageSelect,
        status: newTarget.innerText,
      });
    } else if (newTarget.id === "나이") {
      setAddWordStorageSelect({
        ...addWordStorageSelect,
        category: newTarget.innerText,
      });
    } else if (newTarget.id === "성별") {
      setAddWordStorageSelect({
        ...addWordStorageSelect,
        status: newTarget.innerText,
      });
    }
    setCurrentValue(newTarget.innerText);
    setShowOptions(false);
  };

  return (
    <SelectBox
      onMouseLeave={() => setShowOptions(false)}
      onMouseOver={() => setShowOptions(true)}
    >
      <Label>{currentValue}</Label>
      <SelectOptions className={showOptions ? "show" : "hide"}>
        {props.map((data, index) => (
          <Option
            id={data.filterCategory}
            key={index}
            value={data.value}
            onClick={handleOnChangeSelectValue}
          >
            {data.value}
          </Option>
        ))}
      </SelectOptions>
    </SelectBox>
  );
};

const SelectBox = styled.div`
  position: relative;
  width: 230px;
  padding: 8px;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;

  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  margin-right: 20px;
  text-align: center;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 40px;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: ${props => (props.className === "show" ? "none" : "0")};
  padding: 0;
  background-color: white;
  color: black;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  border: 1px solid;
  text-align: center;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: #595959;
  }
`;
export default CustomSelect;
