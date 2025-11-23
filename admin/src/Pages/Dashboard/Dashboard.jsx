import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Divider from "@mui/material/Divider";

const Dashboard = () => {
  return (
    <section className="border-t border-t-gray-300">
        <div className="container flex">
          <div className="sidebarWrapper h-full w-[20%] bg-white">
            <Sidebar></Sidebar>
          </div>
          <div className="sidebarWrapper w-[80%] my-5 h-full">
            Admin
          </div>
        </div>
    </section>
  );
};

export default Dashboard;