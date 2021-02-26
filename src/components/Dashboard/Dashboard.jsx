import React from 'react';

import { Chart, BroadcastAnalytics, Referrals, Contacts } from '../../components';

const Dashboard = () => {
  return (
    <div className="w-full h-full flex flex-start">
      <div className="w-8/12 flex flex-col my-2">
        <Chart />
        <BroadcastAnalytics />
      </div>
      <div className="w-4/12 mx-2 my-2 flex flex-col my-2">
        <Referrals />
        <Contacts />
      </div>
    </div>
  )
}

export default Dashboard;