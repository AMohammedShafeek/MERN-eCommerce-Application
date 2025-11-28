import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

const HomeSlidesNew = () => {
  return (
    <section>
      <div className="container flex pt-10">
        <div className="sidebarWrapper h-full w-[20%] bg-white">
          <Sidebar></Sidebar>
        </div>
        <div className="sidebarWrapper w-[80%] my-7 h-full"></div>
      </div>
    </section>
  )
}

export default HomeSlidesNew