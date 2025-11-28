import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { Link } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "@mui/material/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

const ProductsList = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <div>
      <div>
        <h1 className="text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          PRODUCTS{" "}
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
                Product ID
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">Name</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Image</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Rating</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Stock</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Price</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Sales</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Brand</TableCell>
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
              <TableCell className=" !text-[14px] !font-bold">
                TAGDO Gray Shirt | Casual Shirt
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                <img
                  src="../../../src/assets/Products/p2-2.jpg"
                  alt=""
                  className="object-contain w-[60px] h-[60px]"
                />
              </TableCell>
              <TableCell>
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">120</TableCell>
              <TableCell>
                <h1 className="line-through flex items-center justify-center !text-[14px] !font-[500]">
                  899
                </h1>
                <h1 className="text-green-600 px-2 flex items-center justify-center rounded-sm bg-green-200 !text-[16px] !font-black">
                  399
                </h1>
              </TableCell>
              <TableCell>
                <p className="text-[13px] font-[500]">
                  <span className="pr-1 font-bold">128</span>Sales
                </p>
                <ProgressBar value={20}></ProgressBar>
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">TAGDO</TableCell>
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
              <TableCell className="!text-[14px] !font-bold">2</TableCell>
              <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                PP652357
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                TAGDO Gray Shirt | Casual Shirt
              </TableCell>
              <TableCell className="!text-[14px] !font-bold">
                <img
                  src="../../../src/assets/Products/p2-2.jpg"
                  alt=""
                  className="object-contain w-[60px] h-[60px]"
                />
              </TableCell>
              <TableCell>
                <Rating
                  name="size-small"
                  defaultValue={2}
                  size="small"
                  readOnly
                />
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">120</TableCell>
              <TableCell>
                <h1 className="line-through flex items-center justify-center !text-[14px] !font-[500]">
                  899
                </h1>
                <h1 className="text-green-600 px-2 flex items-center justify-center rounded-sm bg-green-200 !text-[16px] !font-black">
                  399
                </h1>
              </TableCell>
              <TableCell>
                <p className="text-[13px] font-[500]">
                  <span className="pr-1 font-bold">254</span>Sales
                </p>
                <ProgressBar value={80}></ProgressBar>
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">TAGDO</TableCell>
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

export default ProductsList;
