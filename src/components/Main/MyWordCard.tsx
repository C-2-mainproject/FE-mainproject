import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { WordStorage } from "../../types";

type Props = {
  wordStorage: WordStorage;
};

const MyWordCard = ({ wordStorage }: Props) => {
  const {
    id,
    category,
    title,
    lastTestAt,
    description,
    writer,
    createAt,
    likeCount,
  } = wordStorage;

  const navigate = useNavigate();

  const moveToDetail = (id: number) => {
    navigate(`/myvoca-detail/${id}`);
  };

  const moveToTestService = (id: number) => {
    navigate(`/wordtest/${id}`);
  };
  return (
    <CardContainer>
      <VocaCategory>
        <span>공개</span>
        <span>{category}</span>
      </VocaCategory>

      <CardTitle>
        <div>
          {title}
          ㄴㅇㄹㄴㅇㄹㅁㄴㅇㅁㄴㅇㅁㄴㄴㅇsdafasdfasdsdssdfaasdsdfasdfㄹㄴㅇㄹ
        </div>
        <div>
          {description}
          ㅁㄴㅇㅁㄴㄹ야ㅐㅔㅕㅁ갸ㅐ험게ㅐ햐ㅓ메개댜asdasdasdsa허메ㅑㅐasdfasdfasdfasdfasdfasㄹ어헴앨햐ㅓF
        </div>
      </CardTitle>

      <AboutCard>
        <span> 마지막 시험 &nbsp;&nbsp;{lastTestAt}</span>
        <div>작성 &nbsp;&nbsp;{writer}</div>
        <div>제작 &nbsp;&nbsp;{createAt}</div>
      </AboutCard>
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
