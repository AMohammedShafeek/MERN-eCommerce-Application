import React, { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardBox from "../../components/DashboardBox/DashboardBox";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { MyContext } from "../../App";

const Dashboard = () => {
  const context = useContext(MyContext);
  const [openProduct, setOpenProduct] = useState(null);
  const [chart1Data, setChart1Data] = useState([
    {
      name: "JAN",
      Sales: 4000,
      Users: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      Sales: 3000,
      Users: 1398,
      amt: 2210,
    },
    {
      name: "MAR",
      Sales: 2000,
      Users: 9800,
      amt: 2290,
    },
    {
      name: "APR",
      Sales: 2780,
      Users: 3908,
      amt: 2000,
    },
    {
      name: "MAY",
      Sales: 1890,
      Users: 4800,
      amt: 2181,
    },
    {
      name: "JUN",
      Sales: 2390,
      Users: 3800,
      amt: 2500,
    },
    {
      name: "JUL",
      Sales: 3490,
      Users: 4300,
      amt: 2100,
    },
    {
      name: "AUG",
      Sales: 4000,
      Users: 2400,
      amt: 2400,
    },
    {
      name: "SEP",
      Sales: 3000,
      Users: 1398,
      amt: 2210,
    },
    {
      name: "OCT",
      Sales: 2000,
      Users: 9800,
      amt: 2290,
    },
    {
      name: "NOV",
      Sales: 2780,
      Users: 3908,
      amt: 2000,
    },
    {
      name: "DEC",
      Sales: 1890,
      Users: 4800,
      amt: 2181,
    },
  ]);
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
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
          <div className="bg-white flex items-center gap-7 mb-3 py-3 px-4 rounded-md">
            <div className="w-[20%]">
              <img
                src="./src/assets/svg/dashSVG.png"
                alt=""
                className="w-[200px] pl-8"
              />
            </div>
            <div className="info leading-none w-[80%] px-18 border-l border-gray-300">
              <h1 className="text-[18px] font-bold">Good Morning,</h1>
              <h1 className="text-[24px] primary font-bold mb-3 my-1.5 border-b pb-4 border-gray-300">
                Mohammed Shafeek. A
              </h1>
              <p className="text-[14px] text-gray-500 py-0.5 font-[500]">
                Here's What Happening on your Store today. See the Statistics at
                Once.
              </p>
            </div>
          </div>
          <DashboardBox></DashboardBox>
          <div>
            <h1 className="text-[18px] font-black text-white bg-black p-1 pl-4 rounded-md my-3">
              Reports
            </h1>
          </div>
          <div className="gap-4 charts w-full my-2">
            <div className="bg-white p-5 rounded-md w-full shadow shadow-md">
              <div>
                <h1 className="text-[21px] font-bold">
                  Total Users & Total Sales
                </h1>
                <div className="legends my-3">
                  <div className="line1 flex items-center gap-1.5">
                    <div className="bg-[#ff5151] w-3 h-3 rounded-full"></div>
                    <span className="text-[rgba(0,0,0,0.6)] text-[16px] font-[700]">
                      Number of Users
                    </span>
                  </div>
                  <div className="line2 flex items-center gap-1.5">
                    <div className="bg-[#450693] w-3 h-3 rounded-full"></div>
                    <span className="text-[rgba(0,0,0,0.6)] text-[16px] font-[700]">
                      Number of Sales
                    </span>
                  </div>
                </div>
                <LineChart
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "400px",
                    aspectRatio: 1.618,
                  }}
                  responsive
                  data={chart1Data}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis width="auto" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="Users"
                    stroke="#ff5151"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Sales"
                    strokeWidth={3}
                    stroke="#450693"
                  />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
