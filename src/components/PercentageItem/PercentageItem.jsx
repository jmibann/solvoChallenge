import React from 'react';

import { PercentageBar } from '../../components';

import { getColorBackground, getTextColor } from '../../utils';

const PercentageItem = ({ percentage, color, label }) => {

  const percetageNumberColor = getTextColor(color)
  const barColor = getColorBackground(color);

  return (
    <div className="w-full h-12 flex flex-col my-2">
      <div className="w-full flex flex-row justify-between text-xs mb-2">
        <span>{label}</span>
        <span className={percetageNumberColor}>{percentage}%</span>
      </div>

      <PercentageBar percentage={percentage} color={barColor} />
    </div>
  )
}

export default PercentageItem;