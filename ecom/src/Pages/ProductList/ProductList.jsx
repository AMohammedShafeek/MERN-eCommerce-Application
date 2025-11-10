import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem/ProductItem";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItemListView from "../../components/ProductItem/ProductItemListView";
import Pagination from "@mui/material/Pagination";

const ProductList = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="bg-white py-5  border-t border-t-gray-300">
      <div className="bg-white">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[15%] h-full bg-white p-3">
            <div className="container pt-2">
              <Breadcrumbs aria-label="breadcrumb" className="pl-1">
                <Link
                  underline="hover"
                  color="inherit"
                  href="/"
                  className="link transition-all duration-300 !font-[600]"
                >
                  HOME
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/"
                  className="link transition-all duration-300 !font-[600]"
                >
                  FASHION
                </Link>
              </Breadcrumbs>
            </div>
            <Sidebar></Sidebar>
          </div>
          <div className="rightContent w-[85%] border-l-1 border-l-gray-300 pl-10">
            <div className="bg-body p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 itemViewActions">
                <Button
                  className={`!link !w-[40px] !h-[40px] !min-w-[40px] !rounded-full transition-all duration-300 ${
                    itemView == "list" && "active"
                  }`}
                >
                  <LuMenu
                    className="text-[40px]"
                    onClick={() => setItemView("list")}
                  ></LuMenu>
                </Button>
                <Button
                  className={`!link !w-[37px] !h-[37px] !min-w-[37px] !rounded-full transition-all duration-300 ${
                    itemView == "grid" && "active"
                  }`}
                >
                  <IoGridSharp
                    className="text-[30px]"
                    onClick={() => setItemView("grid")}
                  ></IoGridSharp>
                </Button>
                <span className="text-[14px] pl-2 font-[500] text-[rgba(0,0,0,0.6)]">
                  There are 27 products.
                </span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end">
                <span className="text-[14px] pl-2.5 font-[500] text-[rgba(0,0,0,0.6)]">
                  Sort By :
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-[12px] !pt-2 !text-[#ff5252] !font-[600] !capitalize !border-1 !borer-[#ff5252] !px-5 !mx-1"
                >
                  SELECT OPTION
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !font-[600] !capitalize"
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !font-[600] !capitalize"
                  >
                    Price: Low to High
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !font-[600] !capitalize"
                  >
                    Price: High to Low
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-[12px] !text-black !font-[600] !capitalize"
                  >
                    Highly Rated
                  </MenuItem>
                </Menu>
              </div>
            </div>

            <div
              className={`grid ${
                itemView === "grid"
                  ? `grid-cols-4 md:grid-cols-4`
                  : `grid-cols-1 md:grid-cols-1`
              }  gap-4`}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem></ProductItem>
                  <ProductItem></ProductItem>
                  <ProductItem></ProductItem>
                  <ProductItem></ProductItem>
                  <ProductItem></ProductItem>
                  <ProductItem></ProductItem>
                  <ProductItem></ProductItem>
                  <ProductItem></ProductItem>
                </>
              ) : (
                <>
                  <ProductItemListView></ProductItemListView>
                  <ProductItemListView></ProductItemListView>
                  <ProductItemListView></ProductItemListView>
                  <ProductItemListView></ProductItemListView>
                  <ProductItemListView></ProductItemListView>
                  <ProductItemListView></ProductItemListView>
                  <ProductItemListView></ProductItemListView>
                  <ProductItemListView></ProductItemListView>
                </>
              )}
            </div>
            <div className="flex mt-10 items-center justify-center">
              <Pagination
                count={10}
                variant="outlined"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
