import React from 'react';

import { FaRegCopy } from 'react-icons/fa'

import { ReferralItem } from '../../components'

const Referrals = ({ items, link }) => {
  return (
    <div className="w-full h-2/6 mb-1 p-2 flex flex-col justify-start bg-white rounded-md">
      <span className="font-semibold text-sm" >Referrals</span>
      {
        items.map(item => <ReferralItem {...item} />)
      }

      <div className="flex flex-col">
        <span className="text-xs text-gray-700">
          Share this referral link to your frineds & followers
        </span>
        <div className="w-full h-6 mt-2 bg-gray-100 rounded-md flex items-center justify-between cursor-pointer">
          <span className="text-xs font-light pl-2">{link}</span>
          <FaRegCopy className="text-xs mr-2" />
        </div>
      </div>

    </div>
  )
}

export default Referrals;
