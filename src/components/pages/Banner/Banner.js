import React from "react";
import "./Banner.css";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <div className="parent px-16">
      <div className="div1">
        <div className="w-full h-full">
          <BannerSlider />
        </div>
      </div>
      <div className="div2">
        <div className="parent2">
          <div className="div3">
            {" "}
            <img className="w-full h-full" src="https://i.ibb.co/87jdKhd/resized-image-Promo-1.jpg" alt="" />
          </div>
          <div className="div4">
            <img className="w-full h-full" src="https://i.ibb.co/y0Qz8QX/Screenshot-4.png" alt="" />{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Banner;
