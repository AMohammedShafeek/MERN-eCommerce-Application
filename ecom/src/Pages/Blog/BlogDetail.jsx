import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../utils/api";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState("");

  useEffect(() => {
    getData(`/api/blog/${id}`).then((res) => {
      if (res?.error !== true) {
        // console.log(res?.blog);
        setBlog(res?.blog);
      }
    });
  }, [id]);

  return (
    <>
      <div className="blogContent flex flex-col items-center justify-center">
        <h1 className="text-[40px] my-5 font-bold">{blog?.title}</h1>
      </div>
      <div className="mx-20 mb-10 h-[80vh] flex gap-5">
        {/* LEFT IMAGE */}
        <div className="w-[40%] h-full">
          <img
            src={blog?.image?.length > 0 && blog?.image[0]}
            alt="blog"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="w-[60%] h-full overflow-y-auto p-5 bg-white rounded-md">
          <div
            className="text-[16px] text-justify leading-7"
            dangerouslySetInnerHTML={{
              __html: blog?.desc,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
