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

const CategoriesList = () => {
  const context = useContext(MyContext);
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const [catData, setCatData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const navigate = useNavigate();

  const categoryData = () => {
    getData("/api/category").then((res) => {
      console.log(res?.data);
      setCatData(res?.data);
    });
  };

  useEffect(() => {
    categoryData();
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
        categoryData();
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };
  return (
    <div>
      <div>
        <h1 className="text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          Categories
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
              <TableCell className=" !text-[14px] !font-bold">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {catData?.length !== 0 &&
              catData?.map((item, index) => {
                return (
                  <TableRow className="bg-white">
                    <TableCell>
                      <Checkbox {...label} />
                    </TableCell>
                    <TableCell className="!text-[14px] !font-bold">
                      {index + 1}
                    </TableCell>
                    <TableCell className="ProdductID !text-[14px] !font-bold">
                      {item.name}
                    </TableCell>
                    <TableCell>
                      <Tooltip title="Edit">
                        <Button
                          onClick={() => editCat(item._id)}
                          className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200"
                        >
                          <MdEdit className="text-[30px]"></MdEdit>
                        </Button>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <Button
                          onClick={() => deleteCatConfirm(item._id)}
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200"
                        >
                          <MdDelete className="text-[30px]"></MdDelete>
                        </Button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CategoriesList;
