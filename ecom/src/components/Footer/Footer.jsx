import React, { useContext } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoCloseSharp, IoSync } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PiChats } from "react-icons/pi";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Drawer from "@mui/material/Drawer";
import CartDrawer from "../CartDrawer/CartDrawer";
import { MyContext } from "../../App";

const Footer = () => {
  const context = useContext(MyContext);

  return (
    <>
      <footer className=" bg-white">
        <div className="container w-full py-11 mb-5 p-12 border-t border-gray-300">
          <div className="flex items-center gap-2 justify-around">
            <div className="col flex flex-col items-center group">
              <LiaShippingFastSolid className="text-[4rem] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1"></LiaShippingFastSolid>
              <h3 className="m-1 text-[18px] font-bold">Free Shipping</h3>
              <span className="text-[14px]">For All Orders Over 399/-.</span>
            </div>
            <div className="col flex flex-col items-center group">
              <IoSync className="text-[4rem] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1"></IoSync>
              <h3 className="m-1 text-[18px] font-bold">30 Days Returns</h3>
              <span className="text-[14px]">For an Exchange Product.</span>
            </div>
            <div className="col flex flex-col items-center group">
              <IoWalletOutline className="text-[4rem] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1"></IoWalletOutline>
              <h3 className="m-1 text-[18px] font-bold">Secured Payment</h3>
              <span className="text-[14px]">Payment Cards Accepted.</span>
            </div>
            <div className="col flex flex-col items-center group">
              <IoGiftOutline className="text-[4rem] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1"></IoGiftOutline>
              <h3 className="m-1 text-[18px] font-bold">Special Gifts</h3>
              <span className="text-[14px]">Our First Product Order.</span>
            </div>
            <div className="col flex flex-col items-center group">
              <BiSupport className="text-[4rem] group-hover:text-[#ff5252] transition-all duration-300 group-hover:-translate-y-1"></BiSupport>
              <h3 className="m-1 text-[18px] font-bold">Support 24/7</h3>
              <span className="text-[14px]">Contact us Anytime.</span>
            </div>
          </div>
        </div>

        <div className="flex container border-t-1 border-gray-300 pt-10 pb-5">
          <div className="part1 border-r-1 border-gray-300  w-[20%]">
            <h2 className="text-[18px] font-[600] mb-4">Contact Us</h2>
            <p className="text-[13px] font-[400] my-4">
              Repiit - The Art of Collections <br /> 507-Repiit IT Tower <br />{" "}
              Chennai
            </p>
            <Link
              className="link transition-all duration-300 text-[13px]"
              to={"mailto:amdshafeek7@gmail.com"}
            >
              amdshafeek7@gmail.com
            </Link>
            <span className="primary text-[20px] font-[700] block w-full mt-4">
              (+91) 63835 40654
            </span>
            <div className="flex items-center gap-3 mt-3">
              <PiChats className="text-[50px] primary"></PiChats>
              <span className="text-[15px] font-[600]">
                Online Chat <br />
                Get Expert Help
              </span>
            </div>
          </div>

          <div className="part2 w-[20%] flex">
            <div className="col1 mx-10">
              <h2 className="text-[18px] font-[600] mb-4">Products</h2>
              <ul className="list">
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Price Drop
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    New products
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Best sales
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Contact us
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Sitemap
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Stores
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="part2 w-[20%] flex border-r-1 border-gray-300">
            <div className="col1 mx-10">
              <h2 className="text-[18px] font-[600] mb-4">Our company</h2>
              <ul className="list">
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Delivery
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Legal Notice
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Terms and conditions of use
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    About us
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Secure payment
                  </Link>
                </li>
                <li className="list-none text-[14px] w-full mb-4">
                  <Link to={"/"} className="link transition-all duration-300">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="part4 w-[40%] flex flex-col mx-10">
            <h2 className="text-[18px] font-[600] mb-5">
              Subscribe to newsletter
            </h2>
            <p className="text-[13px] font-[400]">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <form>
              <div className="mt-3.5">
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="w-full h-[45px] border border-gray-300 outline-none rounded-sm pl-4 focus:border-[rgba(0,0,0,0.3)]"
                    placeholder="Enter Email Address"
                  />
                  <Button className="!bg-white !border-1 !border-[#ff5252] !h-[45px] !px-[20px] !text-[#ff5252] hover:!bg-[#ff5252] hover:!text-white !transition-all !duration-300 !font-[600]">
                    SUBSCRIBE
                  </Button>
                </div>
                <div className="mt-3">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="I agree to the terms and conditions and the privacy
                  policy"
                  ></FormControlLabel>
                </div>
              </div>
            </form>
            <div className="social mt-3">
              <p className="text-[13px] font-[400]">Lets Connect with.</p>
              <div className="items-center gap-5 mt-3">
                <ul className="flex items-center gap-5">
                  <li>
                    <Link to={"/"}>
                      <FaGithub className="text-black text-[30px] hover:text-[#ff5252] hover:-translate-y-2 transition-all duration-300"></FaGithub>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FaInstagram className="text-black text-[30px] hover:text-[#ff5252] hover:-translate-y-2 transition-all duration-300"></FaInstagram>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FaLinkedin className="text-black text-[30px] hover:text-[#ff5252] hover:-translate-y-2 transition-all duration-300"></FaLinkedin>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/"}>
                      <FaWhatsapp className="text-black text-[30px] hover:text-[#ff5252] hover:-translate-y-2 transition-all duration-300"></FaWhatsapp>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStipe bg-primary py-3">
        <div className="container flex items-center justify-center">
          <p className="text-[13px] text-white font-[600]">
            &copy; 2025 - ECOMMERCE SOFTWARE BY MOHAMMED SHAFEEK A
          </p>
        </div>
      </div>

      <Drawer
        open={context.openCartDrawer}
        onClose={context.toggleCartDrawer(false)}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: "500px",
          },
        }}
        className="cartDrawer"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-gray-300 overflow-hidden">
          <h4 className="font-[600]">Shipping Cart (1)</h4>
          <IoCloseSharp
            className="text-[20px] cursor-pointer"
            onClick={context.toggleCartDrawer(false)}
          ></IoCloseSharp>
        </div>
        <CartDrawer></CartDrawer>
      </Drawer>
    </>
  );
};

export default Footer;
