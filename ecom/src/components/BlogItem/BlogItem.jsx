import React from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer">
        <img
          src="../src/assets/Blogs/blog1.jpg"
          className="w-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 hover:scale-120 hover:rotate-4"
          alt="blog"
        />
      </div>
      <div className="info p-2">
        <div className="info-time flex items-center gap-1.5">
          <MdOutlineAccessTimeFilled className="text-[16px] primary"></MdOutlineAccessTimeFilled>
          <h4 className="text-[14px] font-[500] primary">05 SEPT 2025</h4>
        </div>
        <Link to={"/"}>
          <div className="info-title pt-1.5">
            <h2 className="text-[18px] font-[600] link transition-all duration-300">
              How to find best pillows under $500
            </h2>
            <p className="text-[14px] pt-1.5 text-justify inline">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              dolorum eveniet recusandae at sit nesciunt eligendi expedita
              distinctio, labore deserunt molestiae consectetur, asperiores ipsa
              sint?
              <p className="text-[14px] font-bold text-justify inline"> ....</p>
            </p>
          </div>
        </Link>
        <div className="read-more pt-1.5 flex gap-0.5">
          <Link className="text-[16px] font-[500] primary underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
