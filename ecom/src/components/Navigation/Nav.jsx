import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaTruckMoving } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaShirt } from "react-icons/fa6";
import { IoHeadset } from "react-icons/io5";
import { MdWatch } from "react-icons/md";
import { RiBrushAiFill, RiMenu2Fill } from "react-icons/ri";
import { GiDiamondRing, GiHeatHaze, GiConverseShoe, GiBeachBag } from "react-icons/gi";
import DrawerPanel from '../Drawer/DrawerPanel';

const Nav = () => {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const openDrawer=()=>{
        setIsOpenDrawer(true);
    }

  return (
    <>
        <nav className='py-2'>
            <div className="container flex items-center">
                <div className="col_1 w-[14.5%] border-r-[1px] border-gray-300">
                    <Button className='link transition-all duration-300 !font-[600] gap-3 w-[90%]' onClick={openDrawer}>
                        <RiMenu2Fill className='text-[21px] pt-0.5'></RiMenu2Fill>
                            <p className='mt-0.5 link transition-all duration-300'>Categories</p>
                        <LiaAngleDownSolid className='text-[15px] font-bold ml-2 mr-3'></LiaAngleDownSolid>
                    </Button>
                </div>
                <div className="col_2 w-[70%] border-r-[1px] border-gray-300 ml-8">
                    <ul className="flex items-center gap-5 nav">
                        <li className="list-none">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <IoMdHome className='text-[18px] mr-0.5'></IoMdHome>
                                        <p className='mt-0.5'>Home</p>
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none relative">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <FaShirt className='text-[16px] mr-0.5'></FaShirt>
                                        <p className='mt-0.5'>Fashion</p>
                                </Button>
                            </Link>
                            <div className="submenu absolute top-[100%] left-[0%] min-w-[160px] bg-white shadow-md opacity-0 transition-all duration-300-all">
                                <ul>
                                    <li className="list-none w-full">
                                        <Link to={'/'}>
                                            <Button className='!font-[600] w-full !text-left !justify-start !rounded-none'>Mens</Button>
                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[160px] bg-white shadow-md opacity-0 transition-all duration-300-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='w-full !text-left !justify-start !rounded-none'>Shirt</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='w-full !text-left !justify-start !rounded-none'>Pant</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className=' w-full !text-left !justify-start !rounded-none'>Hoodie</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className=' w-full !text-left !justify-start !rounded-none'>Jacket</Button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-none w-full">
                                        <Link to={'/'}>
                                            <Button className='!font-[600] w-full !text-left !justify-start !rounded-none'>Womens</Button>
                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[160px] bg-white shadow-md opacity-0 transition-all duration-300-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='w-full !text-left !justify-start !rounded-none'>Saree</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className='w-full !text-left !justify-start !rounded-none'>T Shirt</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className=' w-full !text-left !justify-start !rounded-none'>Chudidar</Button>
                                                        </Link>
                                                    </li>
                                                    <li className="list-none w-full">
                                                        <Link to={'/'}>
                                                            <Button className=' w-full !text-left !justify-start !rounded-none'>Denims</Button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="list-none w-full">
                                        <Link to={'/'}>
                                            <Button className='!font-[600] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                        </Link>
                                    </li>
                                    <li className="list-none w-full">
                                        <Link to={'/'}>
                                            <Button className='!font-[600] w-full !text-left !justify-start !rounded-none'>Babies</Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="list-none">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <IoHeadset className='text-[17px] mr-0.5'></IoHeadset>
                                        <p className='mt-0.5'>Electronics</p>
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <MdWatch className='text-[17px] mr-0.5'></MdWatch>
                                        <p className='mt-0.5'>Accessories</p>
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <GiBeachBag className='text-[17px] mr-0.5'></GiBeachBag>
                                        <p className='mt-0.5'>Bags</p>
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <GiConverseShoe className='text-[21px] mr-0.5 mt-0.5'></GiConverseShoe>
                                        <p className='mt-0.5'>Footwear</p>
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <RiBrushAiFill className='text-[18px] mr-0.5 mt-0.5'></RiBrushAiFill>
                                        <p className='mt-0.5'>Beauty</p>
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <GiDiamondRing className='text-[17px] mr-0.5'></GiDiamondRing>
                                        <p className='mt-0.5'>Jewellery</p>
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to={'/'}>
                                <Button className='link transition-all duration-300 !font-[600]'>
                                    <GiHeatHaze className='text-[18px] mr-0.5'></GiHeatHaze>
                                        <p className='mt-0.5'>Wellness</p>
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col_3 w-[15.5%] ml-11 justify-end">
                    <p className='text-[14px] font-[500] flex items-center gap-3'><FaTruckMoving className='text-[20px] mt-0.5'></FaTruckMoving>Free Delivery Across India</p>
                </div>
            </div>
        </nav>

        {/* DRAWER PANEL */}

        <DrawerPanel isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer}></DrawerPanel>

    </>
  )
}

export default Nav