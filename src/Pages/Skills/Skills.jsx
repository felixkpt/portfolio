import { BsBookshelf } from 'react-icons/bs'
import PageHeader from '../../Components/PageHeader'
import './Skills.scss'
import { Animate } from 'react-simple-animate'
import { AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import { useEffect, useState } from 'react'
import axios from 'axios'
import InlineLoader from '../../Components/Loaders'

const Skills = () => {

  const [skills, setSkills] = useState(null)

  useEffect(() => {

    const getSkills = async () => {
      const data = await axios.get('resources/skills.json')
      setSkills(() => data.data)
    }

    getSkills()

  }, [])

  return (
    <main id="skills" className="skills">
      <PageHeader pageTitle="My Skills" icon={<BsBookshelf size={30} />} />
      <div className="skills__content-wrapper">
        {skills !== null ?
          (<div className="skills-grid">
            {
              skills.map((item, i) => [
                <div key={i} id={item.id} className="skills__content-wrapper__inner-content">
                  <Animate
                    play
                    duration={1.4}
                    start={{
                      opacity: .76,
                      transform: 'translateX(-400px)'
                    }}
                    end={{
                      opacity: 1,
                      transform: 'translateX(0px)'
                    }}
                  >
                    <h3 className="skills__content-wrapper__inner-content__category-text">{item.label}</h3>
                    <div className="skills__content-wrapper__inner-content__category-line">
                      {
                        item.data.map((skillItem, j) => (
                          <AnimateKeyframes key={j} play duration={1} keyframes={["opacity: 1", "opacity: 0"]} iterationCount={1}>
                            <div className="skill-progressbar-wrapper">
                              <h4 className="skill">{skillItem.skillName} <span>|</span> <span>{skillItem.experience}</span></h4>
                              <div className="progressbar">
                                <Line percent={skillItem.percentage}
                                  strokeWidth="1"
                                  strokeColor="var(--theme-main-color)"
                                  trailWidth={"2"}
                                  strokeLinecap="square" />
                              </div>
                            </div>
                          </AnimateKeyframes>
                        )
                        )
                      }
                    </div>
                  </Animate>
                </div>
              ])
            }
          </div>) : <InlineLoader text="Loading..." />
        }
      </div>
    </main>
  )
}

export default Skills