import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardBox from "../../components/DashboardBox/DashboardBox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import OrderStatus from "../../components/OrderStatus/OrderStatus";
import ProductsList from "../../components/Products/ProductsList";

const Dashboard = () => {
  const [openProduct, setOpenProduct] = useState(null);
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  return (
    <section>
      <div className="container flex pt-10">
        <div className="sidebarWrapper h-full w-[20%] bg-white">
          <Sidebar></Sidebar>
        </div>
        <div className="sidebarWrapper w-[80%] my-7 h-full">
          <div className="bg-white flex items-center gap-7 mb-3 py-3 px-4">
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
            <div className="flex items-center bg-black rounded-md my-3 p-1 gap-1.5 pl-2">
              <h1 className="text-[18px] font-black text-white">
                RECENT ORDERS
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
                  width: "max-content",
                  backgroundColor: "white",
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="!text-[14px] !font-bold">
                      View Items
                    </TableCell>
                    <TableCell className="!text-[14px] !font-bold">
                      Order ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Payment ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      User ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Name
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Phone Number
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Email
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Total Amount
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Address
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Pincode
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Status
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="!flex !items-center !justify-center">
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() =>
                          setOpenProduct(openProduct === 0 ? null : 0)
                        }
                      >
                        {openProduct === 0 ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell className="OrderID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="PaymentID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="UserID !text-[#ff5252] !font-[600]">
                      23654
                    </TableCell>
                    <TableCell>Mohammed Shafeek. A</TableCell>
                    <TableCell>6383540***</TableCell>
                    <TableCell>amdshafeek7@gmail.com</TableCell>
                    <TableCell>2496</TableCell>
                    <TableCell>
                      no.11, vinayagapuram, papanasam, Thanjavur, Tamilnadu
                    </TableCell>
                    <TableCell>614205</TableCell>
                    <TableCell>
                      <OrderStatus status="hold"></OrderStatus>
                    </TableCell>
                    <TableCell>19/11/2025-18:07:24</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={12}
                    >
                      <Collapse
                        in={openProduct === 0}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Table size="small" aria-label="purchases">
                          <TableHead className="bg-[#ffc2c2]">
                            <TableRow>
                              <TableCell className=" !text-[14px] !font-bold">
                                S.I
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Product ID
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Name
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Image
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Quantity
                              </TableCell>
                              <TableCell className="!text-[14px] !font-bold">
                                Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Special Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Tax
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Total Amount
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Brand
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Dealer
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                View Product
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2-2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table
                sx={{
                  width: "max-content",
                  backgroundColor: "white",
                  marginTop: "0.5rem",
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="!text-[14px] !font-bold">
                      View Items
                    </TableCell>
                    <TableCell className="!text-[14px] !font-bold">
                      Order ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Payment ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      User ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Name
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Phone Number
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Email
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Total Amount
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Address
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Pincode
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Status
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="!flex !items-center !justify-center">
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() =>
                          setOpenProduct(openProduct === 1 ? null : 1)
                        }
                      >
                        {openProduct === 1 ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell className="OrderID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="PaymentID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="UserID !text-[#ff5252] !font-[600]">
                      23654
                    </TableCell>
                    <TableCell>Mohammed Shafeek. A</TableCell>
                    <TableCell>6383540***</TableCell>
                    <TableCell>amdshafeek7@gmail.com</TableCell>
                    <TableCell>2496</TableCell>
                    <TableCell>
                      no.11, vinayagapuram, papanasam, Thanjavur, Tamilnadu
                    </TableCell>
                    <TableCell>614205</TableCell>
                    <TableCell>
                      <OrderStatus status="rejected"></OrderStatus>
                    </TableCell>
                    <TableCell>19/11/2025-18:07:24</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={12}
                    >
                      <Collapse
                        in={openProduct === 1}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Table size="small" aria-label="purchases">
                          <TableHead className="bg-[#ffc2c2]">
                            <TableRow>
                              <TableCell className=" !text-[14px] !font-bold">
                                S.I
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Product ID
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Name
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Image
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Quantity
                              </TableCell>
                              <TableCell className="!text-[14px] !font-bold">
                                Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Special Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Tax
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Total Amount
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Brand
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Dealer
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                View Product
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2-2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table
                sx={{
                  width: "max-content",
                  backgroundColor: "white",
                  marginTop: "0.5rem",
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="!text-[14px] !font-bold">
                      View Items
                    </TableCell>
                    <TableCell className="!text-[14px] !font-bold">
                      Order ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Payment ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      User ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Name
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Phone Number
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Email
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Total Amount
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Address
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Pincode
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Status
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="!flex !items-center !justify-center">
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() =>
                          setOpenProduct(openProduct === 2 ? null : 2)
                        }
                      >
                        {openProduct === 2 ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell className="OrderID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="PaymentID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="UserID !text-[#ff5252] !font-[600]">
                      23654
                    </TableCell>
                    <TableCell>Mohammed Shafeek. A</TableCell>
                    <TableCell>6383540***</TableCell>
                    <TableCell>amdshafeek7@gmail.com</TableCell>
                    <TableCell>2496</TableCell>
                    <TableCell>
                      no.11, vinayagapuram, papanasam, Thanjavur, Tamilnadu
                    </TableCell>
                    <TableCell>614205</TableCell>
                    <TableCell>
                      <OrderStatus status="pending"></OrderStatus>
                    </TableCell>
                    <TableCell>19/11/2025-18:07:24</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={12}
                    >
                      <Collapse
                        in={openProduct === 2}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Table size="small" aria-label="purchases">
                          <TableHead className="bg-[#ffc2c2]">
                            <TableRow>
                              <TableCell className=" !text-[14px] !font-bold">
                                S.I
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Product ID
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Name
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Image
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Quantity
                              </TableCell>
                              <TableCell className="!text-[14px] !font-bold">
                                Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Special Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Tax
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Total Amount
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Brand
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Dealer
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                View Product
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2-2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table
                sx={{
                  width: "max-content",
                  backgroundColor: "white",
                  marginTop: "0.5rem",
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="!text-[14px] !font-bold">
                      View Items
                    </TableCell>
                    <TableCell className="!text-[14px] !font-bold">
                      Order ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Payment ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      User ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Name
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Phone Number
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Email
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Total Amount
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Address
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Pincode
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Status
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="!flex !items-center !justify-center">
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() =>
                          setOpenProduct(openProduct === 3 ? null : 3)
                        }
                      >
                        {openProduct === 3 ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell className="OrderID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="PaymentID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="UserID !text-[#ff5252] !font-[600]">
                      23654
                    </TableCell>
                    <TableCell>Mohammed Shafeek. A</TableCell>
                    <TableCell>6383540***</TableCell>
                    <TableCell>amdshafeek7@gmail.com</TableCell>
                    <TableCell>2496</TableCell>
                    <TableCell>
                      no.11, vinayagapuram, papanasam, Thanjavur, Tamilnadu
                    </TableCell>
                    <TableCell>614205</TableCell>
                    <TableCell>
                      <OrderStatus status="confirm"></OrderStatus>
                    </TableCell>
                    <TableCell>19/11/2025-18:07:24</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={12}
                    >
                      <Collapse
                        in={openProduct === 3}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Table size="small" aria-label="purchases">
                          <TableHead className="bg-[#ffc2c2]">
                            <TableRow>
                              <TableCell className=" !text-[14px] !font-bold">
                                S.I
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Product ID
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Name
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Image
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Quantity
                              </TableCell>
                              <TableCell className="!text-[14px] !font-bold">
                                Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Special Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Tax
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Total Amount
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Brand
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Dealer
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                View Product
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2-2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Table
                sx={{
                  width: "max-content",
                  backgroundColor: "white",
                  marginTop: "0.5rem",
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell className="!text-[14px] !font-bold">
                      View Items
                    </TableCell>
                    <TableCell className="!text-[14px] !font-bold">
                      Order ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Payment ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      User ID
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Name
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Phone Number
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Email
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Total Amount
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Address
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Pincode
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Status
                    </TableCell>
                    <TableCell className=" !text-[14px] !font-bold">
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="!flex !items-center !justify-center">
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() =>
                          setOpenProduct(openProduct === 4 ? null : 4)
                        }
                      >
                        {openProduct === 4 ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell className="OrderID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="PaymentID !text-[#ff5252] !font-[600]">
                      2365412587kh1236
                    </TableCell>
                    <TableCell className="UserID !text-[#ff5252] !font-[600]">
                      23654
                    </TableCell>
                    <TableCell>Mohammed Shafeek. A</TableCell>
                    <TableCell>6383540***</TableCell>
                    <TableCell>amdshafeek7@gmail.com</TableCell>
                    <TableCell>2496</TableCell>
                    <TableCell>
                      no.11, vinayagapuram, papanasam, Thanjavur, Tamilnadu
                    </TableCell>
                    <TableCell>614205</TableCell>
                    <TableCell>
                      <OrderStatus status="delivered"></OrderStatus>
                    </TableCell>
                    <TableCell>19/11/2025-18:07:24</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={12}
                    >
                      <Collapse
                        in={openProduct === 4}
                        timeout="auto"
                        unmountOnExit
                      >
                        <Table size="small" aria-label="purchases">
                          <TableHead className="bg-[#ffc2c2]">
                            <TableRow>
                              <TableCell className=" !text-[14px] !font-bold">
                                S.I
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Product ID
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Name
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Image
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Quantity
                              </TableCell>
                              <TableCell className="!text-[14px] !font-bold">
                                Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Special Price
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Tax
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Total Amount
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Brand
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                Dealer
                              </TableCell>
                              <TableCell className=" !text-[14px] !font-bold">
                                View Product
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2-2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                          <TableRow className="bg-[#fff7f7]">
                            <TableCell className="!text-[14px] !font-bold">
                              1
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              PP652357
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Gray Shirt | Casual Shirt
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              <img
                                src="../../../src/assets/Products/p2.jpg"
                                alt=""
                                className="object-contain w-[60px] h-[60px]"
                              />
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              2
                            </TableCell>
                            <TableCell className="line-through !text-[14px] !font-bold">
                              899
                            </TableCell>
                            <TableCell className="specialPrice !text-[#ff5252] !text-[14px] !font-bold">
                              399
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              11
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              820
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              TAGDO Pvt. Ltd
                            </TableCell>
                            <TableCell className=" !text-[14px] !font-bold">
                              SS Traders
                            </TableCell>
                            <TableCell className="ProdductID !text-[#ff5252] !text-[14px] !font-bold">
                              <Link to={"/productDetail/1"}>Click Here</Link>
                            </TableCell>
                          </TableRow>
                        </Table>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <ProductsList></ProductsList>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
