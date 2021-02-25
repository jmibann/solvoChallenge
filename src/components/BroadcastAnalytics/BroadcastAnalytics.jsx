import React from 'react';

import { EmailBroadcastAnalytics, SMSBroadcastAnalytics } from '../../components';

const Chart = () => {
  return (
    <div className="w-full h-3/6 flex justtify-center items-center rounded-md">
      <SMSBroadcastAnalytics />
      <EmailBroadcastAnalytics />
    </div>
  )
}

export default Chart;