import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductsList from "../../components/Products/ProductsList";
import Pagination from "@mui/material/Pagination";
import { FaCirclePlus } from "react-icons/fa6";
import Search from "../../components/Search/Search";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { getData } from "../../utils/api";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const ProductsData = () => {
  const context = useContext(MyContext);

  const [category, setCategory] = useState("1");
  const [subCategory, setSubCategory] = useState("1");
  const [subCategories, setSubCategories] = useState([]);

  const navigate = useNavigate();

  const handleCategory = (event) => {
    const catId = event.target.value;

    setCategory(catId);
    setSubCategory("1");
    context.setSortedIds([]);

    if (!context?.catData?.length) {
      setSubCategories([]);
      return;
    }

    if (catId === "1") {
      setSubCategories([]);
    }

    const selectedCategory = context.catData.find((cat) => cat._id === catId);

    setSubCategories(selectedCategory?.children || []);
  };

  const handleSubCategory = (event) => {
    setSubCategory(event.target.value);
    context.setSortedIds([]);
  };

  useEffect(() => {
    if (category === "1" && subCategory === "1") {
      context.productsData();
      return;
    }

    if (category !== "1" && subCategory === "1") {
      getData(`/api/product/getByCategoryId/${category}`).then((res) => {
        if (res?.error !== true) {
          context.setProdData(res?.data);
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
      return;
    }

    if (subCategory !== "1") {
      getData(`/api/product/getBySubCategoryId/${subCategory}`).then((res) => {
        if (res?.error !== true) {
          context.setProdData(res?.data);
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
    }
  }, [category, subCategory]);

  useEffect(() => {
    context.categoryData();
    context.subCategoryData();
    context.productsData();
  }, []);

  return (
    <section>
      <div className="container flex pt-10">
        <div
          className={`sidebarWrapper h-full bg-white transition-all duration-300 ease-in-out 
                ${context.isOpenSideBar ? "w-[20%]" : "w-0 overflow-hidden"}`}
        >
          <Sidebar></Sidebar>
        </div>
        <div
          className={`sidebarWrapper my-7 h-full transition-all duration-300 ease-in-out 
                ${context.isOpenSideBar ? "w-[80%]" : "w-full"}`}
        >
          <div className="flex items-center w-full gap-2">
            <div
              onClick={() => {
                navigate("/products-new");
              }}
              className="flex w-[20%] items-center h-[50px] min-h-[50px] add bg-black cursor-pointer gap-2 py-1 justify-center rounded-md"
            >
              <FaCirclePlus className="text-white text-[28px]"></FaCirclePlus>
              <h1 className="text-white text-[18px] font-bold">
                Add New Product
              </h1>
            </div>
            <div className="w-[40%]">
              <div className="w-full flex gap-2 items-center justify-between rounded-md h-[50px] flex items-center px-2">
                <Select
                  className="!bg-white w-full"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{
                    height: "50px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  }}
                  value={category}
                  onChange={handleCategory}
                  label="Category"
                >
                  <MenuItem value={"1"}>
                    <em>Filter by Category</em>
                  </MenuItem>
                  {context?.catData?.length > 0 &&
                    context?.catData?.map((item) => (
                      <MenuItem key={item._id} value={item._id}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
                <Select
                  className="!bg-white w-full"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{
                    height: "50px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  }}
                  value={subCategory}
                  onChange={handleSubCategory}
                  disabled={subCategories.length === 0}
                  label="Sub Category"
                >
                  <MenuItem value={"1"}>
                    <em>Filter by Sub Category</em>
                  </MenuItem>
                  {subCategories.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className="w-[40%]">
              <Search placeHolder="Search Products by Name"></Search>
            </div>
          </div>
          <ProductsList></ProductsList>
          <div className="flex mt-5 mb-10 items-center justify-center">
            <Pagination
              count={10}
              variant="outlined"
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsData;
