import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "@mui/material/Pagination";
import Search from "../../components/Search/Search";
import { useNavigate } from "react-router-dom";
import UsersList from "../../components/Users/UsersList";

const Users = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="container flex pt-10">
        <div className="sidebarWrapper h-full w-[20%] bg-white">
          <Sidebar></Sidebar>
        </div>
        <div className="sidebarWrapper w-[80%] my-7 h-full">
          <div className="flex items-center w-full gap-2">
            <div className="w-full">
              <Search placeHolder="Search Users by Mobile Number or EMail"></Search>
            </div>
          </div>
          <UsersList></UsersList>
          <div className="flex mt-5 mb-10 items-center justify-center">
            <Pagination
              count={10}
              variant="outlined"
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
