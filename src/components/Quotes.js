import React from 'react'
import './quotes.css'
import data from './data.json'
import Nav from './Nav'
import Tab from './Tab'

const Quotes = () => {

    return (
        <>
            <Nav />
            <section className='quotes-display'>
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
