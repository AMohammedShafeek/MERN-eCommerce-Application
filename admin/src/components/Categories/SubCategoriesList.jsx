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

const SubCategoriesList = () => {
  const context = useContext(MyContext);

  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    context.subCategoryData();
  }, [refresh]);

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
        context.subCategoryData();
      } else {
        context.openAlertBox("error", res?.message);
      }
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
      <div>
        <h1 className="text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          Sub-Categories
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
              <TableCell className=" !text-[14px] !font-bold">Name</TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                Parent Category
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subCategoryList.length > 0 ? (
              subCategoryList.map((item, index) => (
                <TableRow key={item._id} className="bg-white">
                  <TableCell>
                    <Checkbox {...label} />
                  </TableCell>

                  <TableCell className="!text-[14px] !font-bold">
                    {index + 1}
                  </TableCell>

                  <TableCell className="!text-[14px] !font-bold">
                    {item.subCatName}
                  </TableCell>

                  <TableCell className="!text-[14px] !font-bold">
                    {item.parentCatName}
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
