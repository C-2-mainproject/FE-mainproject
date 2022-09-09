import Slider from "react-slick";
import MyWordCard from "./MyWordCard";
const SlickMyBook = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <div>
      <h2>Uneven sets (infinite)</h2>
      <Slider {...settings}>
        <MyWordCard>
          <h3>1</h3>
        </MyWordCard>
        <MyWordCard>
          <h3>2</h3>
        </MyWordCard>
        <MyWordCard>
          <h3>3</h3>
        </MyWordCard>
        <MyWordCard>
          <h3>4</h3>
        </MyWordCard>
        <MyWordCard>
          <h3>5</h3>
        </MyWordCard>
        <MyWordCard>
          <h3>6</h3>
        </MyWordCard>
      </Slider>
    </div>
  );
};

export default SlickMyBook;
