'use client'

import React from 'react'
import { Header } from './header'
import { CustomSelect } from './custome-select'

const options = [
  { value: 'бомбардировка', label: 'бомбардировка' },
  { value: 'пожар', label: 'пожар' },
]

export const Thematics = () => {
  return (
    <div>
      <Header
        text='тематики'
        icon={
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path 
              d='M3 8C3 7.05719 3 6.58579 3.29289 6.29289C3.58579 6 4.05719 6 5 6H15.9296C16.4536 6 16.7156
              6 16.9367 6.11833C17.1578 6.23665 17.3031 6.45463 17.5937 6.8906L20.2604 10.8906C20.6189 11.4283
              20.7981 11.6972 20.7981 12C20.7981 12.3028 20.6189 12.5717 20.2604 13.1094L17.5937 17.1094C17.3031
              17.5454 17.1578 17.7633 16.9367 17.8817C16.7156 18 16.4536 18 15.9296 18H5C4.05719 18 3.58579 18
              3.29289 17.7071C3 17.4142 3 16.9428 3 16V8Z' 
              fill='#7E869E' fillOpacity='0.25' stroke='#222222'/>
            <circle cx='15' cy='12' r='1' fill='#222222' stroke='#222222' strokeWidth='1.4'/>
          </svg>
        }
      />
      <CustomSelect
        isMulti={true}
        options={options}
        placeholder='выбрать тематику'
      />
    </div>
  )
}


// const [selectedThematics, setThematic] = useState<string[]>([])

// const removeThematic = (elementIndx: number) => {
//   setThematic(prev => prev.filter((value, indx) => indx !== elementIndx ))
// }

// const addThematic = (e: React.ChangeEvent<HTMLSelectElement>) => {
//   const selectedOption = e.target.value;
//   if (selectedOption && !selectedThematics.includes(selectedOption)) {
//     setThematic(prev => [...prev, selectedOption]);
//   }
// };