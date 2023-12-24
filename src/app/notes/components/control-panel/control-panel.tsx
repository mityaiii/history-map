'use client'

import React, { useState } from 'react'
import { FilterIcon } from './filter-icon'
import { ButtonWithIcon } from './button-with-icon'
import { CrossIcon } from './cross-icon'

export const ControlPanel = ({ onFilterClick }: { onFilterClick?: () => void }) => {
  const [inputText, setInputText] = useState('')

  const textHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  return (
    <div className='flex gap-2 pb-3'>
      <input 
        type='text'
        onChange={textHandler}
        className='w-full pl-5 pr-10 bg-search-field bg-no-repeat bg-right-with-space rounded-xl shadow-xl'
      />
      <ButtonWithIcon 
        onClick={onFilterClick}
        bgColor='bg-warn-500'
      >
        <FilterIcon/>
      </ButtonWithIcon>
      <ButtonWithIcon bgColor='bg-angry-700'>
        <CrossIcon/>
      </ButtonWithIcon>
    </div>
  )
}
