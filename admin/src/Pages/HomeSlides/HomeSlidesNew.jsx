import React, { useContext, useState } from "react";
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

const HomeSlidesNew = () => {
  const context = useContext(MyContext);
  const [slider, setSlider] = useState("");

  const handleSlider = (event) => {
    setSlider(event.target.value);
  };

  return (
    <section>
      <div className="container flex pt-10">
        <div className={`sidebarWrapper ${
            context.isOpenSideBar === true ? "w-[20%]" : ""
          } h-full bg-white`}>
          <Sidebar></Sidebar>
        </div>
        <div
          className={`sidebarWrapper ${
            context.isOpenSideBar === true ? "w-[80%]" : "w-full"
          }  my-7 h-full`}
        >
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-4 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">ADD NEW SLIDER</h2>
            </div>

            <form className="w-full container mt-5 pt-3 my-3">
              <div className="flex items-center">
                <div className="upload">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Upload Slider
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative wrapper">
                      <IoMdClose className="text-white cursor-pointer hover:bg-black bg-red-500 transition-all duration-300 rounded-full z-50 text-[25px] absolute -top-2 -right-2"></IoMdClose>
                      <div
                        className="relative group cursor-pointer mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
                        w-[790px] h-[150px]"
                      >
                        <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
                          <LazyLoadImage
                            alt={"image"}
                            effect="blur"
                            src={"../../../src/assets/Sliders/Slider-1.png"}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <UploadBox
                        image="Add Slider"
                        multiple={false}
                      ></UploadBox>
                    </div>
                  </div>
                </div>
              </div>
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Slider Name & Category
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="name w-[70%]">
                  <div className="name mb-2">
                    <TextField
                      type="text"
                      id="name"
                      name="name"
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
                    />
                  </div>
                </div>
                <div className="Category w-[30%]">
                  <div className="Category mb-2">
                    <FormControl
                      fullWidth
                      sx={{
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#ff5252",
                        },
                        transition: "all 0.3s",
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Select Category
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={slider}
                        label="Product Category"
                        onChange={handleSlider}
                        sx={{
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ff5252",
                            transition: "all 0.3s",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#ff5252",
                            transition: "all 0.3s",
                          },
                        }}
                      >
                        <MenuItem value={"Fashion"}>Fashion</MenuItem>
                        <MenuItem value={"Electronics"}>Electronics</MenuItem>
                        <MenuItem value={"Accessories"}>Accessories</MenuItem>
                        <MenuItem value={"Bags"}>Bags</MenuItem>
                        <MenuItem value={"Footwear"}>Footwear</MenuItem>
                        <MenuItem value={"Beauty"}>Beauty</MenuItem>
                        <MenuItem value={"Jewellery"}>Jewellery</MenuItem>
                        <MenuItem value={"Wellness"}>Wellness</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center gap-3 justify-center pt-3 mb-5">
                <Button className="btn-org !w-full !py-3 !font-bold hover:!bg-black hover:!text-white transition-all duration-300">
                  PUBLISH
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
