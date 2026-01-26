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
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const CategoriesList = () => {
  const context = useContext(MyContext);
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const navigate = useNavigate();

  useEffect(() => {
    context.categoryData();
  }, []);

  const editCat = (id) => {
    navigate(`/edit-category/${id}`);
  };

  const deleteCatConfirm = (id) => {
    context.openConfirmBox({
      type: "delete",
      message: "Category deleted successfully",
      onConfirm: () => deleteCat(id),
    });
  };

  const deleteCat = (id) => {
    deleteData(`/api/category/${id}`).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        context.categoryData();
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };

  const deleteMultiCatConfirm = (id) => {
    context.openConfirmBox({
      type: "delete",
      message: "Category deleted successfully",
      onConfirm: () => context.deleteMultiple("/api/category/delete-multiple"),
    });
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="w-full text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          CATEGORIES{" "}
        </h1>
        <h1
          onClick={() => deleteMultiCatConfirm()}
          className={`"w-[20%] transition-all duration-200 ml-2 cursor-pointer text-center text-[18px] font-bold ${context?.sortedIds?.length > 0 ? "bg-[#ff5252] text-white" : "bg-gray-400 text-white"}  p-1 rounded-md my-3"`}
        >
          DELETE
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
                <Checkbox
                  checked={
                    context.catData.length > 0 &&
                    context.sortedIds.length === context.catData.length
                  }
                  indeterminate={
                    context.sortedIds.length > 0 &&
                    context.sortedIds.length < context.catData.length
                  }
                  onChange={(e) =>
                    context.addAllIds(e.target.checked, context?.catData)
                  }
                  {...label}
                />
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">S.I</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Name</TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                Sub-Categories
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {context?.catData?.length > 0 ? (
              context.catData.map((item, index) => (
                <TableRow key={item._id} className="bg-white">
                  <TableCell>
                    <Checkbox
                      {...label}
                      checked={context.sortedIds.includes(item?._id)}
                      onClick={() => context.handleSortedIds(item?._id)}
                    />
                  </TableCell>

                  <TableCell className="!text-[14px] !font-bold">
                    {index + 1}
                  </TableCell>

                  <TableCell className="!text-[14px] !font-bold">
                    {item.name}
                  </TableCell>

                  <TableCell className="!text-[14px] !font-bold">
                    {item.children?.length > 0 ? (
                      <Stack
                        direction="row"
                        spacing={1}
                        rowGap={1}
                        flexWrap="wrap"
                      >
                        {item.children.map((child) => (
                          <Chip
                            key={child._id}
                            label={child.name}
                            sx={{
                              backgroundColor: "#ff5252",
                              color: "#fff",
                              fontWeight: "bold",
                            }}
                          />
                        ))}
                      </Stack>
                    ) : (
                      "—"
                    )}
                  </TableCell>

                  <TableCell>
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
                  No categories found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CategoriesList;
