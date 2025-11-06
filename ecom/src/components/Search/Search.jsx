import React from 'react'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="searchBox ml-[10%] w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
        <input type="text" placeholder='Search for products...' className='pl-3 w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px] ' />
        <Button className='!absolute top-[5px] right-[5px] z-50 !w-[41px] !min-w-[41px] h-[41px] !rounded-full'>
          <FaSearch className='link transition-all duration-300 text-[22px]'></FaSearch>
        </Button>
    </div>
  )
}

export default Search