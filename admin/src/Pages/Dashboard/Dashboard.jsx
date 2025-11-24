import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Divider from "@mui/material/Divider";
import DashboardBox from "../../components/DashboardBox/DashboardBox";

const Dashboard = () => {
  return (
    <section className="border-t border-t-gray-300">
      <div className="container flex">
        <div className="sidebarWrapper h-full w-[20%] bg-white">
          <Sidebar></Sidebar>
        </div>
        <div className="sidebarWrapper w-[80%] my-7 h-full">
          <div className="bg-white flex items-center gap-7 mb-3 py-3 px-4">
            <div className="w-[30%]">
              <img
                src="./src/assets/svg/dashSVG.png"
                alt=""
                className="w-[250px]"
              />
            </div>
            <div className="info leading-none w-[70%]">
              <h1 className="text-[18px] font-bold pt-3">Good Morning,</h1>
              <h1 className="text-[24px] primary font-bold mb-3 my-1.5 border-b pb-5 border-gray-300">
                Mohammed Shafeek. A
              </h1>
              <p className="text-[14px] text-gray-500 py-2 font-[500]">
                Here's What Happening on your Store today. See the Statistics at
                Once.
              </p>
            </div>
          </div>
          <DashboardBox></DashboardBox>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
