import React from 'react';

import { Button } from '../../components'

const ContactItem = ({ title, id, icon, total, iconColor }) => {
  const Icon = icon;

  return (
    <div className="w-full h-10 my-2 flex flex-row items-center ">
      <div className="flex mr-4 justify-center items-center">
        <Button color={iconColor}>
          <Icon className="rounded text-white" />
        </Button>
      </div>
      <div className='w-9/12 flex flex-col py-4 text-xs'>
        <span className="font-bold text-base">{total}</span>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default ContactItem;