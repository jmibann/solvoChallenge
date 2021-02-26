import React, { useState } from 'react';

import { Sidebar, SearchBarAndButtons, Dashboard } from '../../components';

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

const DASHBOARD_ID = MENU_ITEM_LIST[0].id;

const UnderConstruction = () => (
  <div className="w-full h-full flex justify-center items-center text-2xl font-bold">
    UnderConstruction
  </div>
)

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(MENU_ITEM_LIST[0].id);

  const clickHandler = (id) => setSelectedItem(id);

  const getSelectedTitle = (selectedID) => MENU_ITEM_LIST.find(({ id }) => id === selectedID).title;

  return (
    <div className="w-full h-screen flex flex-row bg-gray-100">
      <Sidebar clickHandler={clickHandler} selectedItem={selectedItem} items={MENU_ITEM_LIST} />
      <div className="flex flex-col w-9/12 m-2" >
        <SearchBarAndButtons />
        <span className="text-2xl font-semibold">{getSelectedTitle(selectedItem)}</span>
        {
          selectedItem === DASHBOARD_ID ?
            <Dashboard />
            : <UnderConstruction />}
      </div>
    </div>
  )
};


export default Home;