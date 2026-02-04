import React, { useContext, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { Link, useNavigate } from "react-router-dom";
import OrderStatus from "../../components/OrderStatus/OrderStatus";
import Pagination from "@mui/material/Pagination";
import { FaCirclePlus } from "react-icons/fa6";
import Search from "../../components/Search/Search";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import { MyContext } from "../../App";

const Orders = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [openProduct, setOpenProduct] = useState(null);

  return (
    <section>
      <div className="container flex pt-10">
        <div
          className={`sidebarWrapper h-full bg-white transition-all duration-300 ease-in-out 
                ${context.isOpenSideBar ? "w-[20%]" : "w-0 overflow-hidden"}`}
        >
        </div>
        <div
          className={`sidebarWrapper my-7 h-full transition-all duration-300 ease-in-out 
                ${context.isOpenSideBar ? "w-[80%]" : "w-full"}`}
        >
          <div className="flex items-center w-full gap-2">
            <div className="w-[100%]">
              <Search placeHolder="Search Order by OrderID"></Search>
            </div>
          </div>
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
                    <TableCell className=" !text-[14px] !font-bold">
                      Action
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
                    <TableCell>
                      <Tooltip title="Edit">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                          <MdEdit className="text-[30px]"></MdEdit>
                        </Button>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                          <MdDelete className="text-[30px]"></MdDelete>
                        </Button>
                      </Tooltip>
                    </TableCell>
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
                    <TableCell>
                      <Tooltip title="Edit">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                          <MdEdit className="text-[30px]"></MdEdit>
                        </Button>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                          <MdDelete className="text-[30px]"></MdDelete>
                        </Button>
                      </Tooltip>
                    </TableCell>
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
                    <TableCell>
                      <Tooltip title="Edit">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !mr-3 !rounded-full !text-blue-700 !bg-blue-200">
                          <MdEdit className="text-[30px]"></MdEdit>
                        </Button>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-red-700 !bg-red-200">
                          <MdDelete className="text-[30px]"></MdDelete>
                        </Button>
                      </Tooltip>
                    </TableCell>
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
            </TableContainer>
          </div>
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

export default Orders;
