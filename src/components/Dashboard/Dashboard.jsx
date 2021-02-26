import React from 'react';

import { Chart, BroadcastAnalytics, Referrals, Contacts } from '../../components';

import { AiOutlineUser } from 'react-icons/ai';
import { BiUserCheck } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { IoIosGitNetwork } from 'react-icons/io';
import { FiUserX } from 'react-icons/fi';

const DASHBOARD_DATA = {
  contactItems: [{
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
  }],
  referralItems: [{
    total: 236,
    totalColor: 'text-blue-400',
    item: 'Active customers',
  },
  {
    total: '$5608',
    totalColor: 'text-green-400',
    item: 'Upcoming Payout $',
  }],
  referralLink: 'https://app.teametrix.com?fpr=james52',
}

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-start">
      <div className="w-8/12 flex flex-col my-2">
        <Chart />
        <BroadcastAnalytics />
      </div>
      <div className="w-4/12 mx-2 my-2 flex flex-col my-2">
        <Referrals items={DASHBOARD_DATA.referralItems} link={DASHBOARD_DATA.referralLink} />
        <Contacts items={DASHBOARD_DATA.contactItems} />
      </div>
    </div>
  )
}

export default Dashboard;