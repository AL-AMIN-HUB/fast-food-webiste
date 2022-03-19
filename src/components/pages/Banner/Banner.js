import React from "react";
import Countdown from "../Countdown/Countdown";
import "./Banner.css";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <div>
      <div className="parent px-16">
        <div className="div1">
          <div className="w-full h-full">
            <BannerSlider />

            <div className="fill_out_image">
              <div className="content_fill_out_image h-full ">
                <h2 className="text-white text-center pt-20">Hello Customer</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="div2">
          <div className="parent2">
            <div className="div3">
              {" "}
              {/* <img className="w-full h-full" src="https://i.ibb.co/87jdKhd/resized-image-Promo-1.jpg" alt="" /> */}
              <Countdown />
            </div>

            <div className="div4">
              <img className="w-full h-full" src="https://i.ibb.co/y0Qz8QX/Screenshot-4.png" alt="" />{" "}
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="parent3 px-16 mt-4">
        <div className="div5">
          <img src="https://i.ibb.co/Lzhf0Gs/resized-image-Promo-7.jpg" alt="" />{" "}
        </div>
        <div className="div6 cursor-pointer">
          <img src="https://i.ibb.co/jDXxvhj/resized-image-Promo-6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
