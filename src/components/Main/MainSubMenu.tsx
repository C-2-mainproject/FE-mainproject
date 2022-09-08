import React from "react";
import styled from "styled-components";
const MainSubMenu = () => {
  return (
    <>
      <SubMenu>서브메뉴</SubMenu>
    </>
  );
};

export default MainSubMenu;

const SubMenu = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 220px;
  margin: 0 auto;
  background-color: #e7e7e7;
  margin-top: -170px;
`;
