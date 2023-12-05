'use client'

import React, { useState } from 'react'
import { Header } from './header'
import { IPeriod, PeriodInput } from './period-input'
import { AddValueButton } from './add-value-button'

const initValue: IPeriod[] = [
  {
    start: '',
    end: '',
  },
]

export const Period = () => {
  const [selectedPeriods, setSelectedPeriods] = useState<IPeriod[]>(initValue);

  const addPeriod = () => {
    setSelectedPeriods(prev => [...prev, {
      start: '',
      end: '',
    }]);
  };

  const removePeriod = (elementIndx: number) => {
    setSelectedPeriods(prev => prev.filter((value, indx) => indx !== elementIndx ))
  }

  return (
    <div className='relative'>
      <Header 
        icon={
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <mask id='path-1-inside-1_332_342' fill='white'>
              <path
                d='M12 6.5C12 6.26077 12 6.14115 12.0807 6.06687C12.1615 5.99259 12.2741 6.002 12.4994 
                6.02082C13.3784 6.09424 14.2326 6.36078 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962
                9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 
                15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228
                9 17.1962C8.23258 16.7531 7.57467 16.1466 7.07159 15.4221C6.94265 15.2364 6.87817 15.1435 
                6.90213 15.0365C6.92608 14.9294 7.02968 14.8696 7.23686 14.75L11.75 12.1443C11.872 12.0739 
                11.933 12.0387 11.9665 11.9807C12 11.9226 12 11.8522 12 11.7113V6.5Z'
              />
            </mask>
            <path 
              d='M12 6.5C12 6.26077 12 6.14115 12.0807 6.06687C12.1615 5.99259 12.2741 6.002 12.4994
              6.02082C13.3784 6.09424 14.2326 6.36078 15 6.80385C15.9121 7.33046 16.6695 8.08788 17.1962 
              9C17.7228 9.91212 18 10.9468 18 12C18 13.0532 17.7228 14.0879 17.1962 15C16.6695 15.9121 
              15.9121 16.6695 15 17.1962C14.0879 17.7228 13.0532 18 12 18C10.9468 18 9.91211 17.7228 
              9 17.1962C8.23258 16.7531 7.57467 16.1466 7.07159 15.4221C6.94265 15.2364 6.87817 15.1435 6.90213
              15.0365C6.92608 14.9294 7.02968 14.8696 7.23686 14.75L11.75 12.1443C11.872 12.0739 11.933 12.0387
              11.9665 11.9807C12 11.9226 12 11.8522 12 11.7113V6.5Z'
              fill='#7E869E'
              fillOpacity='0.25' 
              stroke='#222222' 
              strokeWidth='2.4'
              mask='url(#path-1-inside-1_332_342)'
            />
            <circle cx='12' cy='12' r='8.4' stroke='#222222' strokeWidth='1.2'/>
          </svg>
        } 
        text='временной промежуток'
      />
      <AddValueButton
        onClick={addPeriod}
      />
      { selectedPeriods.map((period, indx) => 
        <PeriodInput 
          key={indx} 
          period={period} 
          periodStartHandler={(e: React.ChangeEvent<HTMLInputElement>) => { 
            const newDates = [...selectedPeriods];
            newDates[indx].start = e.target.value;
            setSelectedPeriods(newDates);
          }}
          periodEndHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            const newDates = [...selectedPeriods];
            newDates[indx].end = e.target.value;
            setSelectedPeriods(newDates);
          }}
          onClick={() => removePeriod(indx)}
        />
      )}
    </div>
  )
}
