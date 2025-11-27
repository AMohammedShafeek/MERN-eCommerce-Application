import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className="w-[100px] h-[10px] overflow-hidden border border-[#ff5252] rounded-sm">
        <span className={`flex items-center w-[${props.value}%] h-[10px] bg-[#ff5252] rounded-r-sm`}></span>
    </div>
  )
}

export default ProgressBar