import React from 'react';

import MyChart from './MyChart';

import { getColorBackground } from '../../utils';

const Legend = ({ color, label }) => {
  const dotCls = `rounded-full h-2 w-2 flex items-center justify-center ${getColorBackground(color)}`

  return (<div className="flex flex-row items-center px-1">
    <div className={dotCls}></div>
    <span className="ml-1 text-xs font-light">{label}</span>
  </div>)
}

const Chart = () => {
  return (
    <div className="w-full h-3/6 mb-2 px-2 flex flex-col justtify-center items-center bg-white rounded-md">

      <div className="h-10 my-2 w-full mx-2 flex items-center justify-between">
        <span className="text-xs font-semibold">Customer Report</span>

        <div className="flex items-center">
          <Legend color="green" label="Customers" />
          <Legend color="orange" label="Prospects" />
        </div>
      </div>

      <MyChart />
    </div>
  )
}

export default Chart;