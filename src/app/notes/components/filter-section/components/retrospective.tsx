import React from 'react'
import { Header } from './header'
import { Checkbox } from '@/app/components/checkbox/checkbox'

const retrospectiveTypes: string[] = [
  'Свидетельство',
  'Воспоминание',
]

export const Retrospective = () => {
  return (
    <div>
      <Header
        text='ретроспектива'
        icon={
          <svg 
            width='24' 
            height='24' 
            viewBox='0 0 24 24' 
            fill='none' 
            xmlns='http://www.w3.org/2000/svg'
          >
            <path 
              d='M16 16H8.41548C7.23086 16 6.63856 16 6.11625 16.202C5.84326 16.3076 5.58719 16.4526 5.35619
              16.6324C4.91422 16.9763 4.60948 17.4842 4 18.5V7C4 5.11438 4 4.17157 4.58579 3.58579C5.17157 3 6.11438
              3 8 3H16C17.8856 3 18.8284 3 19.4142 3.58579C20 4.17157 20 5.11438 20 7V12C20 13.8856 20 14.8284 19.4142
              15.4142C18.8284 16 17.8856 16 16 16Z' 
              fill='#7E869E'
              fillOpacity='0.25'
            />
            <path 
              d='M20 12V17C20 18.8856 20 19.8284 19.4142 20.4142C18.8284 21 17.8856 21 16 21H6.5C5.11929 21 4 19.8807 4
              18.5V18.5C4 17.1193 5.11929 16 6.5 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20
              12V7C20 5.11438 20 4.17157 19.4142 3.58579C18.8284 3 17.8856 3 16 3H8C6.11438 3 5.17157 3 4.58579 
              3.58579C4 4.17157 4 5.11438 4 7V18.5' 
              stroke='#222222' strokeWidth='1.2'/>
            <path d='M9 8L15 8' stroke='#222222' strokeWidth='1.2' strokeLinecap='round'/>
          </svg>

        }
      />

      <ul className='ml-4 flex flex-col'>
        { retrospectiveTypes.map((value, indx) => 
          <Checkbox key={indx} id={`retrospective-${indx}`}>{value}</Checkbox>
        )}
      </ul>
    </div>
  )
}
