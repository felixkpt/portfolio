import React from 'react'
import { FaDev } from 'react-icons/fa'
import { DiGit, DiBootstrap, DiCss3, DiReact, DiPhp, DiLaravel, DiWordpress, DiJavascript, DiDatabase, DiAws } from 'react-icons/di'
import { useEffect } from 'react'
import { Animate } from 'react-simple-animate'
import './circle.css'

function Circle() {
    
  useEffect(() => {

    let radius = (r) => (r || document.querySelector('.about__content__services-wrapper__inner-content').offsetWidth / 2)
    window.addEventListener('resize', () => {
      radius(document.querySelector('.about__content__services-wrapper__inner-content').offsetWidth / 2)
      transform(radius())
    })

    function transform(radius) {
      document.querySelectorAll('.about__content__services-wrapper__inner-content div').forEach( node => {
        const val = 32.7 * parseInt(node.getAttribute('data-num'))
        node.style.transform = `rotateZ( ${val}deg ) translateX(${radius - 0}px)`
        // node.querySelector('svg').style.transform = `rotateZ( -${val}deg )`
      })
    }
    
    transform(radius())
    

  }, [])
  
    return (
        <div className="about__content__services-wrapper home__details__tech-stack">
            <Animate play duration={3} delay={1} start={{ transform: 'translateX(900px)' }} end={{ transform: 'translateX(0px)' }}>
                <div className='about__content__services-wrapper__inner-content'>
                    <div className="skill" data-num="1" title="Dev">
                        <FaDev size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="2" title="Git">
                        <DiGit size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="3" title="Bootstrap">
                        <DiBootstrap size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="4" title="CSS3">
                        <DiCss3 size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="5" title="React">
                        <DiReact size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="6" title="PHP">
                        <DiPhp size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="7" title="Laravel">
                        <DiLaravel size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="8" title="Wordpress">
                        <DiWordpress size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="9" title="JavaScript">
                        <DiJavascript size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="10" title="Database">
                        <DiDatabase size={40} color="#ccc" />
                    </div>
                    <div className="skill" data-num="11" title="Amazon Web Servers">
                        <DiAws size={40} color="#ccc" />
                    </div>
                </div>
            </Animate>
        </div>
    )
}

export default Circle