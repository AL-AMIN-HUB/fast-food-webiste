import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FoodSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mt-16">
      <Slider {...settings}>
        <div>
          <img src="https://i.ibb.co/ZKQTKs6/category-11.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/V3yY8KX/category-22.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/0G2Fj96/category3.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/6HTb20c/category-44.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/CQKLqxS/category5.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/XZydR1Y/category-33.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/6DFGwbJ/category7.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/1GTxm19/category-55.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default FoodSlider;
