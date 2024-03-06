import React from 'react'
import './quotes.css'
import data from './data.json'
import Nav from './Nav'
import Tab from './Tab'
import AOS from 'aos';
import 'aos/dist/aos.css';

import {useEffect} from "react";


const Quotes = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            <Nav />
            <section className='quotes-display' data-aos="fade-up"
            >
                {
                    data.map((e, idx) => {
                        return (
                            <Tab
                                text={e.quote}
                                auther={e.auther}
                                key={idx}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}

export default Quotes
