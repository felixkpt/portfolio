import React from 'react'
import './ItemsSwitcher.scss'

const ItemsSwitcher = ({ types, type, changeType }) => {
    return (
        <div className='items-switcher'>
            {types.map((t, indx) => <button key={indx} onClick={(e) => changeType(e.target.getAttribute("data-type"))} data-type={t.type}>{t.label}</button>)}
        </div>
    )
}

export default ItemsSwitcher