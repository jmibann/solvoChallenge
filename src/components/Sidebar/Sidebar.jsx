import React, { useState } from 'react';

import { SidebarItem, UserInfo } from '../../components';

import { RiDashboardLine, RiMoneyDollarBoxLine } from 'react-icons/ri';
import { IoIosContact } from 'react-icons/io';
import { AiOutlineInbox, AiOutlineUnorderedList } from 'react-icons/ai';
import { HiOutlineSpeakerphone } from 'react-icons/hi'


const MENU_ITEM_LIST = [{
  id: 1,
  title: 'Dashboard',
  icon: RiDashboardLine
},
{
  id: 2,
  title: 'Contacts',
  icon: IoIosContact
},
{
  id: 3,
  title: 'Inbox',
  icon: AiOutlineInbox
},
{
  id: 4,
  title: 'Broadcast',
  icon: HiOutlineSpeakerphone
},
{
  id: 5,
  title: 'List',
  icon: AiOutlineUnorderedList
},
{
  id: 6,
  title: 'Referrals',
  icon: RiMoneyDollarBoxLine
},]

const USER_DATA = {
  fullName: 'Jacob Jones',
  company: 'Company Name'
}

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(MENU_ITEM_LIST[0].id);

  const clickHandler = (id) => setSelectedItem(id);

  return (
    <div className="w-3/12 bg-white m-2 flex flex-col justify-between items-center rounded" >
      <div className="w-full flex flex-col items-center">
        <span className="py-4" > Teametrix </span>

        {
          MENU_ITEM_LIST.map(item => <SidebarItem {...item} clickHandler={clickHandler} selectedItem={selectedItem} />)
        }

      </div>

      <UserInfo {...USER_DATA} />

    </div>
  );
};

export default Sidebar;
