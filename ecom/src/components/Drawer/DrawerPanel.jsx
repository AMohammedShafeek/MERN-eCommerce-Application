import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoClose } from "react-icons/io5";
import Divider from '@mui/material/Divider';
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DrawerPanel = (props) => {

    const [submenuIndex, setSubmenuIndex] = useState(null)
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null)

    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenDrawer(newOpen)
    };

    const openSubmenu=(index)=>{
      if(submenuIndex===index){
        setSubmenuIndex(null)
        setInnerSubmenuIndex(null)
      }
      else{
        setSubmenuIndex(index)
      }
    }

    const openInnerSubmenu=(index)=>{
      if(innerSubmenuIndex===index){
        setInnerSubmenuIndex(null)
      }
      else{
        setInnerSubmenuIndex(index)
      }
    }

    const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" className='drawerPanel'>

      <h3 className='p-4 text-[18px] font-[500] flex items-center justify-between'>Shop By Categories<IoClose className='text-[24px] mt-1 cursor-pointer' onClick={toggleDrawer(false)}></IoClose></h3>
      <Divider></Divider>

      <div className="scroll">

        <ul className='w-full'>

          <li className="list-none flex items-center relative">
            <Link className='w-full'>
              <Button className='w-full !text-left !justify-start !px-4 !text-[16px] !font-[600]'>FASHION</Button>
            </Link>

            {
              submenuIndex===0 ? 
              
              <FaRegMinusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openSubmenu(0)}></FaRegMinusSquare>

              :

              <FaRegPlusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openSubmenu(0)}></FaRegPlusSquare>

            }

          </li>

          {

            submenuIndex===0 &&

            <ul className="submenu w-full pl-7">

              <li className="list-none relative">
                <Link className='w-full'>
                  <Button className='w-full !text-left !text-[16px] !justify-start !px-4'>Shirts</Button>
                </Link>
                {
              innerSubmenuIndex===0 ? 
              
              <FaRegMinusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}></FaRegMinusSquare>

              :

              <FaRegPlusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}></FaRegPlusSquare>

            }
              </li>

              {
                innerSubmenuIndex===0 &&

                <ul className="innerSubmenu w-full pl-14">

                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Baggy Shirts</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Party wear Shirts</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Popcorn Shirts</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Printed Shirts</Link>
                  </li>

              </ul>

              }

            </ul>

          }

          {

            submenuIndex===0 &&

            <ul className="submenu w-full pl-7">

              <li className="list-none relative">
                <Link className='w-full'>
                  <Button className='w-full !text-left !text-[16px] !justify-start !px-4'>Pants</Button>
                </Link>
                {
              innerSubmenuIndex===1 ? 
              
              <FaRegMinusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}></FaRegMinusSquare>

              :

              <FaRegPlusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}></FaRegPlusSquare>

            }
              </li>

              {
                innerSubmenuIndex===1 &&

                <ul className="innerSubmenu w-full pl-14">

                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Baggy Pants</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Lycra Pants</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Polo pants</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Denim Pants</Link>
                  </li>

              </ul>

              }

            </ul>

          }

        </ul>

        <ul className='w-full'>

          <li className="list-none flex items-center relative">
            <Link className='w-full'>
              <Button className='w-full !text-left !justify-start !px-4 !text-[16px] !font-[600]'>ELECTRONICS</Button>
            </Link>

            {

              submenuIndex===1 ? 
              
              <FaRegMinusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openSubmenu(1)}></FaRegMinusSquare>

              :

              <FaRegPlusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openSubmenu(1)}></FaRegPlusSquare>

            }

          </li>

          {

            submenuIndex===1 &&

            <ul className="submenu w-full pl-7">

              <li className="list-none relative">
                <Link className='w-full'>
                  <Button className='w-full !text-left !text-[16px] !justify-start !px-4'>Charger</Button>
                </Link>

                {

              innerSubmenuIndex===2 ? 
              
              <FaRegMinusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openInnerSubmenu(2)}></FaRegMinusSquare>

              :

              <FaRegPlusSquare className='link transition-all duration-300 absolute top-[14px] right-[20px] cursor-pointer' onClick={()=>openInnerSubmenu(2)}></FaRegPlusSquare>

            }

              </li>

              {

                innerSubmenuIndex===2 &&

                <ul className="innerSubmenu w-full pl-14">

                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>USB Adapter</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Type C Adapter</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>B type Cable</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>C type Cable</Link>
                  </li>
                  <li className="list-none relative mb-2">
                    <Link to={'/'} className='link transition-all duration-300 w-full !text-left !text-[14px] !justify-start !px-4'>Lighting Cable</Link>
                  </li>

              </ul>

              }

            </ul>

          }

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
  )
}

export default DrawerPanel