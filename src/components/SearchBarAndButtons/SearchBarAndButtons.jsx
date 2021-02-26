import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs'

import { CgAdd } from 'react-icons/cg';
import { VscBellDot } from 'react-icons/vsc';

import Button from '../Button';

const SearchBarAndButtons = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const focusedCls = "border-blue-700";
  const unFocusedCls = "border-transparent";

  const searchBarContainerCls = `flex items-center bg-white w-5/12 rounded text-xs py-2 border ${isInputFocused ? focusedCls : unFocusedCls}`;

  const focusHandler = () => setIsInputFocused(true)
  const unFocusHanlder = () => setIsInputFocused(false)
  return (
    <div className="w-full h-20 flex justify-between items-center">
      <div className={searchBarContainerCls}>
        <BsSearch className="mx-1" />
        <input
          placeholder="Search"
          className="focus:border-transparent w-full"
          onFocus={focusHandler}
          onBlur={unFocusHanlder}
        />
      </div>

      <div className="flex w-4/12 justify-center">
        <Button color="lightBlue" >
          <CgAdd className="text-base font-semibold text-white" />
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