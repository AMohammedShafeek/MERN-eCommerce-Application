import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import WishlistItems from "../../components/WishlistItems/WishlistItems";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";

const Wishlist = () => {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <AccountSideBar></AccountSideBar>
        <div className="col2 w-[80%]">
          <div className="leftPart w-full m-auto">
            <div className="shadow-md rounded-md p-3 bg-white mt-5">
              <div className="cartHead p-2 pb-5 mb-3 border-b border-[#ff5252]">
                <h2 className="font-bold text-[18px]">My Wishlist</h2>
                <p className="mt-0 text-[16px] text-gray-600">
                  There are{" "}
                  <span className="font-bold text-[#ff5252] text-[16px]">
                    2
                  </span>{" "}
                  Products in your Wishlist.
                </p>
              </div>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
              <WishlistItems></WishlistItems>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
