import React from 'react';

const ReferralItem = ({ total, item, totalColor }) => {

  const totalCls = `font-bold text-base ${totalColor}`;

  return (
    <div className="w-full h-12 flex flex-col my-2 border-b border-gray-300 leading-tight">
      <span className={totalCls}>{total}</span>
      <span className="text-grey-400 font-light text-xs">{item}</span>
    </div>
  )
}

export default ReferralItem;