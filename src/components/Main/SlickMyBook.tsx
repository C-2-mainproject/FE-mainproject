import Slider from "react-slick";
import MyWordCard from "./MyWordCard";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import goPrev from "../../assets/images/arrow_back_ios.png";
import goNext from "../../assets/images/arrow_forward_ios.png";
interface sliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */
  loop?: boolean;
}

const SlickMyBook = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    loop: true,
  };
  return (
    <>
      <WordBookSlicder {...settings}>
        <MyWordCard></MyWordCard>
        <MyWordCard></MyWordCard>
        <MyWordCard></MyWordCard>
        <MyWordCard></MyWordCard>
        <MyWordCard></MyWordCard>
        <MyWordCard></MyWordCard>
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
    opacity: 1;
    content: url(${goNext});

    color: black;
  }
`;
