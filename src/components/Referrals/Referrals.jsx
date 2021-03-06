import React from 'react';

import { FaRegCopy } from 'react-icons/fa'

import { ReferralItem } from '../../components'

const REFERRAL_DATA = {
  referralItems: [{
    id: 'referral-01',
    total: 236,
    totalColor: 'text-blue-400',
    item: 'Active customers',
  },
  {
    id: 'referral-02',
    total: '$5608',
    totalColor: 'text-green-400',
    item: 'Upcoming Payout $',
  }],
  referralLink: 'https://app.teametrix.com?fpr=james52',
}

const Referrals = () => {
  return (
    <div className="w-full min-h-2/6 mb-1 p-2 flex flex-col justify-start bg-white rounded-md">
      <span className="font-semibold text-xs mt-2" >Referrals</span>
      {
        REFERRAL_DATA.referralItems.map(item => <ReferralItem key={item.id} {...item} />)
      }

      <div className="flex flex-col">
        <span className="text-xs text-gray-700">
          Share this referral link to your friends & followers
        </span>
        <div className="w-full h-6 mt-2 bg-gray-100 rounded-md flex items-center justify-between cursor-pointer">
          <span className="text-xs font-light pl-2">{REFERRAL_DATA.referralLink}</span>
          <FaRegCopy className="text-xs mr-2" />
        </div>
      </div>

    </div>
  )
}

export default Referrals;
