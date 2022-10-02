import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import goPrev from "../../images/arrow_back_ios.png";
import goNext from "../../images/arrow_forward_ios.png";
import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { main_guide } from "../../images";

const SlickMyBook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getWordStorageList());
  }, []);

  const { wordStorage } = useAppSelector(state => state.wordStorageSlice);
  const MyVocaSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: wordStorage?.length > 4 ? 4 : wordStorage?.length,
    loop: true,
  };

  const moveToDetail = (id: number) => {
    navigate(`/myvoca-detail/${id}`);
  };

  if (wordStorage.length === 0) {
    return <img src={main_guide} alt="main_guide" />;
  } else {
    return (
      <>
        <WordBookSlider {...MyVocaSettings}>
          {wordStorage?.map((myVoca, list) => {
            return (
              <CardContainer key={list}>
                <VocaCategory>
                  <span>{myVoca.public ? "공개" : "비공개"}</span>
                  <span>{myVoca.category}</span>
                </VocaCategory>

                <CardTitle>
                  <div>{myVoca.title}</div>
                  <div>{myVoca.description}</div>
                </CardTitle>

                <AboutCard>
                  <span>
                    마지막 시험 &nbsp;&nbsp;
                    {myVoca.lastTestAt === null
                      ? "미응시"
                      : myVoca.lastTestAt.split("T")[0]}
                  </span>
                  <div>작성 &nbsp;&nbsp;{myVoca.nickname}</div>
                  <div>제작 &nbsp;&nbsp;{myVoca.createAt.split("T")[0]}</div>
                </AboutCard>
                <article className="disable">
                  <button>시험 보기 </button>
                  <button onClick={() => moveToDetail(myVoca.id)}>
                    자세히 보기
                  </button>
                </article>
              </CardContainer>
            );
          })}
        </WordBookSlider>
      </>
    );
  }
};

export default SlickMyBook;

const WordBookSlider = styled(Slider)`
  max-width: 1000px;
  .slick-prev:before {
    content: url(${goPrev});
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    content: ">";

    opacity: 1;
    content: url(${goNext});

    color: black;
  }
`;

const CardContainer = styled.article`
  background-color: #e4f5fa;
  width: 220px;
  height: 400px;
  margin: 0 10px;
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
    margin-top: 15px;
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
