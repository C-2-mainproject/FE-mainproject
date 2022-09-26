import Slider from "react-slick";
import { MyWordCard } from "../index";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import goPrev from "../../images/arrow_back_ios.png";
import goNext from "../../images/arrow_forward_ios.png";
// import arrow_foward from "../../images/icon/arrow_foward.png";
import { useState, useEffect } from "react";
import { IWordStorage } from "../../types/types";

import { useAppDispatch, useAppSelector } from "../../shared/reduxHooks";
import { __getWordStorageList } from "../../redux/modules/wordStorageSlice";

// interface sliderProps {
//   /** 슬라이더 아이템 요소 */
//   children: React.ReactNode;
//   /** 커스텀 클래스 */
//   className?: string;
//   /** 자동재생 (속도 설정시 number 타입으로) */
//   autoplay?: boolean | number;
//   /** 슬라이더 속도 */
//   speed?: number;
//   /** 반복 여부 */
//   loop?: boolean;
// }

const SlickMyBook = () => {
  const [myVocaList, setmyVocaList] = useState<IWordStorage[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(__getWordStorageList());
  }, []);

  const { wordStorage, isFinish } = useAppSelector(
    state => state.wordStorageSlice,
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    slidesToShow: 2,
    loop: true,
  };
  if (!isFinish) {
    return null;
  }
  return (
    <>
      <WordBookSlicder {...settings}>
        {wordStorage?.map((myVoca, list) => {
          return <MyWordCard wordStorage={myVoca} key={list} />;
        })}
      </WordBookSlicder>
    </>
  );
};

export default SlickMyBook;

const WordBookSlicder = styled(Slider)`
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
