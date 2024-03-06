import React from 'react'
import './tab.css'


const Tab = ({text, auther}) => {
  return (
    <div className='banner'>
      <p>{text}</p>
      <span>{auther}</span>
    </div>
  )
}

export default Tab
