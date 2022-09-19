import Slider from "react-slick";
import { MyWordCard } from "../index";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import goPrev from "../../images/arrow_back_ios.png";
import goNext from "../../images/arrow_forward_ios.png";
// import arrow_foward from "../../images/icon/arrow_foward.png";
import { useState } from "react";
import { WordStorage } from "../../types/types";

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    loop: true,
  };

  const [myVocaList, setmyVocaList] = useState<WordStorage[]>([
    {
      id: 1,
      title: "테스트 단어장1",
      description: "테스트 단어장입니다.",
      category: "토익",
      likeCount: 13,
      bookmarked: true,
      public: true,
      writer: "일단이",
      createAt: "2022.09.01",
      modifiedAt: "2022.09.01",
      lastTestAt: "2022.09.01",
    },
    {
      id: 2,
      title: "테스트 단어장2",
      description: "테스트 단어장입니다.",
      category: "토익",
      likeCount: 11,
      bookmarked: true,
      public: true,
      writer: "일단이",
      createAt: "2022.09.02",
      modifiedAt: "2022.09.02",
      lastTestAt: "2022.09.02",
    },
    {
      id: 3,
      title: "테스트 단어장3",
      description: "테스트 단어장입니다.",
      category: "토익",
      likeCount: 11,
      bookmarked: true,
      public: true,
      writer: "일단이",
      createAt: "2022.09.02",
      modifiedAt: "2022.09.02",
      lastTestAt: "2022.09.02",
    },
    {
      id: 4,
      title: "테스트 단어장4",
      description: "테스트 단어장입니다.",
      category: "토익",
      likeCount: 11,
      bookmarked: true,
      public: true,
      writer: "일단이",
      createAt: "2022.09.02",
      modifiedAt: "2022.09.02",
      lastTestAt: "2022.09.02",
    },
    {
      id: 5,
      title: "테스트 단어장5",
      description: "테스트 단어장입니다.",
      category: "토익",
      likeCount: 11,
      bookmarked: true,
      public: true,
      writer: "일단이",
      createAt: "2022.09.02",
      modifiedAt: "2022.09.02",
      lastTestAt: "2022.09.02",
    },
  ]);

  console.log(setmyVocaList);

  return (
    <>
      <WordBookSlicder {...settings}>
        {myVocaList.map((myVoca, list) => {
          console.log(list);
          return <MyWordCard wordStorage={myVoca} />;
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
