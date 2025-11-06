import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox rounded-lg overflow-hidden group relative">
      <Link to={"/"}>
        <div className="bannerText absolute z-50 pl-[220px] py-15 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
          <div className="textContainer items-center text-center">
            <p className="primary text-[18px] font-bold mb-1">{props.title}</p>
            <span className="bg-primary text-white text-[18px] font-bold p-1 px-10 rounded-md">
              {props.offer}
            </span>
          </div>
        </div>
        <img
          src={props.img}
          alt="banner"
          className="w-full group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 -z-50"
        />
      </Link>
    </div>
  );
};

export default BannerBox;

19.4;
