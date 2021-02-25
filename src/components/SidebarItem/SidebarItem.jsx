import React from 'react';

const SidebarItem = ({ id, title, icon, selectedItem, clickHandler }) => {

  const selectedCls = 'bg-blue-100 text-blue-700 font-semibold border-r-4 border-blue-700';
  const notSelectedCls = 'text-black font-normal';

  const containerCls =
    `w-full flex justify-start items-center pl-6 cursor-pointer my-2 ${selectedItem === id ? selectedCls : notSelectedCls}`;

  const IconComponent = icon;

  return (
    <div
      className={containerCls}
      onClick={() => clickHandler(id)}
    >
      <IconComponent />
      <span className="ml-2 my-2">{title}</span>
    </div>
  )
}

export default SidebarItem;
