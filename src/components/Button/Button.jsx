import React from 'react';

const getColorBackground = (color) => {
  switch (color) {
    case 'lightBlue':
      return 'bg-blue-400';

    case 'orange':
      return 'bg-red-200';

    case 'green':
      return 'bg-green-700';

    case 'purple':
      return 'bg-blue-700';

    case 'white':
      return 'bg-white';

    default:
      return 'bg-blue-200';
  }

};

const Button = ({ color, className, children }) => {

  const bgColor = getColorBackground(color);

  const baseBtnCls = `flex items-center py-2 px-2 rounded ${bgColor} `;

  const btnCls = baseBtnCls.concat(className);

  return <button className={btnCls} >
    {children}
  </button>

}

export default Button;