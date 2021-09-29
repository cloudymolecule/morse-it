import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <div className='nav'>
                    <div className='nav-container container'>
                        <Link onClick={closeMobileMenu} to='/' className='nav-logo'>
                            <div className='nav-name'>Morse-IT</div>
                        </Link>
                        <div onClick={handleClick} className='menu-icon'>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link onClick={closeMobileMenu} className='nav-link' to='/morse'>MORSE</Link>
                            </li>
                            <li className='nav-item'>
                            </li>
                            <li className='nav-item'>
                            </li>
                            <li className='nav-item'>
                            </li>
                            <li className='nav-item'>
                            </li>
                            <li className='nav-item'>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Nav