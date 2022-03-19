import React from "react";
import "boxicons";
import { Link } from "react-router-dom";

const NavInfo = () => {
  return (
    <div>
      <div className="headerInfo flex justify-between items-center  px-16 pt-8">
        <div className="call flex items-center justify-center">
          <div className="icon inline-block w-12 h-12 rounded-full mr-3 ring-red-900 bg-slate-900 ring-2 text-center items-center flex justify-center cursor-pointer">
            <box-icon animation="flashing" color="white" type="solid" name="phone"></box-icon>
          </div>
          <div className="text">
            <h2 className="font-bold text-2xl text-neutral-800">Hotline</h2>
            <h3 className="font-extrabold text-xl text-red-600 font-['Open_Sans']">+880 1906 221552</h3>
          </div>
        </div>
        <div className="logo">
          <img src="https://i.ibb.co/vBgJZPM/logo.png" alt="" />
        </div>
        <div className="icon flex ">
          <div className="icon1 w-12 h-12 bg-neutral-50 rounded-full ring-1 flex items-center justify-center mr-3 cursor-pointer">
            <Link to="/login">
              {" "}
              <box-icon title="Sign up" type="solid" name="user"></box-icon>
            </Link>
          </div>
          <div className="icon1 w-12 h-12 bg-red-500 rounded-full ring-1 flex items-center justify-center cursor-pointer ">
            <Link to="/cart">
              <box-icon title="Cart" color="white" name="cart-add" type="solid"></box-icon>
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-3 mx-16 horizontal" />
    </div>
  );
};

export default NavInfo;
