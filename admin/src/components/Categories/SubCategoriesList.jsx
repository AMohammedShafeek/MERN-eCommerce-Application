import React, { useContext, useEffect, useState } from "react";
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
import { deleteData, getData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const SubCategoriesList = (props) => {
  const context = useContext(MyContext);

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const navigate = useNavigate();

  const editCat = (id) => {
    navigate(`/edit-category/${id}`);
  };

  const deleteCatConfirm = (id) => {
    context.openConfirmBox({
      type: "delete",
      message: "Category deleted successfully",
      onConfirm: () => context.deleteCat(id),
    });
  };

  const deleteMultiCatConfirm = (id) => {
    context.openConfirmBox({
      type: "delete",
      message: "Category deleted successfully",
      onConfirm: () => context.deleteMultiple("/api/category/delete-multiple"),
    });
  };

  const getSubCategoryList = (categories = []) => {
    let list = [];

    categories.forEach((parent) => {
      parent.children?.forEach((child) => {
        list.push({
          _id: child._id,
          subCatName: child.name,
          parentCatName: parent.name,
        });
      });
    });

    return list;
  };

  const subCategoryList = getSubCategoryList(context?.catData);

  return (
    <div>
      <div className="flex items-center">
        <h1 className="w-full text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          SUB-CATEGORIES{" "}
        </h1>
        <Button
          disabled={context.sortedIds.length === 0}
          onClick={() => deleteMultiCatConfirm()}
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
                    subCategoryList.length > 0 &&
                    context.sortedIds.length === subCategoryList.length
                  }
                  indeterminate={
                    context.sortedIds.length > 0 &&
                    context.sortedIds.length < subCategoryList.length
                  }
                  onChange={(e) =>
                    context.addAllIds(e.target.checked, context?.catData)
                  }
                  {...label}
                />
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">S.I</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Name</TableCell>
              <TableCell  align="center" className=" !text-[14px] !font-bold !min-w-[140px]">
                Parent Category
              </TableCell>
              <TableCell  align="center" className=" !text-[14px] !font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subCategoryList.length > 0 ? (
              subCategoryList.map((item, index) => (
                <TableRow key={item._id} className="bg-white">
                  <TableCell>
                    <Checkbox
                      {...label}
                      checked={context.sortedIds.includes(item?._id)}
                      onClick={() => 
                        context.handleSortedIds(item?._id)
                      }
                    />
                  </TableCell>

                  <TableCell className="!text-[14px] !font-bold">
                    {index + 1}
                  </TableCell>

                  <TableCell className="!text-[14px] !font-bold">
                    {item.subCatName}
                  </TableCell>

                  <TableCell align="center" className="!text-[14px] !font-bold">
                    {item.parentCatName}
                  </TableCell>

                  <TableCell align="center" className="!min-w-[150px]">
                    <Tooltip title="Edit">
                      <Button
                        onClick={() => editCat(item._id)}
                        className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200"
                      >
                        <MdEdit className="text-[30px]" />
                      </Button>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <Button
                        onClick={() => deleteCatConfirm(item._id)}
                        className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200"
                      >
                        <MdDelete className="text-[30px]" />
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  align="center"
                  className="!py-6 !font-semibold"
                >
                  No sub-categories found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SubCategoriesList;
