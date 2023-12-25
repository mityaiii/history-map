'use client'

import React, { useState } from 'react'
import { FilterNav } from './nav/filter-nav'
import { Filter } from './filter'
import { filterType } from './filter.type'
import { ControlPanel } from '../control-panel/control-panel'
import { motion, useCycle } from 'framer-motion'

const variants = {
  'open': {
    opacity: '100%',
    y: 0,
    display: 'block',
  },
  'close': {
    opacity: '0%',
    y: 10,
    display: 'none',
  },
}

const containerVariants = {
  'open': {
    backdropFilter: 'blur(20px)',
  },
  'close': {
    backdropFilter: 'blur(0px)',
  },
}

export const FilterSection = () => {
  const [filter, setFilter] = useState<filterType>('общее');
  const [openFilter, setOpenFilter] = useCycle('open', 'close');

  return (
    <motion.div 
      className='absolute lg:static left-0
      right-0 lg:max-w-[400px] mx-auto lg:mx-0 h-full py-1 z-10'
      initial='open'
      animate={openFilter}
      variants={containerVariants}
    >
      <ControlPanel
        className='w-5/6 lg:w-[320px] mx-auto lg:mx-0'
        onFilterClick={setOpenFilter}
      />
      <motion.div
        className='w-5/6 lg:w-[320px] mx-auto lg:mx-0'
        initial={'open'}
        animate={openFilter}
        variants={variants}
      >
        <FilterNav setFilter={setFilter}/>
        <Filter variant={filter}/>
      </motion.div> 
    </motion.div>
  )
}
