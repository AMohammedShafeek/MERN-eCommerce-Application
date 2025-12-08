import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductsList from "../../components/Products/ProductsList";
import Pagination from "@mui/material/Pagination";
import { FaCirclePlus } from "react-icons/fa6";
import Search from "../../components/Search/Search";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const ProductsData = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
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
            <div className="w-[80%]">
              <Search placeHolder="Search Products by ProductID or Name or Category"></Search>
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
