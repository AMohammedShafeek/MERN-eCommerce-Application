import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "@mui/material/Pagination";
import Search from "../../components/Search/Search";
import { useNavigate } from "react-router-dom";
import UsersList from "../../components/Users/UsersList";
import { MyContext } from "../../App";

const Users = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <section>
      <div className="container flex pt-10">
        <div className={`sidebarWrapper ${
            context.isOpenSideBar === true ? "w-[20%]" : ""
          } h-full bg-white`}>
          <Sidebar></Sidebar>
        </div>
        <div
          className={`sidebarWrapper ${
            context.isOpenSideBar === true ? "w-[80%]" : "w-full"
          }  my-7 h-full`}
        >
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
