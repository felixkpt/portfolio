import { BsFillPersonPlusFill } from 'react-icons/bs'
import PageHeader from '../../Components/PageHeader'
import './Resume.scss'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import 'react-vertical-timeline-component/style.min.css'
import { MdWork } from 'react-icons/md'
import axios from 'axios'
import { useEffect, useState } from 'react'
import InlineLoader from '../../Components/Loaders'

const Resume = () => {

  const [resume, setResume] = useState(null)

  useEffect(() => {

    const getResume = async () => {
      const data = await axios.get('/resources/resume.json')
      // console.log(data.data)
      setResume(() => data.data)
    }

    getResume()

  }, [])

  return (
    <main id="resume" className="resume">
      <PageHeader pageTitle="My Resume" icon={<BsFillPersonPlusFill  size={30} />} />
      <div className='timeline'>
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          {resume !== null ?
            (

              <VerticalTimeline layout={'1-column'} lineColor="var(--theme-main-color)">
                {
                  resume.experience.map((item, i) => (
                    <VerticalTimelineElement key={i} className="timeline__experience__vertical-timeline-element"
                      contentStyle={{ background: 'none', color: 'var(--theme-sub-text-color)', border: '1.5px solid var(--theme-main-color)' }}
                      date={item.start + ' - ' + item.end} icon={<MdWork />} iconStyle={{
                        background: '#181818',
                        color: 'var(--theme-main-color)'
                      }}>
                      <div className="vertical-timeline-element-title-wrapper">
                        <h4>{item.title}</h4>
                        <h5>{item.subTitle}</h5>
                      </div>
                      <p className='vertical-timeline-element-description'>
                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                      </p>
                    </VerticalTimelineElement>
                  ))
                }
              </VerticalTimeline>

            ) : <InlineLoader text="Loading..." />}
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          {resume !== null ?
            (
              <VerticalTimeline layout={'1-column'} lineColor="var(--theme-main-color)">
                {
                  resume.education.map((item, i) => (
                    <VerticalTimelineElement key={i} className="timeline__experience__vertical-timeline-element"
                      contentStyle={{ background: 'none', color: 'var(--theme-sub-text-color)', border: '1.5px solid var(--theme-main-color)' }}
                      date={item.start + ' - ' + item.end} icon={<MdWork />} iconStyle={{
                        background: '#181818',
                        color: 'var(--theme-main-color)'
                      }}>
                      <div className="vertical-timeline-element-title-wrapper">
                        <h4>{item.title}</h4>
                        <h5>{item.subTitle}</h5>
                      </div>
                      <p className="vertical-timeline-element-description">{item.description}</p>
                    </VerticalTimelineElement>
                  ))
                }
              </VerticalTimeline>
            ) : <InlineLoader text="Loading" />
          }
        </div>
      </div>
    </main>
  )
}

export default Resume