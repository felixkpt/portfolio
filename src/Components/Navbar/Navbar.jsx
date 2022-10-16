import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuHambugger from '../MenuHambugger/MenuHambugger'
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import './navbar.css'
const Navbar = ({ toggleMenu, menuListStyle }) => {
    const navigate = useNavigate()

    const [menuText, setTxt] = useState(<MenuHambugger />)

    useEffect(() => {
        const setter = () => {
            setTxt(menuListStyle === null ? <MenuHambugger /> : <MenuHambugger close={true} />)
        }
        setter()

    }, [menuListStyle])
    return (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name"><Link className="link" to="/">Felix</Link></div>
                <span className='mode-toggler'><ThemeToggler /></span>
            </div>
            <div className="n-center">
                <div className="n-list">
                    <ul style={menuListStyle}>
                        <li><Link onClick={() => toggleMenu('close')} className='link' to="/">Home</Link></li>
                        <li><Link onClick={() => toggleMenu('close')} className='link' to="/skills">Skills</Link></li>
                        <li><Link onClick={() => toggleMenu('close')} className='link' to="/resume">Resume</Link></li>
                        <li><Link onClick={() => toggleMenu('close')} className='link' to="/portfolio">Portfolio</Link></li>
                    </ul>
                </div>
            </div>
            <div className="n-right">
                <span className='menu-toggler' onClick={toggleMenu}>{menuText}</span>
                <button className='button n-button' onClick={() => navigate('/contact')}>Contact</button>
            </div>
        </div>
    )
}

export default Navbar