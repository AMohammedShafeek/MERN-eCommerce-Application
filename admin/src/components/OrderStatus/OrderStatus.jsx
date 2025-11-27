import React from "react";

const OrderStatus = (props) => {
  return (
    <span
      className={`flex items-center w-[100px] min-w-[100px] justify-center capitalize !font-bold !rounded-md ${
        props.status === "hold" && "!bg-gray-200 !px-3 !py-0.5 !text-gray-600"
      } ${
        props.status === "rejected" && "!bg-red-200 !px-3 !py-0.5 !text-red-600"
      } ${
        props.status === "pending" &&
        "!bg-yellow-200 !px-3 !py-0.5 !text-yellow-600"
      } ${
        props.status === "confirm" &&
        "!bg-orange-200 !px-3 !py-0.5 !text-orange-600"
      } ${
        props.status === "delivered" &&
        "!bg-green-200 !px-3 !py-0.5 !text-green-600"
      }`}
    >
      {props.status}
    </span>
  );
};

export default OrderStatus;
