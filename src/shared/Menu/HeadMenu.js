import React from "react";
import Navbar from "./Navbar";
import NavInfo from "./NavInfo";
import "./HeadMenu.css";
import Banner from "../../components/pages/Banner/Banner";
import FoodSlider from "../../components/pages/Banner/FoodSlider";

const HeadMenu = () => {
  return (
    <div>
      <div className="container lg:w-[1360px] sm:w-[100%] mx-auto bg-transparent lg:mb-20">
        <NavInfo />

        <Navbar />

        <Banner />
        <FoodSlider />
      </div>
    </div>
  );
};

export default HeadMenu;
