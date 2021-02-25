import React from 'react'

import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';


const UserInfo = ({ id, fullName, company }) => (
  <div className="w-full h-12 mb-8 flex items-center justify-center px-4" >
    <div className="flex justify-center items-center w-3/12 h-6">
      <FaUserCircle className="text-3xl" />
    </div>
    <div className="flex flex-col w-9/12">
      <div className="flex justify-between items-center w-full">
        <span className="text-xs font-semibold">{fullName}</span>
        <IoIosArrowDown size={12} />
      </div>
      <span className="text-xs font-light">{company}</span>
    </div>
  </div>
)

export default UserInfo;