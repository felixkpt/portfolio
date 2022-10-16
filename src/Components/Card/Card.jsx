import React from 'react'
import './card.css'
import { useNavigate } from 'react-router-dom'

const Card = ({ emoji, title, desc, target }) => {
    const navigate = useNavigate()
    return (
        <div className='card'>
            <img onClick={() => navigate(target)} src={emoji} alt="" />
            <h5 className="title">{title}</h5>
            <p className="desc">{desc}</p>
            <button className="card-button" onClick={() => navigate(target)}>Learn more</button>
        </div>
    )
}

export default Card