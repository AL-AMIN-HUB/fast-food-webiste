import React from "react";
import "./Banner.css";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <div className="parent">
      <div className="div1">
        <BannerSlider />
      </div>
      <div className="div2">
        <div className="parent2">
          <div className="div3">
            {" "}
            <img src="https://i.ibb.co/LvD3vy2/Screenshot-1.png" alt="" />
          </div>
          <div className="div4">
            <img src="https://i.ibb.co/pXZVYCW/shutterstock-428426212-600x449.jpg" alt="" />{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Banner;
