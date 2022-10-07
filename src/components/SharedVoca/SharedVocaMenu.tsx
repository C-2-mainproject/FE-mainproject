import styled from "styled-components";
import { search, add } from "../../images";
import { SharedVocaFilter } from "../index";

const SharedVocaSubMenu = () => {
  return (
    <div>
      <SharedVocaSubMenuLayout>
        <h1>공유 단어장</h1>
        <SearchInput placeholder="검색어를 입력해주세요" />
        <AddButton>
          <span>새 단어장 추가</span>
        </AddButton>
      </SharedVocaSubMenuLayout>
      <SharedVocaFilter />
    </div>
  );
};

const SharedVocaSubMenuLayout = styled.div`
  display: flex;
  align-items: center;

  h1 {
    width: 13rem;
    margin-right: 31rem;
    font-family: NotoSansKR;
    font-size: 48px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -3px;
    text-align: left;
    color: #000;
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

export default SharedVocaSubMenu;
