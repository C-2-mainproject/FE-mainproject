import Slider from "react-slick";
import { PopularWordBook } from "../index";
import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apis } from "../../shared/api";
import { useState, useEffect, Key } from "react";
import { IBestVoca } from "../../types/types";
import { relative } from "node:path/win32";

const SlickBestBook = ({ mainBestVoca }: { mainBestVoca?: boolean }) => {
  const [bestVoca, setBestVoca] = useState<IBestVoca>();
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const getBestVoca = async () => {
    await apis.getBestLikeVoca(1).then(res => setBestVoca(res.data));
  };
  console.log(sliderIndex);
  useEffect(() => {
    getBestVoca();
  }, []);
  const BestSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    loop: true,
    centerMode: false,
    beforeChange: (current: number, next: number) => setSliderIndex(next),
  };
  return (
    <>
      <BestPopSlider {...BestSettings}>
        {bestVoca?.map((bestVoca: IBestVoca, index: Key) => {
          return (
            <>
              <WordBookBox
                props={index === sliderIndex ? "active" : "prev"}
                key={index}
              >
                <div>
                  <p>토익</p>
                  <h3> {bestVoca.title}</h3>
                  <h4>{bestVoca.description}</h4>
                </div>
                <span>
                  <button>
                    내 단어장에 담기<p>&gt;</p>
                  </button>
                </span>
              </WordBookBox>
            </>
          );
        })}
      </BestPopSlider>
    </>
  );
};

export default SlickBestBook;

const BestPopSlider = styled(Slider)`
  position: absolute;
  max-width: 900px;
  top: 50%;
  left: 50%;
  transform: translate(-35%, -20%);
  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0px;
    z-index: 1;
    position: relative;
  }
  .slick-next:before {
    right: 110px;
    position: relative;
    opacity: 1;

    color: black;
  }
`;
const WordBookBox = styled.div<{ props: string }>`
  width: 785px;
  height: 400px;
  /* margin-left: 16rem; */

  background-color: #eff9fc;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* opacity: ${props => (props.props === "active" ? 1.0 : 0.4)}; */

  /* transform: scale(${props => (props.props === "active" ? 1.0 : 0.8)}); */

  button {
    margin-top: 61px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.07em;
    color: #ffffff;
    background-color: #2b98be;
    padding: 13px 24px;
    display: flex;
    justify-content: space-between;
    border-radius: 26px;
    p {
      margin-left: 25px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    h3 {
      font-weight: 500;
      font-size: 36px;
      line-height: 52px;
      letter-spacing: -0.07em;
    }
    h4 {
      font-weight: 400;
      font-size: 24px;
      line-height: 35px;
      /* identical to box height */
    }
    p {
      width: 30px;
      position: relative;
      color: #0083b0;
      margin-bottom: 20px;
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #0083b0;
        position: absolute;
        bottom: -3px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
  }
`;
const SecondBox = styled.div`
  background-color: gray;
  width: 90px;
  height: 300px;
`;
