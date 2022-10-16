import React from 'react'
import './works.css'
import Laravel from '../../img/laravel.png'
import ReactLogo from '../../img/react.png'
import MongoDB from '../../img/mongo.png'
import TailwindLogo from '../../img/tailwind.png'
import FirebaseLogo from '../../img/firebase.png'

const Works = () => {
    return (
        <div className='works'>
            <div className="works-left">
                <h5>At a glance</h5>
                <h4>Recent Projects</h4>
                <p>I have been working on majorly e-commerce websites on my recent past whereby I build entire website by using Node.js, React.js MongoDB + express framework and Google's Firebase.</p>
                <p>In order to improve performance and optimization, I have also been expanding my expertise of database architecture and normalization. Because I understood how crucial it is to provide my clients with high-quality applications, I have also invested a lot of effort in experimenting with various data structures and alogrithms and determining which are optimal for a certain project.</p>
            </div>
            <div className="works-right">
                <div className="works-main-cirlcle">
                    <div className="works-sec-cirlcle"><img src={Laravel} alt="" /></div>
                    <div className="works-sec-cirlcle"><img src={ReactLogo} alt="" /></div>
                    <div className="works-sec-cirlcle"><img src={MongoDB} alt="" /></div>
                    <div className="works-sec-cirlcle"><img src={TailwindLogo} alt="" /></div>
                    <div className="works-sec-cirlcle"><img src={FirebaseLogo} alt="" /></div>
                </div>
                <div className="works-circle-bg blue"></div>
                <div className="works-circle-bg yellow"></div>
            </div>
        </div>
    )
}

export default Works