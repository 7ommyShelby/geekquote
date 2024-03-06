import React from 'react'
import photo from '../img/logo.svg'
import './nav.css'

const Nav = () => {
    return (
        <nav>
            <div className='icon'>
                <img src={photo} alt="" />
                <h3>GeekFoods</h3>
            </div>
            <div><ul className='items flex-auto'>
                <li>home</li>
                <li>quote</li>
                <li>resturants</li>
                <li>foods</li>
                <li>contact</li>
            </ul></div>

            <button>Get Started</button>
        </nav>
    )
}

export default Nav
