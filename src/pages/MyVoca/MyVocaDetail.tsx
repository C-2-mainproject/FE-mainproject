import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MyVocaItem, WordList } from "../../components";
import AddWordModal from "../../components/MyVoca/AddWordModal";
import UpdateVocaModal from "../../components/MyVoca/UpdateVocaModal";
import { top_dlfeksdl, like, like_fill } from "../../images";
import { getDetailWordStorage } from "../../redux/modules/wordStorageSlice";
import { apis } from "../../shared/api";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { IWordStorage } from "../../types/types";

const MyVocaDetail = () => {
  const { id } = useParams();
  const newId = Number(id);
  const dispatch = useAppDispatch();

  const { wordStorage, isFinish } = useAppSelector(
    state => state.wordStorageSlice,
  );

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isAddOpenModal, setIsAddOpenModal] = useState(false);
  const [isEditOpenModal, setIsEditOpenModal] = useState(false);
  const [detail, setDetail] = useState<IWordStorage>();

  const todoEdit = () => {
    setIsEdit(!isEdit);
    setIsEditOpenModal(!isEditOpenModal);
  };

  const addWord = () => {
    setIsAddOpenModal(!isAddOpenModal);
  };

  const getDetail = () => {
    const newWordStorage = wordStorage.find(value => {
      return value.id === newId;
    });
    dispatch(getDetailWordStorage(newWordStorage));
    setDetail(newWordStorage);
  };

  const deleteWordStorage = async () => {
    alert("단어장을 삭제하시겠습니까?");
    try {
      await apis.deleteWordStorage(newId).then(data => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };

  const onLikeHandler = async () => {
    const newId = Number(id);
    await apis.suggestionWordStorage(newId).then(data => {
      console.log(data);
      getDetail();
    });
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  if (isFinish && detail) {
    return (
      <MyVocaDetailLayout>
        <MyVocaDetailWrapper>
          <MyVocaDetailBox>
            <div>
              <DivA>
                <p>지금 보고 있는 단어장</p>
                <div>
                  <Button onClick={addWord}>
                    <span>단어 추가하기</span>
                  </Button>
                  {isAddOpenModal && (
                    <AddWordModal openAddWordModal={addWord} />
                  )}
                  <Button onClick={todoEdit}>
                    <span>단어장 편집하기</span>
                  </Button>
                  {isEditOpenModal && (
                    <UpdateVocaModal id="edit" openAddStorageModal={todoEdit} />
                  )}
                </div>
              </DivA>
              <DivB>
                <MyVocaItem wordStorage={detail as IWordStorage} />
                <DetailInfo>
                  <div>
                    <p>
                      카테고리<span>{detail?.category}</span>
                      {detail?.likeCount === 0 ? (
                        <img onClick={onLikeHandler} src={like} alt="like" />
                      ) : (
                        <img
                          onClick={onLikeHandler}
                          src={like_fill}
                          alt="like"
                        />
                      )}
                      <span>{detail?.likeCount}</span>
                    </p>
                    <h1>{detail?.title}</h1>
                    <h2>{detail?.description}</h2>
                    <h3>{detail?.public ? "공개" : "비공개"}</h3>
                    <p>
                      마지막 시험
                      <span>
                        {detail?.lastTestAt === null
                          ? "미응시"
                          : detail?.lastTestAt.split("T")[0]}
                      </span>
                      모르는 단어<span> 개</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      작성<span>{detail?.nickname}</span>
                    </p>
                    <p>
                      제작
                      <span>
                        {detail.createAt === null
                          ? ""
                          : detail?.createAt.split("T")[0]}
                      </span>
                    </p>
                  </div>

                  <Balloon>
                    <p>일단이</p>
                    <span>잘하고 있어! 너무 멋진데?</span>
                  </Balloon>
                  <Ildan
                    src={top_dlfeksdl}
                    alt="ildan"
                    onClick={deleteWordStorage}
                  />
                </DetailInfo>
              </DivB>
            </div>

            <WordList />
          </MyVocaDetailBox>
        </MyVocaDetailWrapper>
      </MyVocaDetailLayout>
    );
  } else {
    return <div>로딩중</div>;
  }
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

const Button = styled.button`
  width: 290px;
  height: 300px;
  background-color: #f3f3f3;

  span {
    &:hover {
      font-weight: 700;
    }
  }
`;

const DetailInfo = styled.div`
  width: 947px;
  height: 400px;

  h1 {
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

  img {
    cursor: pointer;
  }
`;

const Ildan = styled.img`
  position: relative;
  width: 280px;
  height: 280px;
  left: 700px;
  bottom: 400px;
  cursor: pointer;
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
  background-color: #e4f5fa;

  &:after {
    content: "";
    position: absolute;
    top: 21px;
    right: -30px;
    border-left: 30px solid #e4f5fa;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }

  p {
    color: black;
  }

  span {
    color: black;
  }
`;
export default MyVocaDetail;
