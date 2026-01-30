import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { Link, useNavigate } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "@mui/material/Button";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { MyContext } from "../../App";
import { deleteData } from "../../utils/api";

const UsersList = (props) => {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  const context = useContext(MyContext);
  const navigate = useNavigate();

  const formatDate = (uDate) => {
    if (!uDate) return "-";

    const date = new Date(uDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const calculateAge = (dob) => {
    if (!dob) return "-";

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="w-full text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
          USERS{" "}
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
              <TableCell className=" !text-[14px] !font-bold">S.I</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Name</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Role</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Image</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Mobile</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Email</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Status</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Gender</TableCell>
              <TableCell className=" !text-[14px] !font-bold">DOB</TableCell>
              <TableCell className=" !text-[14px] !font-bold">Age</TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                Address
              </TableCell>
              <TableCell className=" !text-[14px] !font-bold">
                Last Login
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {context?.allUsersList?.all?.length > 0 ? (
              props.usersData.map((item, index) => (
                <TableRow key={index} className="bg-white">
                  <TableCell className="!text-[14px] !font-bold">
                    {index + 1}
                  </TableCell>
                  <TableCell className=" !text-[14px] !font-bold">
                    {item?.name}
                  </TableCell>
                  <TableCell className=" !text-[14px] !font-bold">
                    {item?.role}
                  </TableCell>
                  <TableCell className="!text-[14px] !font-bold">
                    <div className="w-[60px] h-[60px] overflow-hidden rounded-full border border-gray-300">
                      <img
                        src={item?.avatar || "/src/assets/defaultAssets/userAvatar.jpg"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <h1 className="!text-[14px] !font-bold">{item?.mobile}</h1>
                  </TableCell>
                  <TableCell className=" !text-[14px] !font-bold">
                    {item?.email}
                  </TableCell>
                  <TableCell className=" !text-[14px] !font-bold">
                    {item?.verify_email === true ? (
                      <h1 className="text-white bg-green-600 rounded-md px-3 py-1">
                        Verified
                      </h1>
                    ) : (
                      <h1 className="text-white bg-red-600 rounded-md px-3 py-1">
                        Unverified
                      </h1>
                    )}
                  </TableCell>
                  <TableCell>
                    <h1 className="!text-[14px] !font-bold">{item?.gender}</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className="!text-[14px] !font-bold">
                      {formatDate(item?.dob)}
                    </h1>
                  </TableCell>
                  <TableCell>
                    <h1 className="!text-[14px] !font-bold">
                      {calculateAge(item?.dob)}
                    </h1>
                  </TableCell>
                  <TableCell>
                    <h1 className="!text-[14px] !font-bold">{item?.address}</h1>
                  </TableCell>
                  <TableCell>
                    <h1 className="!text-[14px] !font-bold">
                      {formatDate(item?.last_login_date)}
                    </h1>
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
                  No Users found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersList;
