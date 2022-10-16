import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({ img, texts }) => {
    return (
        <div className='floating-div'>
            <img src={img} alt="" />
            <span>
                {texts.map(text => (<span key={text}>{text}<br /></span>))}
            </span>
        </div>
    )
}

export default FloatingDiv