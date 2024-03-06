import React from 'react'
import './tab.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Tab = ({ text, auther }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='banner' data-aos="fade-up">
      <p>{text}</p>
      <span>{auther}</span>
    </div>
  )
}

export default Tab
