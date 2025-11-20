import React, { useState } from "react";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import OrderStatus from "../../components/OrderStatus/OrderStatus";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [openProduct, setOpenProduct] = useState(null);

  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <AccountSideBar></AccountSideBar>
        <div className="col2 w-[80%]">
          <div className="leftPart w-full m-auto">
            <div className="shadow-md rounded-md p-3 bg-white mt-5">
              <div className="cartHead p-2 pb-5 mb-3 border-b border-[#ff5252]">
                <h2 className="font-bold text-[18px]">My Orders</h2>
                <p className="mt-0 text-[16px] text-gray-600">
                  There are{" "}
                  <span className="font-bold text-[#ff5252] text-[16px]">
                    2
                  </span>{" "}
                  Orders.
                </p>
              </div>
              <TableContainer sx={{ width: "100%", overflowX: "auto" }}>
                <Table sx={{ width: "max-content" }} aria-label="simple table">
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
                                  src="../../../src/assets/Products/p1-2.jpg"
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
                                  src="../../../src/assets/Products/p1-2.jpg"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
