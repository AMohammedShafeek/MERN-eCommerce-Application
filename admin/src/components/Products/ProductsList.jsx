import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "@mui/material/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { deleteData } from "../../utils/api";

const ProductsList = () => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    context.setSortedIds([]);
    context.productsData();
  }, []);

  const editProduct = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const deleteMultiProductConfirm = (id) => {
    context.openConfirmBox({
      type: "delete",
      message: "Category deleted successfully",
      onConfirm: () => context.deleteMultiple("/api/product/delete-multiple"),
    });
  };

  const deleteProductConfirm = (id) => {
    context.openConfirmBox({
      type: "delete",
      message: "Product deleted successfully",
      onConfirm: () => deleteProd(id),
    });
  };

  const deleteProd = (id) => {
    deleteData(`/api/product/${id}`).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.productsData();
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="w-full text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          PRODUCTS{" "}
        </h1>
        <Button
          disabled={context.sortedIds.length === 0}
          onClick={() => deleteMultiProductConfirm()}
        >
          <h1
            className={`"w-[20%] h-[35px] flex items-center transition-all duration-200 ml-2 px-3 cursor-pointer text-center text-[18px] font-bold ${context?.sortedIds?.length > 0 ? "bg-[#ff5252] text-white" : "bg-gray-400 text-white"}  p-1 rounded-md my-3"`}
          >
            DELETE
          </h1>
        </Button>
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
                <Checkbox
                  checked={
                    context.prodData.length > 0 &&
                    context.sortedIds.length === context.prodData.length
                  }
                  indeterminate={
                    context.sortedIds.length > 0 &&
                    context.sortedIds.length < context.prodData.length
                  }
                  onChange={(e) =>
                    context.addAllIds(e.target.checked, context?.prodData)
                  }
                  {...label}
                />
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                S.I
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Name
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Image
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Category
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Sub Category
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Rating
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Stock
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Price
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Sales
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Brand
              </TableCell>
              <TableCell align="center" className=" !text-[14px] !font-bold">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {context?.prodData?.length > 0 ? (
              context.prodData.map((item, index) => (
                <TableRow key={index} className="bg-white">
                  <TableCell>
                    <Checkbox
                      {...label}
                      checked={context.sortedIds.includes(item?._id)}
                      onClick={() => context.handleSortedIds(item?._id)}
                    />
                  </TableCell>
                  <TableCell align="center" className="!text-[14px] !font-bold">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center" className="!text-[14px] !font-bold">
                    {item?.name}
                  </TableCell>
                  <TableCell align="center" className="!text-[14px] !font-bold">
                    <img
                      src={item?.images[0]}
                      className="object-contain w-[60px] h-[60px]"
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    className=" !text-[14px] !font-bold"
                  >
                    {item?.category?.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="!text-[14px] !font-bold !min-w-[150px]"
                  >
                    {item?.subCatName || "-"}
                  </TableCell>
                  <TableCell align="center">
                    <Rating
                      name="size-small"
                      defaultValue={item?.Rating}
                      size="small"
                      readOnly
                    />
                  </TableCell>
                  <TableCell align="center" className="!text-[14px] !font-bold">
                    {item?.stock}
                  </TableCell>
                  <TableCell align="center">
                    <h1 className="line-through flex items-center justify-center !text-[14px] !font-[500]">
                      &#x20b9;{item?.oldPrice}
                    </h1>
                    <h1 className="text-green-600 px-2 flex items-center justify-center rounded-sm bg-green-200 !text-[16px] !font-black">
                      &#x20b9;{item?.price}
                    </h1>
                  </TableCell>
                  <TableCell align="center">
                    <p className="text-[13px] font-[500]">
                      <span className="pr-1 font-bold">{item?.sale}</span>Sales
                    </p>
                    <ProgressBar value={20}></ProgressBar>
                  </TableCell>
                  <TableCell align="center" className="!text-[14px] !font-bold">
                    {item?.brand}
                  </TableCell>
                  <TableCell align="center" className="!min-w-[120px]">
                    <Tooltip title="Edit">
                      <Button
                        onClick={() => editProduct(item._id)}
                        className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200"
                      >
                        <MdEdit className="text-[30px]"></MdEdit>
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <Button
                        onClick={() => deleteProductConfirm(item._id)}
                        className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200"
                      >
                        <MdDelete className="text-[30px]"></MdDelete>
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={12}
                  align="center"
                  className="!py-6 !font-semibold"
                >
                  No Products found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsList;
