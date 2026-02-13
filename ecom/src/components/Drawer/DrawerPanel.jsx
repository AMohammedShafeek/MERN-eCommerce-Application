import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Divider from "@mui/material/Divider";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Collapse from "@mui/material/Collapse";
import { MyContext } from "../../App";

const DrawerPanel = (props) => {
  const context = useContext(MyContext);
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenDrawer(newOpen);
  };

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
      setInnerSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" className="drawerPanel">
      <h3 className="p-4 text-[16px] font-[500] flex items-center justify-between">
        Shop By Categories
        <IoClose
          className="text-[24px] mt-1 cursor-pointer hover:text-[#ff5252] transition-all duration-300"
          onClick={toggleDrawer(false)}
        ></IoClose>
      </h3>
      <Divider></Divider>

      <div className="scroll">
        <ul className="w-full">
          {context.catData.map((catItem, index) => (
            <li key={index} className="list-none flex flex-col">
              <Button className="w-full !px-5 !text-left transition-all duration-300 !justify-between !text-[16px] !font-[600]">
                {catItem?.name}
                {catItem?.children?.length > 0 &&
                  (submenuIndex === index ? (
                    <FaMinusCircle
                      className="link !text-[18px]"
                      onClick={() => openSubmenu(index)}
                    ></FaMinusCircle>
                  ) : (
                    <FaPlusCircle
                      className="link !text-[18px]"
                      onClick={() => openSubmenu(index)}
                    ></FaPlusCircle>
                  ))}
              </Button>
              <Collapse in={submenuIndex === index}>
                {catItem.children.map((subCatItem, index) => (
                  <ul key={index} className="submenu w-full">
                    <li className="list-none">
                      <Button className="w-full !px-10 !text-left !text-[14px] !justify-start">
                        {subCatItem.name}
                      </Button>
                    </li>
                  </ul>
                ))}
              </Collapse>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.isOpenDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerPanel;
