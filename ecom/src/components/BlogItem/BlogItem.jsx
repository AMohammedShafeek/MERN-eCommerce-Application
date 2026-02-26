import React from "react";
import { useContext } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ blog }) => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full h-[350px] overflow-hidden rounded-md cursor-pointer group">
        <img
          src={blog.image}
          alt="blog"
          onClick={() => navigate(`/blog/${blog._id}`)}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
        />
      </div>
      <div className="info p-2">
        <div className="info-time flex items-center gap-1.5">
          <MdOutlineAccessTimeFilled className="text-[16px] primary"></MdOutlineAccessTimeFilled>
          <h4 className="text-[14px] font-[500] primary">
            {context?.formatDate(blog.createdAt)}
          </h4>
        </div>
        <Link to={`/blog/${blog._id}`}>
          <div className="info-title pt-1.5">
            <h2 className="text-[18px] font-[600] pb-2 link transition-all duration-300">
              {blog?.title}
            </h2>
            <p className="text-[14px] pt-1.5 text-justify inline">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    blog?.desc?.replace(/<[^>]+>/g, "")?.substring(0, 350) +
                    "...",
                }}
              ></div>
            </p>
          </div>
        </Link>
        <div className="read-more pt-1.5 flex gap-0.5">
          <Link
            to={`/blog/${blog._id}`}
            className="text-[16px] font-[500] primary underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
