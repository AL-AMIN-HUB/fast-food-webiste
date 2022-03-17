import React from "react";
import "./Home.css";
import HeadMenu from "../../../shared/Menu/HeadMenu";

const Home = () => {
  return (
    <div className="home">
      <HeadMenu />
      <h1 className="text-3xl text-dark-900 text-center">Hello World</h1>
    </div>
  );
};

export default Home;
