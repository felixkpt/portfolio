import React from 'react'
import Card from '../Card/Card'
import './services.css'
import backend from '../../img/back-end.png'
import frontend from '../../img/front-end.jpeg'
import About from '../About'

const Services = () => {
    
    return (
        <div className='services'>
            <div className="services-left">
                <h5>What I do</h5>
                <About />

            </div>
            <div className="services-right">
                <Card emoji={backend} title="Backend" target="/skills#BE" desc='Core PHP, Laravel PHP, MySql + MongoDB Expert, Problem-Solving' />
                <Card emoji={frontend} title="Frontend" target="/skills#FE" desc='HTML DOM Manipulation, JSON, AJAX Requests, React.js, Designer' />
            </div>
            <div className="blur s-blur2" style={{}}></div>
        </div>
    )
}

export default Services