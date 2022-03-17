import React from "react";

const NavInfo = () => {
  return (
    <div>
      <div className="headerInfo flex justify-between items-center  px-16 pt-8">
        <div className="call flex">
          <div className="icon border-4 rounded-lg mr-3">icon</div>
          <div className="text">
            <h2>Hotline</h2>
            <h3>01906221552</h3>
          </div>
        </div>
        <div className="logo">
          <img src="https://i.ibb.co/vBgJZPM/logo.png" alt="" />
        </div>
        <div className="icon flex ">
          <div className="icon1 mr-3">
            <p>icon1</p>
          </div>
          <div className="icon2">icon2</div>
        </div>
      </div>
      <hr className="mt-3 mx-16 horizontal" />
    </div>
  );
};

export default NavInfo;
