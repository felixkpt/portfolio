import { Animate } from 'react-simple-animate'
import './styles.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

const About = () => {

  const [about, setAbout] = useState(null)

  useEffect(() => {

    const getAbout = async () => {
      const data = await axios.get('resources/about.json')
      setAbout(() => data.data)

    }

    getAbout()

  }, [])

  return (
    <div id="about" className="about">
      <div className="about__content">
        <div className="about__content__personal-wrapper">
          <Animate play duration={2.5} delay={.6} start={{ transform: 'translateX(-900px)', opacity: "0" }}
            end={{ transform: 'translateX(0px)', opacity: "1" }}>
            <h2>{about !== null ? about.title : '...'}</h2>
            <div className="about__content__personal-wrapper__tech-stack">
              <div><h3>Backend Developer</h3> <p> The applications I develop are powered by core PHP and frameworks such as Laravel and CodeIgniter. I also create websites using WordPress whereby my main area of concentration is designing &amp; creation of WordPress Plugins &amp; Themes. </p> <p> Furthermore, I use Laravel to design and build tailored e-commerce websites with integration of popular payment methods that follow advanced security practices. </p> <p> I also have good knowledge in API design and development whereby I usually use Laravel API because of the better Authentication and Authorization Options that come with the framework.</p></div>
              <div><h3>Frontend Developer</h3> <p>Among the best skills that I have in the frontend development is the knowledge of Vanilla JavaScript which has helped me in developing a number of websites using Vue.js, React.js and Node.js.</p> <p>With my vast experience using CSS3, HTML5 &amp; JavaScript, I design &amp; build awesome User Interface (UI). Most of the websites that I have build used tailored CSS &amp; Bootstrap framework.</p> <p> For the past 1 year, I have also used Tailwind CSS which is a great framework that makes the process of designing and building modern looking websites to be easily achieved with structured & predictable design pattern </p> <p>I also optimize webpages for search engines to easily understand the content of the website, and for advanced Search Engine Optimization (SEO), I have setup structured Schema data for a great number of websites.</p> <p> Furthermore, I have experience using JavaScript &amp; jQuery in building parts of the User Interface especially in dynamic content manipulation involving AJAX &amp; XHRs, navigations &amp; dropdowns.</p></div>
            </div>
          </Animate>
        </div>
      </div>
    </div>
  )
}

export default About