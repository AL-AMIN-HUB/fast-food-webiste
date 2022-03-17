import React from "react";
import "./Home.css";
import HeadMenu from "../../../shared/Menu/HeadMenu";

const Home = () => {
  return (
    <div>
      <div className="home">
        <HeadMenu />
      </div>
      <div className="bg-red-700 my-20 py-16 px-16 container mx-auto">Our Products</div>
    </div>
  );
};

export default Home;
