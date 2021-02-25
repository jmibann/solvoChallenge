import React from 'react';

import { BsSearch } from 'react-icons/bs'

import { GrAddCircle } from 'react-icons/gr';
import { VscBellDot } from 'react-icons/vsc';

import Button from '../Button';

const SearchBarAndButtons = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center">
      <div className="flex items-center bg-white w-5/12 rounded text-xs py-2">
        <BsSearch className="mx-1" />
        <input placeholder="Search" />
      </div>

      <div className="flex w-4/12 justify-center">
        <Button color="lightBlue" >
          <GrAddCircle className="text-base font-semibold" color="white" />
        </Button>

        <Button color="lightBlue" className="mx-4">
          <span className="text-xs text-white font-semibold">Import Contacts </span>
        </Button>

        <Button color="white" className="mr-2">
          <VscBellDot className="text-base font-semibold" />
        </Button>
      </div>

    </div>
  )
}

export default SearchBarAndButtons;