import React from "react";
import styled from "styled-components";
const MyWordCard = ({ props }: { props: any }) => {
  return (
    <CardContainer>
      <span>카테고리</span>
      <div>
        <h3>내신단어</h3>
        <p>단어장 설명란</p>
      </div>
      <div>
        <span>제작 일단이</span>
      </div>
    </CardContainer>
  );
};

export default MyWordCard;

const CardContainer = styled.article`
  background-color: #e7e7e7;
  width: 220px;
  height: 400px;
`;
