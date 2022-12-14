import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apis } from "../../shared/api";
import { useState, useEffect } from "react";
import { IBestVoca } from "../../types/types";
import { MouseEvent } from "react";
import { getCookie } from "../../shared/Cookie";

const SlickBestVoca = () => {
  const [bestVoca, setBestVoca] = useState<IBestVoca[]>();
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const getBestVoca = async () => {
    await apis.getBestLikeVoca(1).then(res => {
      setBestVoca(res.data);
    });
  };

  useEffect(() => {
    getBestVoca();
  }, []);

  const BestSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    loop: true,
    centerMode: false,
    variableWidth: true,
    beforeChange: (current: number, next: number) => setSliderIndex(next),
  };

  const addToMyVoca = async (event: MouseEvent<HTMLButtonElement>) => {
    const newTarget = event.target as HTMLButtonElement;

    if (getCookie()) {
      await apis
        .addMyVoca(Number(newTarget.value))
        .then(data => console.log(data))
        .catch(error => {
          console.log(error);
          alert("로그인이 필요한 서비스입니다.");
        });

      alert("단어장이 추가되었습니다!");
    } else {
      alert("로그인이 필요한 서비스입니다.");
    }
  };

  // const likeBtn = async (id: number) => {
  //   try {
  //     await apis.suggestionWordStorage(id);
  //     getBestVoca();
  //   } catch (error) {
  //     console.log(error);
  //     alert("로그인이 필요한 서비스입니다.");
  //   }
  // };

  return (
    <>
      <BestPopSlider {...BestSettings}>
        {bestVoca?.map((bestVoca, index) => {
          return (
            <div key={bestVoca.id}>
              <WordBookBox
                className={index === sliderIndex ? "active" : "prev"}
              >
                <div>
                  {/* <Header>
                    <span>{bestVoca.likeCount} 개</span>
                    {bestVoca.likeCount === 0 ? (
                      <img
                        src={like}
                        width="20px"
                        onClick={() => likeBtn(bestVoca.id)}
                      />
                    ) : (
                      <img
                        src={like_fill}
                        width="20px"
                        onClick={() => likeBtn(bestVoca.id)}
                      />
                    )}
                  </Header> */}
                  <p>{bestVoca.category}</p>
                  <h3>{bestVoca.title}</h3>
                  <h4>{bestVoca.description}</h4>
                </div>
                <span>
                  <button value={bestVoca.id} onClick={addToMyVoca}>
                    내 단어장에 담기<p>&gt;</p>
                  </button>
                </span>
              </WordBookBox>
            </div>
          );
        })}
      </BestPopSlider>
    </>
  );
};

const BestPopSlider = styled(Slider)`
  position: absolute;
  max-width: 1000px;
  top: 50%;
  left: 45%;
  transform: translate(-35%, -20%);

  .slick-prev:before {
    opacity: 1;
    color: black;
    left: 0px;
    z-index: 1;
    position: relative;
  }

  .slick-next:before {
    right: 210px;
    position: relative;
    opacity: 1;
    color: black;
  }
`;

const WordBookBox = styled.div`
  width: 785px;
  height: 400px;

  background-color: #eff9fc;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: ${props => (props.className === "active" ? 1.0 : 0.5)};
  transform: scale(${props => (props.className === "active" ? 1.0 : 0.8)});

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
      letter-spacing: -0.07em;
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

// const Header = styled.div`
//   img {
//     margin-left: 600px;
//     margin-top: -25px;
//     cursor: pointer;
//   }

//   span {
//     width: 50px;
//     margin-top: -40px;
//     margin-left: 625px;
//   }
// `;

export default SlickBestVoca;
