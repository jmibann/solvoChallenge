import React from 'react';

import { getColorBackground } from '../../utils'

const Button = ({ color, className, children }) => {

  const bgColor = getColorBackground(color);
  const baseBtnCls = `flex items-center py-2 px-2 rounded ${bgColor} `;

  const btnCls = baseBtnCls.concat(className);

  return <button className={btnCls} >
    {children}
  </button>

}

export default Button;