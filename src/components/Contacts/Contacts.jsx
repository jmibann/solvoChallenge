import React from 'react';

import { ContactItem } from '../../components';

const Contacts = ({ items }) => {
  return (
    <div className="w-full h-4/6 mt-1 flex flex-col bg-white rounded-md p-2">
      <span className="font-semibold text-sm" >Contacts</span>
      {
        items.map(item => <ContactItem key={item.id} {...item} />)
      }
    </div>
  )
}

export default Contacts;
