import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const HomeSliderList = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <div>
      <div>
        <h1 className="text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          Home Sliders{" "}
        </h1>
      </div>
      <TableContainer
        sx={{
          width: "100%",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        <Table
          sx={{
            width: "full",
            backgroundColor: "white",
          }}
          aria-label="simple table"
        >
          <TableHead className="bg-white">
            <TableRow>
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">S.I</TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                Slider ID
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">Name</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Image</TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                Category
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="bg-white">
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">1</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Every wear
              </TableCell>
              <TableCell className="!text-left !font-bold !text-[14px] flex items-center justify-start">
                <img
                  src="../../../src/assets/Sliders/Slider-1.png"
                  alt=""
                  className="object-contain h-[80px]"
                />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                Women Fasion
              </TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                    <MdEdit className="text-[30px]"></MdEdit>
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                    <MdDelete className="text-[30px]"></MdDelete>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white">
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">1</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Every wear
              </TableCell>
              <TableCell className="!text-left !font-bold !text-[14px] flex items-center justify-start">
                <img
                  src="../../../src/assets/Sliders/Slider-2.png"
                  alt=""
                  className="object-contain h-[80px]"
                />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                Women Fasion
              </TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                    <MdEdit className="text-[30px]"></MdEdit>
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                    <MdDelete className="text-[30px]"></MdDelete>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white">
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">1</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Every wear
              </TableCell>
              <TableCell className="!text-left !font-bold !text-[14px] flex items-center justify-start">
                <img
                  src="../../../src/assets/Sliders/Slider-3.png"
                  alt=""
                  className="object-contain h-[80px]"
                />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                Women Fasion
              </TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                    <MdEdit className="text-[30px]"></MdEdit>
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                    <MdDelete className="text-[30px]"></MdDelete>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white">
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">1</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Every wear
              </TableCell>
              <TableCell className="!text-left !font-bold !text-[14px] flex items-center justify-start">
                <img
                  src="../../../src/assets/Sliders/Slider-4.png"
                  alt=""
                  className="object-contain h-[80px]"
                />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                Women Fasion
              </TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                    <MdEdit className="text-[30px]"></MdEdit>
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                    <MdDelete className="text-[30px]"></MdDelete>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white">
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">1</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Every wear
              </TableCell>
              <TableCell className="!text-left !font-bold !text-[14px] flex items-center justify-start">
                <img
                  src="../../../src/assets/Sliders/Slider-5.png"
                  alt=""
                  className="object-contain h-[80px]"
                />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                Women Fasion
              </TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                    <MdEdit className="text-[30px]"></MdEdit>
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                    <MdDelete className="text-[30px]"></MdDelete>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
            <TableRow className="bg-white">
              <TableCell>
                <Checkbox {...label} />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">1</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                PP652357
              </TableCell>
              <TableCell className="ProdductID !text-[14px] !font-bold">
                Every wear
              </TableCell>
              <TableCell className="!text-left !font-bold !text-[14px] flex items-center justify-start">
                <img
                  src="../../../src/assets/Sliders/Slider-6.png"
                  alt=""
                  className="object-contain h-[80px]"
                />
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                Women Fasion
              </TableCell>
              <TableCell>
                <Tooltip title="Edit">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                    <MdEdit className="text-[30px]"></MdEdit>
                  </Button>
                </Tooltip>
                <Tooltip title="Delete">
                  <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                    <MdDelete className="text-[30px]"></MdDelete>
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HomeSliderList;
