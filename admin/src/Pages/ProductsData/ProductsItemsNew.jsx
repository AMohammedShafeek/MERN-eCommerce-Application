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

const ProductsItemsNew = () => {
  const context = useContext(MyContext);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [featured, setFeatured] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleSubCategory = (event) => {
    setSubCategory(event.target.value);
  };
  const handleFeatured = (event) => {
    setFeatured(event.target.value);
  };
  const handleColor = (event) => {
    setColor(event.target.value);
  };
  const handleSize = (event) => {
    setSize(event.target.value);
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
              <h2 className="font-bold text-[18px]">ADD NEW PRODUCT</h2>
            </div>

            <form className="w-full container mt-5 pt-3 my-3">
              <div className="flex items-center">
                <div className="upload">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Image & Gallery
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="relative wrapper">
                      <IoMdClose className="text-white cursor-pointer hover:bg-black bg-red-500 transition-all duration-300 rounded-full z-50 text-[25px] absolute -top-2 -right-2"></IoMdClose>
                      <div
                        className="relative group cursor-pointer mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
                        w-[150px] h-[150px]"
                      >
                        <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
                          <LazyLoadImage
                            alt={"image"}
                            effect="blur"
                            src={"../../../src/assets/Products/p2.jpg"}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative wrapper">
                      <IoMdClose className="text-white cursor-pointer hover:bg-black bg-red-500 transition-all duration-300 rounded-full z-50 text-[25px] absolute -top-2 -right-2"></IoMdClose>
                      <div
                        className="relative group cursor-pointer mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
                        w-[150px] h-[150px]"
                      >
                        <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
                          <LazyLoadImage
                            alt={"image"}
                            effect="blur"
                            src={"../../../src/assets/Products/p2.jpg"}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative wrapper">
                      <IoMdClose className="text-white cursor-pointer hover:bg-black bg-red-500 transition-all duration-300 rounded-full z-50 text-[25px] absolute -top-2 -right-2"></IoMdClose>
                      <div
                        className="relative group cursor-pointer mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
                        w-[150px] h-[150px]"
                      >
                        <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
                          <LazyLoadImage
                            alt={"image"}
                            effect="blur"
                            src={"../../../src/assets/Products/p2.jpg"}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative wrapper">
                      <IoMdClose className="text-white cursor-pointer hover:bg-black bg-red-500 transition-all duration-300 rounded-full z-50 text-[25px] absolute -top-2 -right-2"></IoMdClose>
                      <div
                        className="relative group cursor-pointer mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
                        w-[150px] h-[150px]"
                      >
                        <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
                          <LazyLoadImage
                            alt={"image"}
                            effect="blur"
                            src={"../../../src/assets/Products/p2.jpg"}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <UploadBox
                        image="Add Image"
                        multiple={false}
                      ></UploadBox>
                    </div>
                  </div>
                </div>
              </div>
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Product Name and Brand
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div className="col1 w-[70%]">
                  <TextField
                    type="text"
                    id="pName"
                    name="pName"
                    label="Product Name"
                    variant="outlined"
                    size="small"
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
                <div className="col2 w-[30%]">
                  <TextField
                    type="text"
                    id="brand"
                    name="brand"
                    label="brand"
                    variant="outlined"
                    size="small"
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
              <div className="desc w-full mb-4">
                <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                  Product Description
                </p>
                <div className="street mb-2">
                  <TextField
                    type="text"
                    id="desc"
                    name="desc"
                    label="Enter Product Detailed Description"
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
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Product Category & Price
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="Category w-full">
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
                        value={category}
                        label="Product Category"
                        onChange={handleCategory}
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
                <div className="subCategory w-full">
                  <div className="subCategory mb-2">
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
                        Sub-Category
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subCategory}
                        label="Product Category"
                        onChange={handleSubCategory}
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
                        <MenuItem value={"Men"}>Men</MenuItem>
                        <MenuItem value={"Women"}>Women</MenuItem>
                        <MenuItem value={"Kids"}>Kids</MenuItem>
                        <MenuItem value={"babies"}>babies</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="Price w-full">
                  <div className="Price mb-2">
                    <TextField
                      type="text"
                      id="price"
                      name="price"
                      label="Enter Product Price"
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
                <div className="sPrice w-full">
                  <div className="sPrice mb-2">
                    <TextField
                      type="text"
                      id="sPrice"
                      name="sPrice"
                      label="Enter Product Special Price"
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
              </div>
              <p className="transition-all mt-2 duration-300 text-[14px] text-black font-bold mb-2">
                Product Details
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="Featured w-full">
                  <div className="Featured mb-2">
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
                        Featured?
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={featured}
                        label="Featured?"
                        onChange={handleFeatured}
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
                        <MenuItem value={"Yes"}>Yes</MenuItem>
                        <MenuItem value={"No"}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="Stock w-full">
                  <div className="Stock mb-2">
                    <TextField
                      type="text"
                      id="Stock"
                      name="Stock"
                      label="Enter Total Stock"
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
                <div className="Discount w-full">
                  <div className="Discount mb-2">
                    <TextField
                      type="text"
                      id="Discount"
                      name="Discount"
                      label="Enter Special Discount (%)"
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
                <div className="Color w-full">
                  <div className="Color mb-2">
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
                        Pick Color
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={color}
                        label="Featured?"
                        onChange={handleColor}
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
                        <MenuItem value={"Red"}>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#ff0000] w-[15px] h-[15px] rounded-full"></div>
                            <h1 className="text-[16px] font-[600] mt-0.5">
                              Red
                            </h1>
                          </div>
                        </MenuItem>
                        <MenuItem value={"Blue"}>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#007bff] w-[15px] h-[15px] rounded-full"></div>
                            <h1 className="text-[16px] font-[600] mt-0.5">
                              Blue
                            </h1>
                          </div>
                        </MenuItem>
                        <MenuItem value={"Green"}>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#28a745] w-[15px] h-[15px] rounded-full"></div>
                            <h1 className="text-[16px] font-[600] mt-0.5">
                              Green
                            </h1>
                          </div>
                        </MenuItem>
                        <MenuItem value={"Yellow"}>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#ffeb3b] w-[15px] h-[15px] rounded-full border"></div>
                            <h1 className="text-[16px] font-[600] mt-0.5">
                              Yellow
                            </h1>
                          </div>
                        </MenuItem>
                        <MenuItem value={"Black"}>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#000000] w-[15px] h-[15px] rounded-full"></div>
                            <h1 className="text-[16px] font-[600] mt-0.5">
                              Black
                            </h1>
                          </div>
                        </MenuItem>
                        <MenuItem value={"White"}>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#ffffff] w-[15px] h-[15px] rounded-full border"></div>
                            <h1 className="text-[16px] font-[600] mt-0.5">
                              White
                            </h1>
                          </div>
                        </MenuItem>
                        <MenuItem value={"Purple"}>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#6f42c1] w-[15px] h-[15px] rounded-full"></div>
                            <h1 className="text-[16px] font-[600] mt-0.5">
                              Purple
                            </h1>
                          </div>
                        </MenuItem>
                        <MenuItem value={"Orange"}>
                          <div className="flex items-center gap-1">
                            <div className="bg-[#fd7e14] w-[15px] h-[15px] rounded-full"></div>
                            <h1 className="text-[16px] font-[600] mt-0.5">
                              Orange
                            </h1>
                          </div>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="Size w-full">
                  <div className="Size mb-2">
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
                        Select Size
                      </InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={size}
                        label="Featured?"
                        onChange={handleSize}
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
                        <MenuItem value={"S"}>S</MenuItem>
                        <MenuItem value={"M"}>M</MenuItem>
                        <MenuItem value={"L"}>L</MenuItem>
                        <MenuItem value={"XL"}>XL</MenuItem>
                        <MenuItem value={"XXL"}>XXL</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center pt-3 mb-5">
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

export default ProductsItemsNew;
