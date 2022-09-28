import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IWordStorage } from "../../types/types";

type Props = {
  wordStorage: IWordStorage;
};

const MyWordCard = ({ wordStorage }: Props) => {
  console.log(wordStorage);
  const {
    id,
    category,
    title,
    lastTestAt,
    description,
    createAt,
    // likeCount,
  } = wordStorage;
  const navigate = useNavigate();

  const moveToDetail = (id: number) => {
    navigate(`/myvoca-detail/${id}`);
  };

  return (
    <CardContainer>
      <VocaCategory>
        <span>{wordStorage.public ? "공개" : "비공개"}</span>
        <span>{category}</span>
      </VocaCategory>

      <CardTitle>
        <div>{title}</div>
        <div>{description}</div>
      </CardTitle>

      <AboutCard>
        <span> 마지막 시험 &nbsp;&nbsp;{lastTestAt}</span>
        {/* <div>작성 &nbsp;&nbsp;{writer}</div> */}
        <div>제작 &nbsp;&nbsp;{createAt.split("T")[0]}</div>
      </AboutCard>
      <article className="disable">
        <button onClick={() => moveToDetail(id)}>자세히 보기</button>
        <button>시험 보기 </button>
      </article>
    </CardContainer>
  );
};

export default MyWordCard;

const CardContainer = styled.article`
  background-color: #e4f5fa;
  width: 220px;
  height: 400px;
  margin: 0 auto;
  padding: 20px;
  button {
    display: none;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.8);

    button {
      color: #fff;
      display: flex;
      margin: 0 auto;
      padding: 16px 20px;
      width: 160px;
      font-size: 18px;
      font-weight: 600;
      border: 1px solid #fff;
      justify-content: center;
      position: relative;
      bottom: 100px;
      margin-bottom: 20px;
      &:hover {
        background-color: black;
      }
    }
  }
`;
const VocaCategory = styled.div`
  width: 100%;
  justify-content: space-between;

  span {
    &:first-child {
      position: relative;
      top: -3px;
      color: #0083b0;
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #0083b0;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    &:last-child {
      position: relative;
      font-size: 24px;
      bottom: 19px;
      right: -19.5px;
      background-color: #00b4db;
      padding: 3px 18px;
      color: #fff;
      font-weight: 500;
    }
  }
`;

const CardTitle = styled.div`
  flex-direction: column;
  height: 200px;
  width: 100%;
  div {
    line-height: 35px;
    font-size: 18px;
    letter-spacing: -0.07em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    &:first-child {
      margin-top: 20px;
      -webkit-line-clamp: 1;
      font-size: 20px;
      font-weight: 500;
      font-size: 24px;
    }
  }
`;

const AboutCard = styled.div`
  position: relative;
  flex-direction: column;
  color: #666;
  bottom: -10px;
  line-height: 23px;
  letter-spacing: -0.07em;
  div {
    margin-top: 22px;
    &:last-child {
      margin-top: 10px;
    }
  }
  span {
    position: relative;
    margin-bottom: 10px;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: #666;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;
