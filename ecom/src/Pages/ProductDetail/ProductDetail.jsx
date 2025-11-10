import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import MainImage from "../../components/MainImage/MainImage";

const ProdductDetail = () => {
  return (
    <>
      <div className="bg-white">
        <div className="w-full bg-body py-4 px-5 rounded-md flex items-center justify-start">
          <Breadcrumbs aria-label="breadcrumb" className="container pl-20">
            <Link
              underline="hover"
              color="inherit"
              to={"/"}
              className="link transition-all duration-300 !text-[14px] !font-[600] cursor-pointer"
            >
              HOME
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to={"/"}
              className="link transition-all duration-300 !text-[14px] !font-[600] cursor-pointer"
            >
              FASHION
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white pb-13">
        <div className="container flex gap-4 py-9">
          <div className="productImage w-[29%]">
            <MainImage></MainImage>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProdductDetail;
