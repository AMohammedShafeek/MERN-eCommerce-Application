import React, { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaImages } from "react-icons/fa6";
import { uploadProductImages } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";

const UploadBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (e) => {
    props.setIsUploading(true);
    setIsLoading(true);
    const files = e.target.files;

    if (!files || files.length === 0) return;

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    const res = await uploadProductImages(props.url, formData);

    if (res?.images?.length > 0) {
      setIsLoading(false);
      props.setIsUploading(false);
      props.setPreviewsFun(res.images);
    }
    setIsLoading(false);
    e.target.value = null;
    props.setIsUploading(false);
  };

  return (
    <div
      className="relative group cursor-pointer p-3 mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
      w-[150px] h-[150px]"
    >
      {!isLoading && !props.isRemoveLoading ? (
        <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
          {props.multiple === false ? (
            <BiSolidImageAdd className="text-[50px] text-[#ff5252]"></BiSolidImageAdd>
          ) : (
            <FaImages className="text-[50px] text-[#ff5252]"></FaImages>
          )}
          <h1 className="text-[14px] font-bold primary">{props.image}</h1>
        </div>
      ) : (
        <CircularProgress
          sx={{
            color: "#ff5252",
          }}
          size={40}
        ></CircularProgress>
      )}

      <input
        type="file"
        multiple={props.multiple}
        accept="image/*"
        onChange={handleUpload}
        className="absolute cursor-pointer w-full h-full opacity-0"
      />
    </div>
  );
};

export default UploadBox;
