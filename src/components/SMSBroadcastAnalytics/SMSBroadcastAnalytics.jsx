import React from 'react';

import { BroadcastAnalyticsTitle, PercentageItem } from '../../components';

const SMS_BROADCAST_ITEMS = [{
  id: 'sms-1',
  percentage: 100,
  color: "lightBlue",
  label: "Total Messages Sent",
},
{
  id: 'sms-2',
  percentage: 75,
  color: "orange",
  label: "Total Messages Sent",
},
{
  id: 'sms-3',
  percentage: 50,
  color: "green",
  label: "Total Messages Sent",
}
]

const SMSBroadcastAnalytics = () => {
  return (
    <div className="w-full h-full rounded-md flex flex-col justify-start items-center bg-white px-2 mr-1">
      <BroadcastAnalyticsTitle title="SMS Broadcast Analytics" />

      {
        SMS_BROADCAST_ITEMS.map(item => <PercentageItem key={item.id} {...item} />)
      }
    </div>
  );
}

export default SMSBroadcastAnalytics;
