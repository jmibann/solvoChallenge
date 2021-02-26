import React from 'react';

const PercentageBar = ({ percentage, color }) => {

  const width = `${percentage}%`

  const filler = `h-full rounded-md ${color}`

  return (
    <div className="h-2 w-full bg-gray-100 rounded-xl">
      <div className={filler} style={{ width }}>

      </div>
    </div>
  )

}

export default PercentageBar;
