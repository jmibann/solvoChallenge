import React from 'react';

import { BroadcastAnalyticsTitle, PercentageItem } from '../../components';

const EMAIL_BROADCAST_ITEMS = [{
  id: 'mail-1',
  percentage: 100,
  color: "lightBlue",
  label: "Total Messages Sent",
},
{
  id: 'mail-2',
  percentage: 75,
  color: "orange",
  label: "Total Messages Sent",
},
{
  id: 'mail-3',
  percentage: 50,
  color: "green",
  label: "Total Messages Sent",
}
]

const EmailBroadcastAnalytics = () => {
  return (
    <div className="w-full h-full rounded-md flex flex-col justify-start items-center bg-white px-2 ml-1">
      <BroadcastAnalyticsTitle title="SMS Broadcast Analytics" />

      {
        EMAIL_BROADCAST_ITEMS.map(item => <PercentageItem key={item.id} {...item} />)
      }
    </div>
  );
}

export default EmailBroadcastAnalytics;
