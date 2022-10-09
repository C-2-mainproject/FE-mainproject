import { useState, MouseEvent } from "react";
import styled from "styled-components";
import { IFilterList } from "../../types/types";

type SelectProps = {
  id: string;
  props: IFilterList[];
  setTargetId: React.Dispatch<React.SetStateAction<string>>;
};

const CustomFilter = ({ id, props, setTargetId }: SelectProps) => {
  let initValue = "";
  if (id === "카테고리") {
    initValue = "카테고리";
  } else if (id === "공개") {
    initValue = "공개";
  }

  const [currentValue, setCurrentValue] = useState(initValue);
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (event: MouseEvent<HTMLLIElement>) => {
    const newTarget = event.target as HTMLLIElement;
    setTargetId(newTarget.innerText);
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
  width: 100px;
  padding: 10px;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;

  z-index: 999;

  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;

  color: #999;

  &::before {
    content: "⌵";
    position: absolute;
    top: 1px;
    right: 8px;
    font-size: 20px;
  }
`;

const Label = styled.label`
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
export default CustomFilter;
