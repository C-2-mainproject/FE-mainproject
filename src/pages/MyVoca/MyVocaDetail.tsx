import styled from "styled-components";
import { MyVocaItem, WordList } from "../../components/MyVoca/index";
import MyVocaDetailHeader from "../../components/MyVoca/MyVocaDetailHeader";
import MyVocaDetailInfo from "../../components/MyVoca/MyVocaDetailInfo";
import { useAppSelector } from "../../shared/reduxHooks";
import { IWordStorage } from "../../types/MyVocaTypes";

const MyVocaDetail = () => {
  const { detailWordStorage } = useAppSelector(state => state.wordStorageSlice);

  return (
    <MyVocaDetailLayout>
      <MyVocaDetailWrapper>
        <MyVocaDetailBox>
          <div>
            <MyVocaDetailHeader />
            <Contents>
              <MyVocaItem wordStorage={detailWordStorage as IWordStorage} />
              <MyVocaDetailInfo />
            </Contents>
          </div>
          <WordList />
        </MyVocaDetailBox>
      </MyVocaDetailWrapper>
    </MyVocaDetailLayout>
  );
};

const MyVocaDetailLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const MyVocaDetailWrapper = styled.div`
  width: 1360px;
  margin: auto;
`;

const MyVocaDetailBox = styled.div`
  width: 1280px;
  margin: auto;
`;

const Contents = styled.div`
  display: flex;
`;
export default MyVocaDetail;
