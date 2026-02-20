import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {
  const [qtyValume, setQtyValume] = useState(1);

  const incQty = () => {
    if (qtyValume >= 99) {
      setQtyValume(99);
    } else {
      setQtyValume(qtyValume + 1);
    }
  };

  const decQty = () => {
    if (qtyValume <= 1) {
      setQtyValume(1);
    } else {
      setQtyValume(qtyValume - 1);
    }
  };

  const handleChange = (e) => {
    let value = Number(e.target.value);

    if (value < 1) value = 1;
    if (value > 99) value = 99;

    setQtyValue(value);
  };

  return (
    <div className="QtyBox flex items-center relative">
      <input
        type="number"
        min={1}
        max={99}
        value={qtyValume}
        onChange={handleChange}
        className="productCount w-[70px] h-[40px] text-[18px] text-[#ff5252] pl-2 font-bold focus:outline-none border-1 border-[#ff5252] rounded-md "
      />
      <div className="buttonWrapper flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50 border-l-1 border-[#ff5252]">
        <Button
          className="!min-w-[30px] !w-[30px] !h-[20px] !rounded-none !rounded-tr-sm transition-all duration-300 !bg-[#ff5252] !text-white hover:!bg-black !border-b-1"
          onClick={incQty}
        >
          <FaAngleUp></FaAngleUp>
        </Button>
        <Button
          className="!min-w-[30px] !w-[30px] !h-[20px] !rounded-none !rounded-br-sm transition-all duration-300 !bg-[#ff5252] !text-white hover:!bg-black"
          onClick={decQty}
        >
          <FaAngleDown></FaAngleDown>
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
