import React from 'react'

import './intro.css'
import TheMan from '../../img/felix-no-bg.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import Green from '../../img/green.svg'
import Gray from '../../img/gray.svg'
import Laravel from '../../img/laravel.png'
import ReactLogo from '../../img/react.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-name">
                    <span>Hello, I am</span>
                    <span>Felix Biwott</span>
                    <span>PHP & JavaScript Full Stack Developer</span>
                </div>
                <div className="intro-icons">
                    <p>
                    I've worked in web development for 4 years, including 2 years as a freelancer. During this time, I've developed exceptional skills in designing and constructing beautiful, reliable, quick, and secure websites. I am a self-driven individual that readily follows directions and never gives up until the desired outcomes are obtained.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-right-inner">
                    <img src={Green} alt="" />
                    <img src={Gray} alt="" />
                    <div className="TheMan"><img src={TheMan} alt="" /></div>
                    <div className='intro-techstack-top'>
                        <div style={{ right: '0' }}>
                            <FloatingDiv
                                img={crown} texts={['WEB', 'DEVELOPER']} />
                        </div>
                        <div style={{ left: '0' }}>
                            <FloatingDiv
                                img={Laravel} texts={['FULL', 'STACK']} />
                        </div>
                    </div>
                    <div className='intro-techstack-bottom'>
                        <div style={{ right: '0' }}>
                            <FloatingDiv
                                img={ReactLogo} texts={['REACT', 'DEVELOPER']} />
                        </div>
                        <div style={{ left: '0' }}>
                            <FloatingDiv
                                img={thumbup} texts={['MERN', 'STACK']} />
                        </div>
                    </div>
                </div>
                {/* blur divs */}
                <div className="blur intro-blur1"></div>
                <div className="blur intro-blur2"></div>

            </div>
        </div>
    )
}

export default Intro