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
import CircularProgress from "@mui/material/CircularProgress";
import { deleteData, editData, getData, postData } from "../../utils/api";
import { useNavigate, useParams } from "react-router-dom";

const ProductsItemsEdit = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isRemoveLoading, setIsRemoveLoading] = useState(false);

  const [previews, setPreviews] = useState([]);

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [featured, setFeatured] = useState("");
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const [formFeilds, setFormFeilds] = useState({
    name: "",
    description: "",
    images: [],
    brand: "",
    price: 0,
    oldPrice: 0,
    category: null,
    catName: "",
    catId: "",
    subCatName: "",
    subCatId: "",
    stock: 0,
    isfeatured: false,
    discount: 0,
    size: [],
    color: [],
  });

  // const valideValue = Object.values(formFeilds).every((el) => el);
  const valideValue = true;

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  useEffect(() => {
    getData(`/api/product/${id}`).then((res) => {
      if (res?.error !== true) {
        setFormFeilds({
          name: res?.product?.name,
          description: res?.product?.description,
          images: res?.product?.images,
          brand: res?.product?.brand,
          price: res?.product?.price,
          oldPrice: res?.product?.oldPrice,
          category: res?.product?.category,
          catName: res?.product?.catName,
          catId: res?.product?.catId,
          subCatName: res?.product?.subCatName,
          subCatId: res?.product?.subCatId,
          stock: res?.product?.stock,
          isfeatured: res?.product?.isfeatured,
          discount: res?.product?.discount,
          size: res?.product?.size,
          color: res?.product?.color,
        });
        setPreviews(res?.product?.images || []);
      } else {
        context.openAlertBox("error", res?.message, "getProductByID-error");
        navigate("/products-data");
      }
    });
  }, [id]);

  useEffect(() => {
    if (formFeilds.catId && context.catData && context.catData.length > 0) {
      const selectedCategory = context.catData.find(
        (cat) => cat._id === formFeilds.catId,
      );

      setSubCategories(selectedCategory?.children || []);
    }
  }, [formFeilds.catId, context.catData]);

  console.log(formFeilds);

  const handleCategory = (event) => {
    setCategory(event.target.value);
    formFeilds.catId = event.target.value;
    formFeilds.category = event.target.value;
    setSubCategory("");
    const selectedCategory = context.catData.find(
      (cat) => cat._id === event.target.value,
    );

    setSubCategories(selectedCategory?.children || []);
  };
  const handleSubCategory = (event) => {
    setSubCategory(event.target.value);
    formFeilds.subCatId = event.target.value;
  };
  const handleFeatured = (event) => {
    alert(event.target.value);
    setFeatured(event.target.value);
    formFeilds.isfeatured = event.target.value;
  };
  const handleColor = (event) => {
    setColor(event.target.value);
    formFeilds.color = event.target.value;
  };
  const handleSize = (event) => {
    setSize(event.target.value);
    formFeilds.size = event.target.value;
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFeilds({
      ...formFeilds,
      [name]: value,
    });
  };

  const selectedCatNameFun = (catName) => {
    formFeilds.catName = catName;
  };

  const selectedSubCatNameFun = (subCatName) => {
    formFeilds.subCatName = subCatName;
  };

  const setPreviewsFun = (previewsArr) => {
    const updatedImages = [...previews, ...previewsArr];
    setPreviews(updatedImages);
    formFeilds.images = updatedImages;
  };

  const removeImg = (image, index) => {
    setIsRemoveLoading(true);
    var imageArr = [];
    imageArr = previews;
    deleteData(`/api/product/deleteImage?imageUrl=${image}`).then((res) => {
      if (res?.error !== true) {
        imageArr.splice(index, 1);
        setPreviews([]);
        setIsRemoveLoading(false);
        setTimeout(() => {
          setPreviews(imageArr);
          formFeilds.images = imageArr;
        }, 100);
      } else {
        setIsRemoveLoading(false);
        context.openAlertBox("error", res?.message, "removeProuctImage-error");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formFeilds.name === "") {
      context.openAlertBox(
        "error",
        "Enter Category Name",
        "MissingCatName-error",
      );
      setIsLoading(false);
      return;
    }

    editData(`/api/product/updateProduct/${id}`, formFeilds, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.openAlertBox("success", res?.message, "updateProduct-success");
        setFormFeilds({
          name: "",
          description: "",
          images: [],
          brand: "",
          price: 0,
          oldPrice: 0,
          category: null,
          catName: "",
          catId: "",
          subCatName: "",
          subCatId: "",
          stock: 0,
          isfeatured: false,
          discount: 0,
          size: [],
          color: [],
        });
        setIsLoading(false);
        navigate("/products-data");
      } else {
        context.openAlertBox("error", res?.message, "updateProduct-error");
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
        >
        </div>
        <div
          className={`sidebarWrapper my-7 transition-all duration-300 ease-in-out w-full min-h-0
          ${context.isOpenSideBar ? "lg:w-[80%]" : "lg:w-full"}
        `}
        >
          <div className="shadow-md rounded-md p-3 bg-white mt-5">
            <div className="cartHead p-2 pb-4 mb-3 border-b border-[#ff5252]">
              <h2 className="font-bold text-[18px]">UPDATE PRODUCT</h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full container mt-5 pt-3 my-3"
            >
              <div className="flex items-center">
                <div className="upload">
                  <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                    Image & Gallery
                  </p>
                  <div className="flex flex-wrap items-center gap-5">
                    {previews?.length !== 0 &&
                      previews?.map((image, index) => {
                        return (
                          <div key={index} className="relative wrapper">
                            <div>
                              <IoMdClose
                                onClick={() => removeImg(image, index)}
                                className="text-white cursor-pointer hover:bg-black bg-red-500 transition-all duration-300 rounded-full z-10 text-[25px] absolute -top-2 -right-2"
                              ></IoMdClose>
                              <div
                                className="relative group cursor-pointer mb-5 bg-[#fff8f8] transition-all duration-300 flex flex-col items-center hover:bg-[#fcc9c9] justify-center rounded-md overflow-hidden border border-dashed border-[#ff5252]
                        w-[150px] h-[150px]"
                              >
                                <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
                                  <LazyLoadImage
                                    effect="blur"
                                    src={image}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    <div>
                      <UploadBox
                        image="Add Image"
                        name="images"
                        url="/api/product/uploadImages"
                        setPreviewsFun={setPreviewsFun}
                        setIsLoading={setIsLoading}
                        multiple={true}
                        isRemoveLoading={isRemoveLoading}
                        setIsUploading={setIsUploading}
                      ></UploadBox>
                    </div>
                  </div>
                </div>
              </div>
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Product Name and Brand
              </p>
              <div className="flex flex-col md:flex-row items-center gap-3 mb-5">
                <div className="col1 w-full md:w-[70%]">
                  <TextField
                    type="text"
                    id="name"
                    name="name"
                    value={formFeilds.name}
                    disabled={isUploading}
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
                    onChange={onChangeInput}
                  />
                </div>
                <div className="col2 w-full md:w-[30%]">
                  <TextField
                    type="text"
                    id="brand"
                    name="brand"
                    value={formFeilds.brand}
                    disabled={isUploading}
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
                    onChange={onChangeInput}
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
                    id="description"
                    name="description"
                    value={formFeilds.description}
                    disabled={isUploading}
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
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <p className="transition-all duration-300 text-[14px] text-black font-bold mb-2">
                Product Category & Price
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
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
                        value={formFeilds.catId}
                        disabled={isUploading}
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
                        {context?.catData?.map((item) => (
                          <MenuItem
                            key={item._id}
                            value={item._id}
                            onClick={() => selectedCatNameFun(item?.name)}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
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
                        value={
                          subCategories.length > 0 ? formFeilds.subCatId : ""
                        }
                        label="Product Category"
                        onChange={handleSubCategory}
                        disabled={isUploading}
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
                        {subCategories.map((item) => (
                          <MenuItem
                            key={item._id}
                            value={item._id}
                            onClick={() => selectedSubCatNameFun(item?.name)}
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="Price w-full">
                  <div className="Price mb-2">
                    <TextField
                      type="text"
                      id="oldPrice"
                      name="oldPrice"
                      value={formFeilds.oldPrice}
                      disabled={isUploading}
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
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className="sPrice w-full">
                  <div className="sPrice mb-2">
                    <TextField
                      type="text"
                      id="price"
                      name="price"
                      value={formFeilds.price}
                      disabled={isUploading}
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
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
              </div>
              <p className="transition-all mt-2 duration-300 text-[14px] text-black font-bold mb-2">
                Product Details
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3">
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
                        value={formFeilds.isfeatured}
                        disabled={isUploading}
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
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="Stock w-full">
                  <div className="Stock mb-2">
                    <TextField
                      type="text"
                      id="stock"
                      name="stock"
                      value={formFeilds.stock}
                      disabled={isUploading}
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
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <div className="Discount w-full">
                  <div className="Discount mb-2">
                    <TextField
                      type="text"
                      id="discount"
                      name="discount"
                      value={formFeilds.discount}
                      disabled={isUploading}
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
                      onChange={onChangeInput}
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
                        multiple
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formFeilds.color}
                        disabled={isUploading}
                        label="Color"
                        onChange={handleColor}
                        MenuProps={MenuProps}
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
                        multiple
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formFeilds.size}
                        disabled={isUploading}
                        label="Size"
                        onChange={handleSize}
                        MenuProps={MenuProps}
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

export default ProductsItemsEdit;
