import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/Sidebar.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(false);
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] =
    useState(false);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(false);
  const [isOpenPriceFilter, setIsOpenPriceFilter] = useState(false);
  const [isOpenRatingFilter, setIsOpenRatingFilter] = useState(false);

  return (
    <aside className="sidebar py-7">
      <div className="box">
        <div className="SidebarFlex flex justify-between mr-5">
          <h3 className="w-full pb-3 text-[16px] font-[600]">
            Shop by categories
          </h3>
          <Button
            className="!ml-4 !w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all duration-300"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </Button>
        </div>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4">
            <FormControlLabel
              control={<Checkbox />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Accessories"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Jewellery"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Wellness"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <div className="SidebarFlex flex justify-between mr-5">
          <h3 className="w-full pb-3 text-[16px] font-[600]">Availability</h3>
          <Button
            className="!ml-4 !w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all duration-300"
            onClick={() =>
              setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)
            }
          >
            {isOpenAvailabilityFilter === true ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </Button>
        </div>

        <Collapse isOpened={isOpenAvailabilityFilter}>
          <div className="scroll px-4">
            <FormControlLabel
              control={<Checkbox />}
              label="Available (17)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="In Stock (10)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Out of Stock (90)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <div className="SidebarFlex flex justify-between mr-5">
          <h3 className="w-full pb-3 text-[16px] font-[600]">Size</h3>
          <Button
            className="!ml-4 !w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all duration-300"
            onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </Button>
        </div>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4">
            <FormControlLabel
              control={<Checkbox />}
              label="Small (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Medium (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Large (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="XL (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="XXL (12)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="XXXL (12)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <div className="SidebarFlex flex justify-between mr-5">
          <h3 className="w-full pb-3 text-[16px] font-[600]">
            Filter by Price
          </h3>
          <Button
            className="!ml-4 !w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all duration-300"
            onClick={() => setIsOpenPriceFilter(!isOpenPriceFilter)}
          >
            {isOpenPriceFilter === true ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </Button>
        </div>
        <Collapse isOpened={isOpenPriceFilter}>
          <div className="box  pr-8 mt-2">
            <RangeSlider></RangeSlider>
            <div className="flex pt-2 pb-2 priceRange">
              <span className="text-[14px]">
                From: <strong className="text-dark">{100}</strong>
              </span>
              <span className="ml-auto text-[14px]">
                To: <strong className="text-dark">{10000}</strong>
              </span>
            </div>
          </div>
        </Collapse>
      </div>
      <div className="box">
        <div className="SidebarFlex flex justify-between mr-5">
          <h3 className="w-full pb-3 text-[16px] font-[600]">
            Filter by Rating
          </h3>
          <Button
            className="!ml-4 !w-[30px] !h-[30px] !min-w-[30px] !rounded-full transition-all duration-300"
            onClick={() => setIsOpenRatingFilter(!isOpenRatingFilter)}
          >
            {isOpenRatingFilter === true ? (
              <FaAngleUp></FaAngleUp>
            ) : (
              <FaAngleDown></FaAngleDown>
            )}
          </Button>
        </div>
        <Collapse isOpened={isOpenRatingFilter}>
          <div className="box">
            <div className="w-full">
              <Rating
                name="size-small"
                defaultValue={5}
                size="medium"
                readOnly
              />
            </div>
            <div className="w-full">
              <Rating
                name="size-small"
                defaultValue={4}
                size="medium"
                readOnly
              />
            </div>
            <div className="w-full">
              <Rating
                name="size-small"
                defaultValue={3}
                size="medium"
                readOnly
              />
            </div>
            <div className="w-full">
              <Rating
                name="size-small"
                defaultValue={2}
                size="medium"
                readOnly
              />
            </div>
            <div className="w-full">
              <Rating
                name="size-small"
                defaultValue={1}
                size="medium"
                readOnly
              />
            </div>
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
