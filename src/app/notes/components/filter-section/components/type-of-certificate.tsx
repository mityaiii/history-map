import React from 'react'
import { Header } from './header'
import Checkbox from './checkbox'

const certificateTypes: string[] = [
  'Личное',
  'С чужих слов (слухи)',
  'Опосредованное свидетельство',
]

export const TypeOfCertificate = () => {
  return (
    <div>
      <Header
        text='тип свидетельства'
        icon={
          <svg 
            width='24' 
            height='24' 
            viewBox='0 0 24 24' 
            fill='none' 
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='12' cy='12' r='2.5' stroke='#222222'/>
            <path 
              d='M18.2265 11.3805C18.3552 11.634 18.4195 11.7607 18.4195 12C18.4195 12.2393 18.3552 12.366 18.2265
              12.6195C17.6001 13.8533 15.812 16.5 12 16.5C8.18799 16.5 6.39992 13.8533 5.77348 12.6195C5.64481 12.366
              5.58048 12.2393 5.58048 12C5.58048 11.7607 5.64481 11.634 5.77348 11.3805C6.39992 10.1467 8.18799
              7.5 12 7.5C15.812 7.5 17.6001 10.1467 18.2265 11.3805Z' 
              stroke='#222222'/>
            <path 
              d='M17.5 3.5H17.7C19.4913 3.5 20.387 3.5 20.9435 4.0565C21.5 4.61299 21.5 5.50866 21.5 7.3V7.5M17.5
              20.5H17.7C19.4913 20.5 20.387 20.5 20.9435 19.9435C21.5 19.387 21.5 18.4913 21.5 16.7V16.5M6.5 
              3.5H6.3C4.50866 3.5 3.61299 3.5 3.0565 4.0565C2.5 4.61299 2.5 5.50866 2.5 7.3V7.5M6.5 20.5H6.3C4.50866 
              20.5 3.61299 20.5 3.0565 19.9435C2.5 19.387 2.5 18.4913 2.5 16.7V16.5' 
              stroke='#7E869E' strokeOpacity='0.25' strokeLinecap='round'/>
          </svg>
        }
      />
      <ul className='ml-4 flex flex-col'>
        { 
          certificateTypes.map((value, indx) => 
            <Checkbox 
              key={indx}
              text={ value }
              id='id1'
            />)
        }
      </ul>
    </div>
  )
}
