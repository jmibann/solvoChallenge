import React from 'react';

import { SidebarItem, UserInfo } from '../../components';



const USER_DATA = {
  fullName: 'Jacob Jones',
  company: 'Company Name'
}

const Sidebar = ({ clickHandler, selectedItem, items }) => {


  return (
    <div className="w-3/12 bg-white m-2 flex flex-col justify-between items-center rounded" >
      <div className="w-full flex flex-col items-center">
        <span className="py-4" > Teametrix </span>

        {
          items.map(item => <SidebarItem {...item} key={item.id} clickHandler={clickHandler} selectedItem={selectedItem} />)
        }

      </div>

      <UserInfo {...USER_DATA} />

    </div>
  );
};

export default Sidebar;
