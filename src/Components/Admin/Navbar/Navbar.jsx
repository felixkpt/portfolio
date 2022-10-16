import React, { useEffect, useRef } from 'react'
import './navbar.css'
const Navbar = ({ aside, setShowSidebar }) => {

    var menu = useRef()
    var checkbox = useRef()
    useEffect(() => {
        checkbox.current.setAttribute("checked", "checked")
    }, [])

    const checkboxClickHandler = (e) => {
        if (e.target.checked === true) {
            checkbox.current.setAttribute("checked", "checked")

        } else {
            checkbox.current.setAttribute("checked", "unchecked")

        }

        if (window.getComputedStyle(aside.current, '').display === 'block') {
            aside.current.style.display = 'none'
            menu.current.setAttribute("title", "Show side menu")
        } else {
            aside.current.style.display = 'block'
            menu.current.setAttribute("title", "Hide side menu")
        }

        setShowSidebar(!!window.getComputedStyle(aside.current, '').display === 'block')

    }

    return (
        <nav>
            <div className="left">
                <div className="menu" title="Close side menu" ref={menu}>
                    <input type="checkbox" className="toggler" onClick={checkboxClickHandler} ref={checkbox} />
                    <div className="hambuger"><div></div></div>
                </div>
            </div>
            <div className="center">
                <div className="search-wrapper">
                    <input type="search" placeholder="Search..." />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg>
                </div>
            </div>

            <div className="right">
                <div className="right-wrapper">
                    <div className="account">
                        <div className="avatar">
                            <img src="./public/images/img2.jpg" alt="" />
                        </div>
                        <div className="dropdown">
                            <ul>
                                <li><a href="#!">My account</a></li>
                                <li><a href="#!">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar