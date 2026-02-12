import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import UploadBox from "../../components/UploadBox/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import { MyContext } from "../../App";
import { deleteData, editData, getData, postData } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router-dom";

const HomeSlidesNew = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isRemoveLoading, setIsRemoveLoading] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [formFeilds, setFormFeilds] = useState({
    name: "",
    image: [],
  });

  useEffect(() => {
    getData(`/api/slider/${id}`).then((res) => {
      if (res?.error !== true) {
        setFormFeilds({
          name: res?.slider?.name,
          image: res?.slider?.image,
        });
        setPreviews(res?.slider?.image || []);
      } else {
        context.openAlertBox("error", res?.message, "getSliderByID-error");
        navigate("/home-slides");
      }
    });
  }, [id]);

  const valideValue = Object.values(formFeilds).every((el) => el);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFeilds({
      ...formFeilds,
      [name]: value,
    });
  };

  const setPreviewsFun = (previewsArr) => {
    const updatedImages = [...previews, ...previewsArr];
    setPreviews(updatedImages);
    formFeilds.image = updatedImages;
  };

  const removeImg = (image, index) => {
    setIsRemoveLoading(true);
    var imageArr = [];
    imageArr = previews;
    deleteData(`/api/slider/deleteImage?imageUrl=${image}`).then((res) => {
      if (res?.error !== true) {
        imageArr.splice(index, 1);
        setPreviews([]);
        setIsRemoveLoading(false);
        setTimeout(() => {
          setPreviews(imageArr);
          formFeilds.image = imageArr;
        }, 100);
      } else {
        setIsRemoveLoading(false);
        context.openAlertBox("error", res?.message, "deleteSliderImage-error");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFeilds.name === "") {
      context.openAlertBox(
        "error",
        "Enter Slider Name",
        "MissingSliderName-error",
      );
      setIsLoading(false);
      return;
    }

    editData(`/api/slider/updateSlider/${id}`, formFeilds, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.openAlertBox("success", res?.message, "updateSlider-success");
        setFormFeilds({
          name: "",
          images: [],
        });
        setIsLoading(false);
        navigate("/home-slides");
      } else {
        context.openAlertBox("error", res?.message, "updateSlider-error");
        setIsLoading(false);
      }
    });
  };

  return (
    <section className="min-h-dvh">
      {context.isOpenSideBar && (
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden`}
          onClick={() => context.setIsOpenSideBar(false)}
        />
      )}
      <div className="container lg:flex pt-10">
        <div
          className={`sidebarWrapper h-full bg-white transition-all duration-300 ease-in-out
                ${context.isOpenSideBar ? "w-[20%]" : "w-0 overflow-hidden"}`}
        ></div>
        <div
          className={`sidebarWrapper my-7 transition-all duration-300 ease-in-out w-full min-h-0
          ${context.isOpenSideBar ? "lg:w-[80%]" : "lg:w-full"}
        `}
        >
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-4 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">UPDATE SLIDER</h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full container mt-5 pt-3 my-3"
            >
              <div className="flex items-center">
                <div className="upload">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Upload Slider
                  </p>
                  <div className="flex w-full items-center gap-4">
                    {previews?.length !== 0 &&
                      previews?.map((image, index) => {
                        return (
                          <div key={index} className="relative wrapper w-full">
                            <IoMdClose
                              onClick={() => removeImg(image, index)}
                              className="text-white cursor-pointer hover:bg-black bg-red-500 transition-all duration-300 rounded-full z-30 text-[25px] absolute -top-2 -right-2"
                            ></IoMdClose>
                            <div
                              className="relative w-full group cursor-pointer mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
                        w-full h-full"
                            >
                              <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
                                <LazyLoadImage
                                  alt={"image"}
                                  effect="blur"
                                  src={image}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    <div
                      className={`block ${previews.length >= 1 && "hidden"}`}
                    >
                      <UploadBox
                        image="Add Slider"
                        multiple={false}
                        name="image"
                        url="/api/product/uploadImages"
                        setPreviewsFun={setPreviewsFun}
                        setIsLoading={setIsLoading}
                        isRemoveLoading={isRemoveLoading}
                        setIsUploading={setIsUploading}
                      ></UploadBox>
                    </div>
                  </div>
                </div>
              </div>
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Slider Name
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="name w-full">
                  <div className="name mb-2">
                    <TextField
                      type="text"
                      id="name"
                      name="name"
                      value={formFeilds.name}
                      disabled={isUploading}
                      label="Enter Slider Name"
                      variant="outlined"
                      size="medium"
                      sx={{
                        "& label.Mui-focused": {
                          color: "#ff5252",
                          transition: "all 0.3s",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#ccc",
                            transition: "all 0.3s",
                          },
                          "&:hover fieldset": {
                            borderColor: "#ff5252",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#ff5252",
                          },
                        },
                      }}
                      className="w-full"
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-3 justify-center pt-3 mb-5">
                <Button
                  type="submit"
                  disabled={!valideValue}
                  className={`${
                    !valideValue === true
                      ? "!bg-gray-200"
                      : "btn-org !bg-[var(--primary-clr)]"
                  } !w-full !py-2 !font-bold hover:!bg-black hover:!text-white transition-all duration-300 flex gap-2`}
                >
                  {isLoading === true ? (
                    <CircularProgress
                      color="inherit"
                      size={24}
                    ></CircularProgress>
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSlidesNew;
