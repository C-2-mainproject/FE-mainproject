import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __getDetailWordStorage } from "../../redux/modules/wordStorageSlice";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { apis } from "../../shared/api";
import { like, like_fill, main_ildan } from "../../images";

const MyVocaDetailInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isFinish, detailWordStorage } = useAppSelector(
    state => state.wordStorageSlice,
  );

  const deleteWordStorage = async () => {
    try {
      alert("단어장을 삭제하시겠습니까?");

      await apis.deleteWordStorage(Number(id));

      navigate("/myvoca");
    } catch (error) {
      console.log(error);
    }
  };

  const onLikeHandler = async () => {
    try {
      await apis.suggestionWordStorage(Number(id));

      dispatch(__getDetailWordStorage(String(id)));
    } catch (error) {
      console.log(error);
    }
  };

  if (isFinish && detailWordStorage) {
    return (
      <MyVocaDetailInfoLayout>
        <div>
          <p>
            카테고리<span>{detailWordStorage.category}</span>
            {detailWordStorage.likeCount === 0 ? (
              <img onClick={onLikeHandler} src={like} alt="like" />
            ) : (
              <img onClick={onLikeHandler} src={like_fill} alt="like" />
            )}
            <span>{detailWordStorage.likeCount}</span>
          </p>
          <h1>{detailWordStorage.title}</h1>
          <h2>{detailWordStorage.description}</h2>
          <h3>{detailWordStorage.public ? "공개" : "비공개"}</h3>
          <p>
            마지막 시험
            <span>
              {detailWordStorage.lastTestAt === null
                ? "미응시"
                : detailWordStorage.lastTestAt.split("T")[0]}
            </span>
            모르는 단어<span> 개</span>
          </p>
        </div>
        <div>
          <p>
            작성<span>{detailWordStorage.nickname}</span>
          </p>
          <p>
            제작
            <span>
              {detailWordStorage.createAt === null
                ? ""
                : detailWordStorage.createAt.split("T")[0]}
            </span>
          </p>
        </div>

        <Balloon>
          <p>일단이</p>
          <span>잘하고 있어! 너무 멋진데?</span>
        </Balloon>
        <Ildan src={main_ildan} alt="ildan" onClick={deleteWordStorage} />
      </MyVocaDetailInfoLayout>
    );
  } else {
    return <div>로딩중!!</div>;
  }
};

const MyVocaDetailInfoLayout = styled.div`
  width: 59rem;
  height: 25rem;

  h1 {
    height: 2.2rem;
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
    color: #000;
  }

  h2 {
    margin-bottom: 1.25rem
    width: 28.3rem;
    height: 1.62rem;
    font-size: 1.12rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
    color: #666;
  }

  h3 {
    margin-bottom: 3.75rem;
    border-bottom: 1px solid;
    width: 2.5rem;
    height: 1.4rem;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: center;
    color: #000;
  }

  p {
    margin-bottom: 1.25rem;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
    color: #666;
  }

  span {
    margin-left: 0.62rem;
    margin-right: 0.62rem;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.07rem;
    text-align: left;
    color: #666;
  }

  div:nth-child(1) {
    height: 17.8rem;
    border-top: 1px solid;
    padding: 1.25rem 0 1.25rem;
  }

  div:nth-child(2) {
    height: 7.1rem;
    border-top: 1px solid;
    padding: 1.87rem 0 1.25rem;
  }

  img {
    cursor: pointer;
  }
`;

const Ildan = styled.img`
  position: relative;
  width: 17.5rem;
  height: 17.5rem;
  left: 43.75rem;
  bottom: 25rem;
  cursor: pointer;
`;

const Balloon = styled.div`
  position: relative;
  left: 28.1rem;
  bottom: 9.3rem;
  margin: 3.12rem;
  padding: 1.25rem;
  width: 13.75rem;
  height: 6.25rem;
  color: #fff;
  background-color: #e4f5fa;

  &:after {
    content: "";
    position: absolute;
    top: 1.3rem;
    right: -1.87rem;
    border-left: 1.87rem solid #e4f5fa;
    border-top: 0.6rem solid transparent;
    border-bottom: 0.6rem solid transparent;
  }

  p {
    color: black;
  }

  span {
    color: black;
  }
`;

export default MyVocaDetailInfo;
