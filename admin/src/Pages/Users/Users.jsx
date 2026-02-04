import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "@mui/material/Pagination";
import Search from "../../components/Search/Search";
import { useNavigate } from "react-router-dom";
import UsersList from "../../components/Users/UsersList";
import { MyContext } from "../../App";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Users = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const [role, setRole] = useState("1");
  const [usersData, setUsersData] = useState([]);

  const handleRole = (event) => {
    setRole(event.target.value);
    if (event.target.value === "ADMIN") {
      setUsersData(context?.allUsersList?.admins);
      return;
    }
    if (event.target.value === "USER") {
      setUsersData(context?.allUsersList?.users);
      return;
    }
    setUsersData(context?.allUsersList?.all);
  };

  useEffect(() => {
    context.allUsersData();
  }, []);

  useEffect(() => {
    if (context?.allUsersList?.all?.length > 0) {
      setUsersData(context?.allUsersList?.all);
    }
  }, [context?.allUsersList?.all]);

  return (
    <section>
      {context.isOpenSideBar && (
            <div
              className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden`}
              onClick={() => context.setIsOpenSideBar(false)}
            />
          )}
      <div className="container flex pt-10">
        <div
          className={`sidebarWrapper h-full bg-white transition-all duration-300 ease-in-out 
                ${context.isOpenSideBar ? "w-[20%]" : "w-0 overflow-hidden"}`}
        >
        </div>
        <div
          className={`sidebarWrapper my-7 transition-all duration-300 ease-in-out w-full min-h-0
                ${context.isOpenSideBar ? "lg:w-[80%]" : "lg:w-full"}`}
        >
          <div className="flex items-center w-full gap-2">
            <div className="w-[30%]">
              <div className="w-full flex gap-2 items-center justify-between rounded-md h-[50px] flex items-center">
                <Select
                  className="!bg-white w-full"
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  sx={{
                    height: "50px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  }}
                  value={role}
                  onChange={handleRole}
                  label="role"
                >
                  <MenuItem value={"1"}>
                    <em>Filter by Role</em>
                  </MenuItem>
                  <MenuItem value={"USER"}>Users</MenuItem>
                  <MenuItem value={"ADMIN"}>Admins</MenuItem>
                </Select>
              </div>
            </div>
            <div className="w-[70%]">
              <Search placeHolder="Search By Mobile"></Search>
            </div>
          </div>
          <UsersList
            usersData={usersData}
            setUsersData={setUsersData}
          ></UsersList>
          <div className="flex mt-5 mb-10 items-center justify-center">
            <Pagination
              count={10}
              variant="outlined"
              size="small"
              siblingCount={0}
              boundaryCount={1}
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
