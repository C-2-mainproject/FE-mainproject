import styled from "styled-components";
import { SharedVocaItem } from "../../components";
import { ildan, like } from "../../images";
import { IWordStorage } from "../../types/types";

const wordStorage_list = {
  category: "category",
  createAt: "createAt",
  description: "description",
  id: 1,
  lastTestAt: "lastTestAt",
  likeCount: 1,
  modifiedAt: "modifiedAt",
  public: true,
  title: "title",
};

const SharedVocaDetail = () => {
  return (
    <SharedVocaDetailLayout>
      <SharedVocaDetailWrapper>
        <SharedVocaDetailBox>
          <div>
            <DivA>
              <p>지금 보고 있는 단어장</p>
            </DivA>
            <DivB>
              <SharedVocaItem wordStorage={wordStorage_list as IWordStorage} />
              <DetailInfo>
                <div>
                  <p>
                    카테고리<span>{wordStorage_list?.category}</span>
                    <img src={like} alt="like" />
                    <span>{wordStorage_list?.likeCount}</span>
                  </p>
                  <h1>{wordStorage_list?.title}</h1>
                  <h2>{wordStorage_list?.description}</h2>
                  <h3>{wordStorage_list?.public ? "공개" : "비공개"}</h3>
                  <p>
                    마지막 시험<span>{wordStorage_list?.lastTestAt}</span>
                    모르는 단어<span> 개</span>
                  </p>
                </div>
                <div>
                  <p>
                    작성<span>일단이</span>
                  </p>
                  <p>
                    제작<span>{wordStorage_list?.createAt.split("T")[0]}</span>
                  </p>
                </div>

                <Balloon>
                  <p>일단이</p>
                  <span>잘하고 있어! 너무 멋진데?</span>
                </Balloon>
                <Ildan src={ildan} alt="ildan" />
              </DetailInfo>
            </DivB>
          </div>
        </SharedVocaDetailBox>
      </SharedVocaDetailWrapper>
    </SharedVocaDetailLayout>
  );
};

const SharedVocaDetailLayout = styled.div`
  flex-grow: 0;
  padding-top: 3rem;
  margin: auto;
`;

const SharedVocaDetailWrapper = styled.div`
  width: 1360px;
  margin: auto;
`;

const SharedVocaDetailBox = styled.div`
  width: 1280px;
  margin: auto;
`;

const DivA = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    width: 148px;
    height: 26px;
    font-family: NotoSansKR;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.26px;
    text-align: left;
    color: #000;
  }

  button {
    width: 182px;
    height: 40px;
    margin-bottom: 20px;
    margin-left: 20px;
    background-color: #1f1f1f;
  }

  span {
    width: 99px;
    height: 23px;
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.12px;
    text-align: left;
    color: #fff;
  }
`;

const DivB = styled.div`
  display: flex;
`;

const DetailInfo = styled.div`
  width: 947px;
  height: 400px;

  h1 {
    width: 167px;
    height: 35px;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #000;
  }

  h2 {
    margin-bottom: 20px;
    width: 454px;
    height: 26px;
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #666;
  }

  h3 {
    margin-bottom: 60px;
    border-bottom: 1px solid;
    width: 40px;
    height: 23px;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: center;
    color: #000;
  }

  p {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #666;
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1px;
    text-align: left;
    color: #666;
  }

  div:nth-child(1) {
    height: 284px;
    border-top: 1px solid;
    padding: 20px 0 20px;
  }

  div:nth-child(2) {
    height: 115px;
    border-top: 1px solid;
    padding: 30px 0 20px;
  }
`;

const Ildan = styled.img`
  position: relative;
  left: 700px;
  bottom: 400px;
`;

const Balloon = styled.div`
  position: relative;
  left: 450px;
  bottom: 150px;
  margin: 50px;
  padding: 20px;
  width: 220px;
  height: 100px;
  color: #fff;
  background-color: gray;

  &:after {
    content: "";
    position: absolute;
    top: 21px;
    right: -30px;
    border-left: 30px solid gray;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }

  p {
    color: black;
  }

  span {
    color: white;
  }
`;
export default SharedVocaDetail;
