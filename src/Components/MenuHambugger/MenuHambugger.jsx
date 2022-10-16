import React from 'react'
import './menuhambugger.css'

const MenuHambugger = ({ close }) => {
    return (
        <span className={`menuhambugger ${close && 'close'}`} title={`${close ? 'Close menu' : 'Open menu'}`}>
            <span className='cross-bar'></span>
            <span className='cross-bar'></span>
            <span className='cross-bar'></span>
        </span>
    )
}

export default MenuHambugger