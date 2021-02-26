import React from 'react';

import { ContactItem } from '../../components';


import { AiOutlineUser } from 'react-icons/ai';
import { BiUserCheck } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { IoIosGitNetwork } from 'react-icons/io';
import { FiUserX } from 'react-icons/fi';

const CONTACT_ITEMS = [{
  id: 'contact-id-01',
  icon: AiOutlineUser,
  total: 425,
  title: 'Contacts',
  iconColor: 'lightblue',
},
{
  id: 'contact-id-02',
  icon: FiUsers,
  total: 100,
  title: 'Prospects',
  iconColor: 'orange',
},
{
  id: 'contact-id-03',
  icon: BiUserCheck,
  total: 250,
  title: 'Customers',
  iconColor: 'green',
},
{
  id: 'contact-id-04',
  icon: IoIosGitNetwork,
  total: 50,
  title: 'Team Members',
  iconColor: 'purple',
},
{
  id: 'contact-id-05',
  icon: FiUserX,
  total: 25,
  title: 'Inactive',
  iconColor: 'gray',
}]

const Contacts = () => {
  return (
    <div className="w-full h-4/6 mt-1 flex flex-col bg-white rounded-md p-2">
      <span className="font-semibold text-xs mt-2" >Contacts</span>
      {
        CONTACT_ITEMS.map(item => <ContactItem key={item.id} {...item} />)
      }
    </div>
  )
}

export default Contacts;
