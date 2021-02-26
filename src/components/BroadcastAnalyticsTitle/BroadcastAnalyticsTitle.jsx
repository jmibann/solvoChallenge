import React from 'react';

import { IoIosArrowDown } from 'react-icons/io';

const BroadcastAnalyticsTitle = ({ title }) => {
  return (
    <div className="w-full h-8 flex items-center justify-between mx-2 text-xs mt-2">
      <span className="font-semibold">{title}</span>
      <div className="cursor-pointer flex flex-row items-center">
        <span className="mr-2">Last week</span>
        <IoIosArrowDown />
      </div>
    </div>
  )
}

export default BroadcastAnalyticsTitle;