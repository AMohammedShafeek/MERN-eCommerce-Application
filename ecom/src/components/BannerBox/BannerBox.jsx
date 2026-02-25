import React from "react";
import { Link } from "react-router-dom";

const BannerBox = ({ banner }) => {
  return (
    <div className="box bannerBox w-[350px] h-[280px] rounded-lg overflow-hidden group relative">
      <Link to={"/"}>
        <img
          src={banner.image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-300"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
